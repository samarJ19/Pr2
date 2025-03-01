import React, { useState, useEffect } from "react";
import HomePage from "./HomePage"
import PerformanceReports from "../components/PerformanceReports";
import Dashboard from "../components/Dashboard"
import SubjectCards from "../components/SubjectCards";
import Footer from "../components/Footer";
import Banner from "./Banner"
import Mhome from "./Mhome";
import Navbar from "../components/Navbar";
const LandingPage = () => {
    const [activeSection, setActiveSection] = useState("home");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6, // Adjust this to consider how much of the section needs to be visible
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
   return token ? (
       <div className="relative flex flex-row w-screen max-w-[2000px]">
           <div className="flex flex-col w-[100%] right-0 bg-gray-100 h-screen max-h-[800px] min-h-[600px] relative">
               <Navbar/>
               <Banner activeSection={activeSection} />
               <div id="home" className="section">
                   <HomePage />
               </div>
               <div id="services" className="section">
                   <Dashboard />
               </div>
               <div id="library" className="section">
                   <SubjectCards />
               </div>
               <div id="reports" className="section">
                   <PerformanceReports />
               </div>
               <div id="footer" className="section">
                   <Footer />
               </div>
           </div>
       </div>
   ) : (
       <Mhome />
   );
};

export default LandingPage;
