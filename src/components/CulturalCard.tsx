
import React from "react";
import { motion } from "framer-motion";
import { Temple, Festival, Ritual } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CulturalCardProps {
  item: Temple | Festival | Ritual;
  index: number;
  onClick: () => void;
  isExpanded: boolean;
}

const CulturalCard: React.FC<CulturalCardProps> = ({ 
  item, 
  index, 
  onClick, 
  isExpanded 
}) => {
  // Type-specific content
  const renderTypeSpecificContent = () => {
    switch (item.type) {
      case "Temple":
        const temple = item as Temple;
        return (
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="text-white/60">Architecture:</span> {temple.architecture}</p>
            <p><span className="text-white/60">Deity:</span> {temple.deity}</p>
            <p><span className="text-white/60">Year Built:</span> {temple.yearBuilt}</p>
          </div>
        );
      case "Festival":
        const festival = item as Festival;
        return (
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="text-white/60">Celebration Period:</span> {festival.celebrationPeriod}</p>
            <p><span className="text-white/60">Date:</span> {festival.date}</p>
            <p><span className="text-white/60">Season:</span> {festival.season}</p>
          </div>
        );
      case "Ritual":
        const ritual = item as Ritual;
        return (
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="text-white/60">Occasion:</span> {ritual.occasion}</p>
            <p><span className="text-white/60">Participants:</span> {ritual.participants}</p>
            {ritual.season && <p><span className="text-white/60">Season:</span> {ritual.season}</p>}
          </div>
        );
      default:
        return null;
    }
  };

  const typeColors = {
    Temple: "from-blue-500/20 to-indigo-500/10",
    Festival: "from-amber-500/20 to-red-500/10",
    Ritual: "from-emerald-500/20 to-teal-500/10",
  };

  const getTypeColor = (type: string) => {
    return typeColors[type as keyof typeof typeColors] || "from-gray-500/20 to-gray-700/10";
  };
  
  const typeIcons = {
    Temple: "🏛️",
    Festival: "🎭",
    Ritual: "✨",
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <motion.div
      className={cn(
        "glass-card overflow-hidden rounded-xl transition-all duration-500",
        isExpanded ? "col-span-2 row-span-2" : "",
        `bg-gradient-to-br ${getTypeColor(item.type)}`
      )}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      layoutId={`card-${item.id}`}
      onClick={onClick}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-start">
          <span className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
            {item.type}
          </span>
          <span className="text-lg opacity-80">{typeIcons[item.type as keyof typeof typeIcons]}</span>
        </div>
        
        <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>
        <p className="mt-2 text-sm text-white/80">{item.significance}</p>
        
        {isExpanded ? (
          <div className="mt-4 flex-1">
            <p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
            {renderTypeSpecificContent()}
            <div className="mt-4">
              <p className="text-xs text-white/60 uppercase tracking-wider">Location</p>
              <p className="text-sm">
                {item.state === "pan-india" 
                  ? "Celebrated across India" 
                  : states.find(s => s.id === item.state)?.name || item.state}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-white/60 uppercase tracking-wider">Religion</p>
              <p className="text-sm">{item.religion}</p>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-white/60">Religion:</span>
                <span className="text-xs">{item.religion}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs text-white/60">Location:</span>
                <span className="text-xs">
                  {item.state === "pan-india" 
                    ? "All India" 
                    : states.find(s => s.id === item.state)?.name || item.state}
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/60 italic">Click to view details</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CulturalCard;
