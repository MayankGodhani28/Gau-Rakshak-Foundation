import React from "react";
import { AlertTriangle } from "lucide-react";

const EmergencyHotline = () => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md text-center max-w-6xl mx-auto mb-8 mt-20">
      {/* mt-20 ensures navbar won’t overlap if navbar is fixed */}
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="text-red-600 w-6 h-6" />
        <h2 className="text-lg font-bold text-red-700">
          Emergency Rescue Hotline
        </h2>
      </div>
      <p className="mt-2 text-gray-700">
        For immediate cow rescue emergencies, call:{" "}
        <span className="font-bold">(+91) 1800-911-COWS</span>
      </p>
    </div>
  );
};

export default EmergencyHotline;
