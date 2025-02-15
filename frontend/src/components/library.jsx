import React from "react";
import {
    BookOpen,
    CircleEqual,
    Beaker,
    GraduationCap,
    PenTool,
    Globe2,
} from "lucide-react";

const SubjectCards = () => {
    const subjects = [
        {
            name: "Mathematics",
            icon: <CircleEqual className="w-6 h-6 text-blue-500" />,
            color: "bg-blue-50",
            imageSrc:
                "https://imgs.search.brave.com/rexMcXwVX2F5s_-I0OIn8PCZLUfXA2qPyYTFbPJD5pI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcw/NDkzMzQxL3Bob3Rv/L21hdGgtcHJvYmxl/bXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpVNlpGNGZX/dGN3VHU1TW96c3lR/Y19BQUdza2tQWEh5/cnJvVTVmeGU5MVk9",
        },
        {
            name: "Science",
            icon: <Beaker className="w-6 h-6 text-green-500" />,
            color: "bg-green-50",
            imageSrc:
                "https://imgs.search.brave.com/RLgc9Pe38LlZhDHuBjkQo3iR_p5k6oYwk6zwA0BRGKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzU5Lzc1LzU0/LzM2MF9GXzE1OTc1/NTQzNl9SaHFLM2VX/TWxhRklxMHdiNXY5/a3pWUHdOWHcyM1Mw/TC5qcGc",
        },
        {
            name: "English",
            icon: <BookOpen className="w-6 h-6 text-purple-500" />,
            color: "bg-purple-50",
            imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwb7H6P-RevptHA4i29BxTggm6E06UwMBzw&s",
        },
        {
            name: "Hindi",
            icon: <PenTool className="w-6 h-6 text-red-500" />,
            color: "bg-red-50",
            imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ryFQz2ATwfrMtNXGfKoZW396dqXz1ZQ62g&s",
        },
        {
            name: "Social Science",
            icon: <Globe2 className="w-6 h-6 text-orange-500" />,
            color: "bg-orange-50",
            imageSrc:
                "https://odishabytes.com/wp-content/uploads/2020/07/social-science1.png",
        },
        {
            name: "Art",
            icon: <GraduationCap className="w-6 h-6 text-pink-500" />,
            color: "bg-pink-50",
            imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gtwmJMLQ2sUP8_tmsm7YynmJXzQvGessMg&s",
        },
    ];

    return ( <section className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="w-full max-w-4xl mx-auto relative top-40 p-6 ">
            <h1 className="text-6xl font-bebas text-slate-200  text-center mb-6">
                Your Courses
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className={`rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100`}
                    >
                        {/* Image Section */}
                        <div className="w-full h-40 relative">
                            <img
                                src={subject.imageSrc}
                                alt={`${subject.name} thumbnail`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Section */}
                        <div className={`${subject.color} p-4`}>
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {subject.name}
                                </h2>
                                <span className="p-2 rounded-full bg-white">
                                    {subject.icon}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">
                                CBSE Class 10
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
        
    );
};

export default SubjectCards;
