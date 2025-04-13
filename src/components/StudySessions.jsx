import React from "react";

const subjects = [
  { name: "Physics", topics: 12, progress: 68, icon: "🔭" },
  { name: "Mathematics", topics: 15, progress: 75, icon: "📊" },
  { name: "Chemistry", topics: 10, progress: 42, icon: "🧪" },
  { name: "Biology", topics: 14, progress: 56, icon: "🧬" },
];

const recentlyStudied = [
  { name: "Kinematics", subject: "Physics", time: "2h ago" },
  { name: "Calculus", subject: "Mathematics", time: "Yesterday" },
  { name: "Organic Chemistry", subject: "Chemistry", time: "3d ago" },
];

const recommended = {
  name: "Physics: Waves & Optics",
  message: "Our AI noticed you might need to review this topic before your exam.",
};

const StudySessions = () => {
  return (
    <div className="p-6 bg-blue-50 mx-auto">
      {/* Search Bar */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Study Sessions</h1>
        <input
          type="text"
          placeholder="Search subjects or topics..."
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Subjects */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Subjects</h2>
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">
                {subject.icon} {subject.name}
              </span>
              <span className="text-gray-500 text-sm">{subject.topics} topics</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>
            <p className="text-right text-sm text-gray-600 mt-1">{subject.progress}%</p>
          </div>
        ))}
      </div>

      {/* Recently Studied */}
      <div className="mb-6 shadow rounded">
        <h2 className="text-lg font-semibold mb-2">Recently Studied</h2>
        {recentlyStudied.map((study, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded-lg mb-2 flex justify-between">
            <div>
              <p className="font-medium">{study.name}</p>
              <p className="text-sm text-gray-500">{study.subject}</p>
            </div>
            <span className="text-gray-400 text-sm">{study.time}</span>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h3 className="font-medium text-blue-700">{recommended.name}</h3>
        <p className="text-sm text-gray-600">{recommended.message}</p>
        <button className="mt-3 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-800">
          Start Focused Session
        </button>
      </div>
    </div>
  );
};

export default StudySessions;
