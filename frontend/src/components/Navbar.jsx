import React, { useState, useEffect } from "react";

const Navbar = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
                                onClick={() => scrollToSection(`${link.id}`)}
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
    );
};

export default Navbar;
