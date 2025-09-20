import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="space-y-6">
      {/* Phone Numbers */}
      <div className="p-4 bg-white shadow-md rounded-lg border">
        <div className="flex items-center space-x-2 mb-2">
          <Phone className="text-green-600 w-5 h-5" />
          <h3 className="font-semibold text-lg">Phone Numbers</h3>
        </div>
        <p><span className="font-bold">Emergency Rescue:</span> (+91) 1800-911-COWS</p>
        <p><span className="font-bold">General Info:</span> (+91) 98765-43210</p>
        <p><span className="font-bold">Donations:</span> (+91) 1800-123-GIVE</p>
      </div>

      {/* Email Addresses */}
      <div className="p-4 bg-white shadow-md rounded-lg border">
        <div className="flex items-center space-x-2 mb-2">
          <Mail className="text-green-600 w-5 h-5" />
          <h3 className="font-semibold text-lg">Email Addresses</h3>
        </div>
        <p><span className="font-bold">Rescue:</span> rescue@cowrescue.in</p>
        <p><span className="font-bold">General:</span> info@cowrescue.in</p>
        <p><span className="font-bold">Donations:</span> donate@cowrescue.in</p>
      </div>

      {/* Visit Us */}
      <div className="p-4 bg-white shadow-md rounded-lg border">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="text-green-600 w-5 h-5" />
          <h3 className="font-semibold text-lg">Visit Us</h3>
        </div>
        <p>123 Gaushala Road</p>
        <p>Jaipur, Rajasthan, India - 302001</p>
        <p className="text-sm text-gray-600">
          <em>Note:</em> Visits by appointment only to ensure animal safety
        </p>
      </div>

      {/* Hours of Operation */}
      <div className="p-4 bg-white shadow-md rounded-lg border">
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="text-green-600 w-5 h-5" />
          <h3 className="font-semibold text-lg">Hours of Operation</h3>
        </div>
        <p><span className="font-bold">Emergency Hotline:</span> 24/7</p>
        <p><span className="font-bold">Office Hours:</span> Mon-Fri, 9AM-6PM</p>
        <p><span className="font-bold">Weekend:</span> Sat-Sun, 10AM-4PM</p>
      </div>
    </div>
  );
};

export default GetInTouch;
