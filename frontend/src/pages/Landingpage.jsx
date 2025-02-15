import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../home/HomePage";
import AssessmentCreation from "../Dashboard/AssessmentCreation"
import PerformanceReports from "../performanceReports/PerformanceReports";
import AccessibilityOptions from "../accessibility/AccessibilityOptions";
import Dashboard from "../Dashboardd/Dashboard";
import Support from "../support/Support";
import ResultsAndAnalytics from "../Result/ResultsAndAnalytics";
import SubjectCards from "../components/library";
import Footer from "../components/footer";


const LandingPage = ()=>{
    const [activeSection, setActiveSection] = useState("home");

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
    return (
        <div className="flex flex-row w-screen">
            {/* <Sidebar activeSection={activeSection} /> */}

            {/* Main Content */}
            <div className="flex flex-col w-[100%] right-0 bg-gray-100 min-h-screen">
                <div id="home" className="section">
                    <HomePage />
                </div>

                <div id="dashboard" className="section">
                    <Dashboard />
                </div>
                <div id="library" className="section ">
                    <SubjectCards/>
                </div>
                {/* add educational library at least thumbnails
                <div id="assessments" className="section">
                    <AssessmentCreation />
                </div> */}

                {/* <div id="accessibility" className="section">
                    <AccessibilityOptions />
                </div> */}

                <div id="reports" className="section">
                    <PerformanceReports />
                </div>

                {/* <div id="resultandanalytics" className="section">
                    <ResultsAndAnalytics/>
                </div> */}
                {/* Add a new footer
                <div id="support" className="section">
                    <Support />
                </div> */}
                <div id="footer" className="section">
                    <Footer/>
                </div>
            </div>
        </div>
    );
        
}

export default LandingPage;