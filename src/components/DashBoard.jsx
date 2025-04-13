import React, { useState } from "react";
import PricingComparison from "./PricingComparison";

const DashBoard = () => {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="bg-blue-50 px-4 pt-6 font-sans text-gray-800 pb-32">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">LandSlide</h1>
          <p className="text-sm text-gray-500">Your AI Study Companion</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white text-blue-800 flex items-center justify-center font-semibold">
          LS
        </div>
      </header>

      {/* Exam Card */}
      <div className="bg-purple-50 p-4 rounded-xl shadow mb-8">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-md font-semibold">Physics Exam</p>
            <p className="text-sm text-gray-500">In 3 days</p>
          </div>
          <button className="bg-white border border-gray-300 text-sm px-3 py-1 rounded-md hover:bg-gray-100">
            ⏱ Study Now
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-1">Progress</p>
        <div className="w-full bg-purple-200 h-2 rounded-full">
          <div
            className="bg-blue-700 h-2 rounded-full"
            style={{ width: "68%" }}
          ></div>
        </div>
        <p className="text-sm text-right text-gray-600 mt-1">68%</p>
      </div>

      {/* Study Stats */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-lg">Study Stats</h2>
          <a href="#" className="text-sm text-blue-800 font-medium">View All</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "This Week", value: "12.5h", icon: "🕒" },
            { label: "Accuracy", value: "85%", icon: "🎯" },
            { label: "Improvement", value: "+15%", icon: "📈" },
            { label: "Questions", value: "320", icon: "❓" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
              <div className="text-xl">{stat.icon}</div>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Study Modes */}
      <div>
        <h2 className="font-semibold text-lg mb-3">Study Modes</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Flashcards", desc: "Enhance recall with AI cards", icon: "📖" },
            { title: "Practice Tests", desc: "Simulate exam conditions", icon: "🧪" },
            { title: "Spaced Repetition", desc: "Long-term retention", icon: "⚡" },
            { title: "Voice Learning", desc: "Study on the go", icon: "🎤" },
          ].map((mode, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-xl mb-1">{mode.icon}</div>
              <p className="font-semibold">{mode.title}</p>
              <p className="text-xs text-gray-500">{mode.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Pricing */}
      {showPricing && (
        <div className="mt-6">
          <PricingComparison />
        </div>
      )}
    </div>
  );
};

export default DashBoard;
