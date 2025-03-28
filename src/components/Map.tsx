
import React, { useState } from "react";
import { motion } from "framer-motion";
import { states } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MapPin, Info } from "lucide-react";

interface MapProps {
  onStateSelect: (stateId: string) => void;
  selectedState: string | null;
}

const Map: React.FC<MapProps> = ({ onStateSelect, selectedState }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // More accurate positions for Indian states
  const getPosition = (stateName: string) => {
    const positions: Record<string, { x: string; y: string }> = {
      "Tamil Nadu": { x: "58%", y: "85%" },
      "Rajasthan": { x: "40%", y: "35%" },
      "West Bengal": { x: "75%", y: "48%" },
      "Gujarat": { x: "30%", y: "50%" },
      "Maharashtra": { x: "45%", y: "65%" },
      "Kerala": { x: "52%", y: "90%" },
      "Uttar Pradesh": { x: "55%", y: "38%" },
      "Punjab": { x: "43%", y: "25%" },
      "Bihar": { x: "65%", y: "45%" },
      "Odisha": { x: "67%", y: "60%" },
    };
    
    return positions[stateName] || { x: "50%", y: "50%" };
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-indigo-900/20 to-purple-900/30 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden glass-card">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>
      
      {/* Map of India - More accurate outline */}
      <div className="relative w-full h-full">
        <svg 
          viewBox="0 0 600 800" 
          className="absolute inset-0 w-full h-full opacity-30"
          style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))" }}
        >
          {/* Simplified outline of India */}
          <path 
            d="M250,100 C280,110 320,105 350,110 C390,120 410,150 430,180 C450,210 470,250 480,300 C490,350 500,400 490,450 C480,500 460,550 440,580 C420,610 390,630 350,650 C310,670 270,680 230,660 C190,640 170,600 150,560 C130,520 120,480 110,440 C100,400 90,360 100,320 C110,280 130,240 150,210 C170,180 200,150 230,130 C240,120 240,110 250,100 Z" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
          />
          {/* Water bodies */}
          <path 
            d="M480,300 C500,320 520,330 540,320 C560,310 580,290 590,260 C600,230 590,200 580,180 C570,160 550,150 530,160 C510,170 500,190 490,210 C480,230 470,260 480,300 Z" 
            fill="rgba(100,149,237,0.3)" 
            stroke="rgba(255,255,255,0.5)" 
            strokeWidth="1"
          />
        </svg>
        
        {/* State markers */}
        {states.map((state) => {
          const position = getPosition(state.name);
          const isSelected = selectedState === state.id;
          const isHovered = hoveredState === state.id;
          
          return (
            <motion.div
              key={state.id}
              className={cn(
                "absolute z-10 transition-all duration-300 ease-in-out",
                isSelected || isHovered ? "scale-110" : "scale-100"
              )}
              style={{ 
                left: position.x, 
                top: position.y,
                transform: "translate(-50%, -50%)"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: isSelected ? 1.1 : 1,
                zIndex: isSelected || isHovered ? 20 : 10
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredState(state.id)}
              onMouseLeave={() => setHoveredState(null)}
              onClick={() => onStateSelect(state.id)}
            >
              <div 
                className={cn(
                  "cursor-pointer transition-all duration-300 flex items-center justify-center",
                  isSelected ? "w-8 h-8" : "w-6 h-6",
                  isSelected 
                    ? "bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                    : "bg-white/10 hover:bg-white/20"
                )}
                style={{
                  borderRadius: "50%",
                }}
              >
                <MapPin 
                  className={cn(
                    "transition-all duration-300",
                    isSelected ? "text-white" : "text-white/70"
                  )} 
                  size={isSelected ? 18 : 14} 
                />
              </div>
              
              <div className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-sm px-3 py-1 rounded-full transition-opacity duration-300",
                (isHovered || isSelected) ? "opacity-100" : "opacity-0",
                isSelected ? "bg-white text-black font-medium" : "bg-white/10 backdrop-blur-md text-white"
              )}>
                {state.name}
                {isSelected && (
                  <span className="ml-1 text-xs">
                    ({state.culturalSites})
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Information overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-sm text-white/80">
            {selectedState 
              ? states.find(s => s.id === selectedState)?.description
              : "Select a state to explore its cultural heritage"}
          </p>
        </div>
      </div>
      
      {/* Map legend */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
        <div className="flex items-center text-xs text-white/80 mb-2">
          <Info size={12} className="mr-1 text-white/60" />
          <span>Interactive Map of India</span>
        </div>
        <div className="flex items-center text-xs text-white/80">
          <div className="w-3 h-3 rounded-full bg-white/20 flex items-center justify-center mr-2">
            <MapPin size={8} className="text-white/70" />
          </div>
          <span>Click on a state to explore</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
