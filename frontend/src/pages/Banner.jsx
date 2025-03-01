import React from "react";

const Banner = () => {
    return (
        <section
            style={{
                backgroundImage: "url('/images/banner-bg.jpg')",
            }}
            className="font-bold bg-right-bottom bg-cover w-full max-w-[2000px] box-border h-[800px] max-h-[900px] flex items-center justify-center px-20"
        >
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
