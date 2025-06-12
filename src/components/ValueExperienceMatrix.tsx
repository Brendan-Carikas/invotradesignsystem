import React from 'react';

const ValueExperienceMatrix: React.FC = () => {
  return (
    <div className="mb-8 relative">
      <div className="w-full h-[400px] relative">
        <img 
          src="/assets/knowledgebase/Integral Perspective Visual graphics.png" 
          alt="Integral Perspective Visual" 
          className="w-full h-full object-contain"
        />
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
