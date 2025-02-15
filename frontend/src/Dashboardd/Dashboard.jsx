import React from 'react';
import { FaChartBar, FaCalendarAlt, FaLightbulb, FaCog, FaUsers } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Dashboard = () => {
  // Sample data for charts
  const skillProgressData = [
    { name: 'MCQs', value: 75 },
    { name: 'Practical Exams', value: 60 },
    { name: 'Essays', value: 85 },
  ];

  return (
    <section className="w-full h-screen box-border bg-[url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center p-6 lg:p-10">
      <div className="max-w-6xl mx-auto  rounded-lg shadow-lg p-8">
        <h1 className="text-6xl font-bebas mb-6 text-slate-200 text-center">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Assessment Overview */}
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaChartBar className="mr-2 text-2xl" /> Assessment Overview
            </h2>
            <div className="flex-1">
              <LineChart width={300} height={300} data={skillProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} />
              </LineChart>
            </div>
            <p className="mt-4">
              Get a graphical view of all your completed, ongoing, and upcoming assessments.
            </p>
          </div>

          {/* Skill Progress Bar */}
          <div className="bg-green-500 text-white rounded-lg shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaChartBar className="mr-2 text-2xl" /> Skill Progress Bar
            </h2>
            <div className="flex-1">
              <p className="mb-4">
                Visual progress trackers for various skill levels based on your assessment performance.
              </p>
              <div className="bg-white text-green-600 p-4 rounded-lg shadow-lg">
                <p><strong>MCQs:</strong> 75%</p>
                <p><strong>Practical Exams:</strong> 60%</p>
                <p><strong>Essays:</strong> 85%</p>
              </div>
            </div>
          </div>

          {/* Upcoming Exams */}
          {/* <div className="bg-orange-500 text-white rounded-lg shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaCalendarAlt className="mr-2 text-2xl" /> Upcoming Exams
            </h2>
            <div className="flex-1">
              <p className="mb-4">
                A calendar view or list of scheduled exams, deadlines, and notifications.
              </p>
              <div className="bg-white text-orange-600 p-4 rounded-lg shadow-lg">
                <p><strong>Math Exam:</strong> Sep 25, 2024</p>
                <p><strong>History Essay:</strong> Sep 30, 2024</p>
                <p><strong>Science Lab:</strong> Oct 05, 2024</p>
              </div>
            </div>
          </div> */}

          {/* Personalized Feedback */}
          <div className="bg-purple-500 text-white rounded-lg shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaLightbulb className="mr-2 text-2xl" /> Personalized Feedback
            </h2>
            <div className="flex-1">
              <p className="mb-4">
                AI-powered insights and advice on improving weak areas based on prior assessments.
              </p>
              <div className="bg-white text-purple-600 p-4 rounded-lg shadow-lg">
                <p><strong>Improvement Areas:</strong> Focus on MCQs.</p>
                <p><strong>Strengths:</strong> Strong in Essays.</p>
              </div>
            </div>
          </div>

          {/* Accessibility Settings */}
          {/* <div className="bg-gray-500 text-white rounded-lg shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaCog className="mr-2 text-2xl" /> Accessibility Settings
            </h2>
            <div className="flex-1">
              <p className="mb-4">
                Quick access to enable or adjust voice-to-text, text-to-speech, or other accessibility features.
              </p>
              <div className="bg-white text-gray-600 p-4 rounded-lg shadow-lg">
                <p><strong>Voice-to-Text:</strong> Enabled</p>
                <p><strong>Text-to-Speech:</strong> Disabled</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
