import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Home", icon: "🏠", to: "/" },
    { label: "Study", icon: "📚", to: "/study" },
    { label: "Progress", icon: "📊", to: "/progress" },
    { label: "AI Tutor", icon: "🤖", to: "/ai" },
    { label: "Settings", icon: "⚙️", to: "/settings" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-gray-800">
      <Outlet />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 text-sm text-gray-600">
        {navItems.map((nav, idx) => (
          <Link
            key={idx}
            to={nav.to}
            className={`flex flex-col items-center ${
              currentPath === nav.to ? "text-blue-800" : "text-gray-500"
            }`}
          >
            <span className="text-xl">{nav.icon}</span>
            <span className="text-xs">{nav.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
