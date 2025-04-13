import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
import StudySessions from "./components/StudySessions";
import ProgressSessions from "./components/ProgressSessions";
import AiTutor from "./components/AiTutor";
import Settings from "./components/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="study" element={<StudySessions />} />
        <Route path="progress" element={<ProgressSessions />} />
        <Route path="ai" element={<AiTutor />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Dashboard />} />

      </Route>
    </Routes>
  );
}

export default App;
