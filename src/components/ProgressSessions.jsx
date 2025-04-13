import React from "react";

const ProgressSessions = () => {
  return (
    <div className="px-4 bg-blue-50 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Progress</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button className="border px-2 py-1 rounded-md">◀</button>
          <span>This Month</span>
          <button className="border px-2 py-1 rounded-md">▶</button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">Track your study performance and improvements</p>

      {/* Monthly Study Hours */}
      <div className="bg-white  rounded-xl p-4 mb-6 shadow-sm">
        <h3 className="font-semibold text-md mb-2">Monthly Study Hours</h3>
        <div className="flex justify-around items-end h-28 mb-2">
          {["W1", "W2", "W3", "W4"].map((week, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-6 h-2 bg-blue-600 rounded-full mb-1"></div>
              <span className="text-xs text-gray-500">{week}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-700">38.0 hours <span className="text-gray-500">Total this month</span></p>
        <p className="text-blue-800 text-sm">↗ +15% from previous period</p>
      </div>

      {/* Subject Progress */}
      <div className="bg-white  rounded-xl p-4 mb-6 shadow-sm">
        <h3 className="font-semibold text-md mb-4">Subject Progress</h3>
        {[
          { subject: "Physics", percent: 68, color: "bg-gradient-to-r from-purple-500 to-blue-500" },
          { subject: "Mathematics", percent: 75, color: "bg-gradient-to-r from-purple-500 to-purple-400" },
          { subject: "Chemistry", percent: 42, color: "bg-gradient-to-r from-purple-500 to-green-400" },
          { subject: "Biology", percent: 56, color: "bg-gradient-to-r from-purple-500 to-orange-400" },
        ].map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex justify-between mb-1 text-sm">
              <span>{item.subject}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white  rounded-xl p-4 text-center shadow-sm">
          <h4 className="text-sm text-gray-500 mb-1">Accuracy</h4>
          <p className="text-2xl font-bold">82%</p>
          <p className="text-blue-600 text-sm">↗ +3% improvement</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
          <h4 className="text-sm text-gray-500 mb-1">Avg. Time</h4>
          <p className="text-2xl font-bold">50s</p>
          <p className="text-blue-600 text-sm">↘ 8s faster</p>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="bg-white  rounded-xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-md">AI Recommendations</h4>
          <a href="#" className="text-sm text-blue-600 font-medium">View All</a>
        </div>
        <div className="bg-gray-50 border border-purple-200 rounded-lg p-4">
          <h5 className="font-semibold mb-1">📊 Study Pattern Analysis</h5>
          <p className="text-sm text-gray-600 mb-3">
            You perform better when studying in the morning. Consider allocating more study time
            between <span className="font-medium text-blue-600">8–11 AM</span> for Physics and
            Mathematics.
          </p>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-800">
            Apply to Study Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressSessions;
