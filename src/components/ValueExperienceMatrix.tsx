import React from 'react';

const ValueExperienceMatrix: React.FC = () => {
  return (
    <div className="mb-8 relative">
      <div className="w-full h-[400px] relative">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          {/* Axes */}
          <line x1="50" y1="350" x2="750" y2="350" stroke="#888" strokeWidth="2" />
          <line x1="50" y1="350" x2="50" y2="50" stroke="#888" strokeWidth="2" />
          
          {/* Axis Labels - Removed as requested */}
          
          {/* Progression Path - Straight line */}
          <path d="M100,300 L700,50" stroke="url(#gradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d0bc9f" />
              <stop offset="20%" stopColor="#9c27b0" />
              <stop offset="40%" stopColor="#ed6c02" />
              <stop offset="60%" stopColor="#2e7d32" />
              <stop offset="80%" stopColor="#00bcd4" />
            </linearGradient>
          </defs>
          
          {/* Stage Points */}
          <circle cx="100" cy="300" r="8" fill="#d0bc9f" />
          <circle cx="250" cy="237.5" r="8" fill="#9c27b0" />
          <circle cx="400" cy="175" r="8" fill="#ed6c02" />
          <circle cx="550" cy="112.5" r="8" fill="#2e7d32" />
          <circle cx="700" cy="50" r="8" fill="#00bcd4" />
          
          {/* Stage Labels - Moved below the line */}
          <text x="100" y="325" textAnchor="middle" className="text-xs font-medium">01</text>
          <text x="250" y="262.5" textAnchor="middle" className="text-xs font-medium">02</text>
          <text x="400" y="200" textAnchor="middle" className="text-xs font-medium">03</text>
          <text x="550" y="137.5" textAnchor="middle" className="text-xs font-medium">04</text>
          <text x="700" y="75" textAnchor="middle" className="text-xs font-medium">05</text>
          
          {/* Stage Names - Removed as requested */}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mt-4">
        <div className="p-2 rounded-md bg-[#f5f5f5] border-l-4 border-[#d0bc9f]">
          <p className="text-xs font-medium">01: Founding Value</p>
          <p className="text-xs text-muted-foreground">Nothing but potential</p>
        </div>
        <div className="p-2 rounded-md bg-[#f5f5f5] border-l-4 border-[#9c27b0]">
          <p className="text-xs font-medium">02: Function</p>
          <p className="text-xs text-muted-foreground">FAQ bot with integrations</p>
        </div>
        <div className="p-2 rounded-md bg-[#f5f5f5] border-l-4 border-[#ed6c02]">
          <p className="text-xs font-medium">03: Trust</p>
          <p className="text-xs text-muted-foreground">Integrated multichannel</p>
        </div>
        <div className="p-2 rounded-md bg-[#f5f5f5] border-l-4 border-[#2e7d32]">
          <p className="text-xs font-medium">04: Behavior</p>
          <p className="text-xs text-muted-foreground">Proactive & contextual</p>
        </div>
        <div className="p-2 rounded-md bg-[#f5f5f5] border-l-4 border-[#00bcd4]">
          <p className="text-xs font-medium">05: Delight</p>
          <p className="text-xs text-muted-foreground">Seamless experience</p>
        </div>
      </div>
    </div>
  );
};

export default ValueExperienceMatrix;
