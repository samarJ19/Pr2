import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../home/HomePage";
import AssessmentCreation from "../Dashboard/AssessmentCreation";
import PerformanceReports from "../performanceReports/PerformanceReports";
import AccessibilityOptions from "../accessibility/AccessibilityOptions";
import Dashboard from "../Dashboardd/Dashboard";
import Support from "../support/Support";
import ResultsAndAnalytics from "../Result/ResultsAndAnalytics";
import SubjectCards from "../components/library";
import Footer from "../components/footer";
import Banner from "./Banner";

const LandingPage = () => {
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
        <div className="flex flex-row w-screen max-w-[2000px]">
            <div className="flex flex-col w-[100%] right-0 bg-gray-100 h-screen h-max-[800px] h-min-[600px]">
                <div id="top" className="section w-screen max-w-[2000px]">
                    <Banner activeSection={activeSection} />
                </div>
                <div id="home" className="section w-screen max-w-[2000px]">
                    <HomePage />
                </div>
                <div id="services" className="section w-screen max-w-[2000px]">
                    <Dashboard />
                </div>
                <div id="library" className="section w-screen max-w-[2000px]">
                    <SubjectCards />
                </div>
                <div id="reports" className="section w-screen max-w-[2000px]">
                    <PerformanceReports />
                </div>
                <div id="footer" className="section w-screen max-w-[2000px]">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
