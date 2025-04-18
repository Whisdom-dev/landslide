import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="mx-auto bg-blue-50 p-6 text-gray-800">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">Settings</h1>
      <p className="text-sm text-gray-500 mb-6">Manage your account and preferences</p>

      {/* Account Info */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 text-blue-700 font-semibold rounded-full w-10 h-10 flex items-center justify-center">
            WD
          </div>
          <div>
            <p className="font-medium">Whisdom Daniel</p>
            <p className="text-sm text-gray-500">whizddaniel@example.com</p>
          </div>
        </div>
        <button className="text-sm text-blue-600 font-medium">Edit</button>
      </div>

      {/* Account Section */}
      <div className="space-y-6 mb-6">
        <Section title="Account">
          <SettingItem label="Profile Information" />
          <SettingItem label="Privacy & Security" />
          <SettingItem label="Subscription" badge="Free Plan" />
          <SettingItem label="Payment & Billing" />
        </Section>

        {/* Preferences Section */}
        <Section title="Preferences">
          <ToggleItem
            label="Notifications"
            enabled={notifications}
            onToggle={() => setNotifications(!notifications)}
          />
          <ToggleItem
            label="Dark Mode"
            enabled={darkMode}
            onToggle={() => setDarkMode(!darkMode)}
          />
          <SettingItem label="Language" value="English" />
        </Section>

        {/* Support Section */}
        <Section title="Support">
          <SettingItem label="Help & Support" />
          <SettingItem label="Log Out" />
        </Section>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400 mt-10">
        LandSlide v1.0.0<br />© 2025 LandSlide Inc.
      </p>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-sm font-semibold text-gray-500 mb-2">{title}</h2>
    <div className="bg-gray-50 rounded-lg">{children}</div>
  </div>
);

const SettingItem = ({ label, value, badge }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-200 cursor-pointer">
    <span>{label}</span>
    {badge ? (
      <span className="text-xs bg-purple-100 text-blue-600 px-2 py-1 rounded-full">{badge}</span>
    ) : (
      <span className="text-sm text-gray-500">{value}</span>
    )}
  </div>
);

const ToggleItem = ({ label, enabled, onToggle }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-200 cursor-pointer">
    <span>{label}</span>
    <label className="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        onChange={onToggle}
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition duration-300" />
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300" />
    </label>
  </div>
);

export default Settings;
