import requests
from bs4 import BeautifulSoup
import pandas as pd
import json
from typing import Dict, List
import logging

class SimpleCBSEScraper:
    def __init__(self, url: str):
        self.url = url
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        # Set up logging
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s'
        )
        self.logger = logging.getLogger(__name__)

    def scrape_resources(self) -> Dict:
        """
        Scrape educational resources using simple selector logic
        """
        try:
            # Fetch the webpage
            response = requests.get(self.url, headers=self.headers)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Find all headings
            subheadings = soup.find_all('h3')
            
            # Dictionary to store the mapping of subheadings to links
            data_mapping = {}
            
            # Process each heading
            for heading in subheadings:
                heading_text = heading.get_text(strip=True)
                
                # Find the next table after this heading
                table = heading.find_next('table')
                
                if table:
                    links = []
                    # Process each row in the table
                    for row in table.find_all('tr'):
                        # Process each cell in the row
                        for cell in row.find_all('td'):
                            # Find link in the cell
                            link = cell.find('a')
                            if link and link.get('href'):
                                links.append({
                                    'title': link.get_text(strip=True),
                                    'url': link['href']
                                })
                    
                    # Only add to mapping if links were found
                    if links:
                        data_mapping[heading_text] = links
                        self.logger.info(f"Found {len(links)} links under '{heading_text}'")
            
            return data_mapping
            
        except requests.exceptions.RequestException as e:
            self.logger.error(f"Error fetching webpage: {str(e)}")
            return {}
        except Exception as e:
            self.logger.error(f"Error during scraping: {str(e)}")
            return {}

    def save_to_json(self, data: Dict, filename: str = 'educational_resources.json'):
        """Save data to JSON file"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            self.logger.info(f"Data saved to {filename}")
        except Exception as e:
            self.logger.error(f"Error saving to JSON: {str(e)}")

   
def main():
    # Initialize scraper with your target URL
    url = "https://byjus.com/cbse-study-material/"
    scraper = SimpleCBSEScraper(url)
    
    # Scrape the data
    data = scraper.scrape_resources()
    
    # Print summary of findings
    print("\nScraped Resources Summary:")
    for section, links in data.items():
        print(f"\n{section}: {len(links)} resources found")
        # Print first 3 items as sample
        for link in links[:3]:
            print(f"- {link['title']}")
    
    # Save data in different formats
    scraper.save_to_json(data)

if __name__ == "__main__":
    main()