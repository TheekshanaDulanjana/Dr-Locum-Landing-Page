import React, { useState, useEffect } from "react";
import DrLocumLogo from "../assets/DrLocum.png"; 

const messages = [
  { text: "Locum life: flexibility meets purpose.", time: "3 min ago" },
  { text: "Adapt, serve, and grow—one placement at a time.", time: "5 min ago" },
  { text: "New place, new patients, same dedication.", time: "8 min ago" },
];

const NotificationComponent = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-40 left-20 w-96 bg-white/30 backdrop-blur-xs shadow-lg rounded-2xl border border-gray-200 p-3 font-[Alata]">
      {/* Top Row: Logo, Alert, Time */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center space-x-2">
          <img src={DrLocumLogo} alt="DrLocum" className="h-4 w-auto" />
          <span className="text-black uppercase text-sm">Alert</span>
        </div>
        <span className="text-xs text-[#555555]">
          {messages[currentMessageIndex].time}
        </span>
      </div>

      {/* Message Content */}
      <p className="text-[#555555] text-sm text-start">
        {messages[currentMessageIndex].text}
      </p>
    </div>
  );
};

export default NotificationComponent;
