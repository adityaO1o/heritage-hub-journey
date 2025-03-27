
import React, { useState } from "react";
import { motion } from "framer-motion";
import { states } from "@/lib/data";
import { cn } from "@/lib/utils";

interface MapProps {
  onStateSelect: (stateId: string) => void;
  selectedState: string | null;
}

const Map: React.FC<MapProps> = ({ onStateSelect, selectedState }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const getPosition = (stateName: string) => {
    // These positions are approximate and would need refinement
    // with actual SVG map coordinates
    const positions: Record<string, { x: string; y: string }> = {
      "Tamil Nadu": { x: "75%", y: "80%" },
      "Rajasthan": { x: "30%", y: "35%" },
      "West Bengal": { x: "80%", y: "50%" },
      "Gujarat": { x: "20%", y: "50%" },
      "Maharashtra": { x: "40%", y: "60%" },
      "Kerala": { x: "55%", y: "85%" },
      "Uttar Pradesh": { x: "50%", y: "40%" },
      "Punjab": { x: "35%", y: "25%" },
    };
    
    return positions[stateName] || { x: "50%", y: "50%" };
  };

  return (
    <div className="relative w-full h-[600px] bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden glass-card">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>
      
      {/* Map placeholder (in a production app, this would be an actual SVG map of India) */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[80%] border-2 border-white/5 rounded-[40%] relative rotate-12"></div>
        </div>
        
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
              <div className={cn(
                "cursor-pointer transition-all duration-300",
                isSelected ? "w-5 h-5" : "w-4 h-4",
                isSelected 
                  ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                  : "bg-white/60 hover:bg-white/80"
              )}
              style={{
                borderRadius: "50%",
              }}
              ></div>
              
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
    </div>
  );
};

export default Map;
