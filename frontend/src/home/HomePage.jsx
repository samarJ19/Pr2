import React from "react";
import { FaRegChartBar, FaBrain } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";

const HomePage = () => {
    return (
        <section className="w-full h-screen max-h-[100px] min-h-[600px] max-w-[2000px] flex items-center justify-center px-40 py-20 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center p-6 bg-[var(--secondary-color)] rounded-lg shadow-lg">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[var(--primary-color)] text-white mb-4">
                        <FaRegChartBar className="text-4xl" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                        Multilingual Support
                    </h2>
                    <p className="text-base text-gray-600">
                        Uses NLP to provide a system that understands and
                        responds in multiple languages.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center p-6 bg-[var(--secondary-color)] rounded-lg shadow-lg">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[var(--primary-color)] text-white mb-4">
                        <AiOutlineUsergroupAdd className="text-4xl" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                        Adaptive Learning
                    </h2>
                    <p className="text-base text-gray-600">
                        AI-powered platform that adjusts content and difficulty
                        based on learner progress.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center p-6 bg-[var(--secondary-color)] rounded-lg shadow-lg">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[var(--primary-color)] text-white mb-4">
                        <FaBrain className="text-4xl" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">AI Analysis</h2>
                    <p className="text-base text-gray-600">
                        AI-driven analytics to monitor and improve student
                        performance.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center text-center p-6 bg-[var(--secondary-color)] rounded-lg shadow-lg">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[var(--primary-color)] text-white mb-4">
                        <GiTeacher className="text-4xl" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">AI Chatbot</h2>
                    <p className="text-base text-gray-600">
                        AI-driven chatbot providing instant guidance,
                        recommendations, and support 24/7.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
