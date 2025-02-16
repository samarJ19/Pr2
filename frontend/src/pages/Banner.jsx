import React, { useState, useEffect } from "react";

const Banner = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change opacity when user scrolls past the banner
            setIsScrolled(window.scrollY > window.innerHeight * 0.2);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const getActiveClass = (id) => {
        return activeSection === id
            ? "scale-110 rounded-full text-white"
            : "text-gray-200";
    };

    return (
        <section
            style={{
                backgroundImage: "url('/images/banner-bg.jpg')",
            }}
            className="font-bold bg-right-bottom bg-cover w-full max-w-[2000px] box-border h-[800px] max-h-[900px] flex items-center justify-center px-20"
        >
            <header
                className={`max-w-[2000px] mx-auto fixed top-0 w-full z-50 px-36 box-border text-white transition-all duration-300 ${
                    isScrolled
                        ? "bg-[var(--primary-color)] bg-opacity-100 pt-0 rounded-b-3xl"
                        : "bg-opacity-0 pt-10"
                }`}
            >
                <nav className="flex items-center justify-between px-8 py-4">
                    <button
                        onClick={() => scrollToSection(`top`)}
                        className="text-3xl font-extrabold"
                    >
                        Scholar
                    </button>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6 text-lg font-medium">
                        {[
                            { id: "home", name: "Home" },
                            { id: "services", name: "Dashboard" },
                            { id: "library", name: "Library" },
                            { id: "reports", name: "Reports" },
                            { id: "footer", name: "Contact" },
                        ].map((link) => (
                            <li key={link.id}>
                                <button
                                    onClick={() =>
                                        scrollToSection(`${link.id}`)
                                    }
                                    className={`hover:text-white hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg ${getActiveClass(
                                        `${link.id}`
                                    )}`}
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div className="text-white flex flex-col lg:flex-row items-center justify-center gap-12 px-36">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        Revolutionize Education in Rural India
                    </h1>
                    <p className="text-lg mb-8">
                        To create an AI-driven platform that makes education
                        accessible, personalised, and culturally relevant for
                        rural Indian students, overcoming language barriers and
                        teacher shortage to empower every child to learn and
                        grow.
                    </p>
                    <button className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-full shadow-lg hover:scale-110 transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
