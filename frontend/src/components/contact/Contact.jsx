import React from "react";
import EmergencyHotline from "./EmergencyHotline";
import CowRescueForm from "./CowRescueForm";
import GetInTouch from "./GetInTouch";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 p-6 mt-1">
      {/* Top Emergency Hotline */}
      <EmergencyHotline />

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left: Rescue Request Form */}
        <CowRescueForm />

        {/* Right: Get In Touch */}
        <GetInTouch />
      </div>
    </div>
  );
};

export default App;
