import React from "react";
import { FaRegChartBar, FaAccessibleIcon, FaBrain } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";

const HomePage = () => {
    return (
        <section
            style={{
                backgroundImage:
                    "url('https://c1.wallpaperflare.com/preview/289/102/403/various-book-books-college.jpg')",
            }}
            className="font-bold bg-cover w-full box-border h-screen flex items-center justify-center px-20"
        >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Left Side: Introduction */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-5xl font-bebas mb-6 leading-tight">
                        Revolutionize <span className="text-yellow-300">Education</span>
                        <br/> In
                        <br/> <span className="text-yellow-300">Rural</span> India
                    </h1>
                    <p className="text-lg text-white mb-8 bg-stone-800 bg-opacity-60 p-4 rounded-lg">
                        To create an AI-driven platform that makes education
                        accessible, personalised, and culturally relevant for
                        rural indian students, overcoming language barriers and
                        teacher shortage to empower every child to learn and
                        grow.
                    </p>
                    <button className="px-8 py-3 rounded-full shadow-lg hover:bg-blue-200 transition duration-300">
                        Get Started
                    </button>
                </div>

                {/* Right Side: Diagrams & Features */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row gap-8 mb-12">
                        {/* Feature 1 */}
                        <div className="flex flex-col transition-transform duration-300 ease hover:scale-110 hover:bg-cyan-500 hover:shadow-cyan-500/100 cursor-pointer text-white items-center p-6 bg-stone-800 bg-opacity-60 rounded-lg shadow-lg ">
                            <FaRegChartBar className="text-4xl mb-4" />
                            <h2 className="text-xl font-semibold mb-2">
                                Multilingual Support
                            </h2>
                            <p className="text-base">
                                Uses NLP to provide system that can understand
                                and respond in multiple languages.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex text-white flex-col items-center p-6 bg-stone-800 bg-opacity-60 rounded-lg shadow-lg transition-transform duration-300 ease hover:scale-110 hover:bg-[#26d8a9] hover:shadow-[#26d8a9] cursor-pointer">
                            <AiOutlineUsergroupAdd className="text-4xl mb-4" />
                            <h2 className="text-xl font-semibold mb-2">
                                Adaptive Learning Framework
                            </h2>
                            <p className="text-base">
                                Developed an AI powered personalised learning
                                platform that dynamically adjust the contect and
                                difficulty level based on learners performance
                                and progress, making learning more effective.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex text-white flex-col items-center p-6 bg-stone-800 bg-opacity-60 rounded-lg shadow-lg transition-transform duration-300 ease hover:scale-110 hover:bg-orange-500 hover:shadow-orange-500/100 cursor-pointer">
                            <FaBrain className="text-4xl mb-4" />
                            <h2 className="text-xl font-semibold mb-2">
                                AI Analysis
                            </h2>
                            <p className="text-base">
                                Using AI for analysis of student performance.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex text-white flex-col items-center p-6 bg-stone-800 bg-opacity-60 rounded-lg shadow-lg transition-transform duration-300 ease hover:scale-110 hover:bg-[#f0b537] hover:shadow-[#f0b537] cursor-pointer">
                            <GiTeacher className="text-4xl mb-4" />
                            <h2 className="text-xl font-semibold mb-2">
                                ChatBot
                            </h2>
                            <p className="text-base">
                                Implement and AI driven ChatBot that assist
                                users by answering their queries, providing
                                recommendations, and offering instant guidance
                                24/7, enhancing the user experience.
                            </p>
                        </div>
                    </div>

                    {/* Diagrams or Additional Visual Content */}
                    {/* <div className="flex items-center justify-center">
                        <img
                            src="https://cdn-ilafodp.nitrocdn.com/ESMzAbzoIaaiSZsHODeAqOJjFsCBVGze/assets/images/optimized/wp-content/uploads/2023/11/70522c8bdcb42648181866a9da0ba274.51c720d7-7102-4bfb-899f-ad764f669c68.jpeg"
                            alt="Assessment Flow"
                            className="max-w-md rounded-lg shadow-xl mb-3 p-7"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default HomePage;
