
import React, { useState } from "react";
import { motion } from "framer-motion";
import { festivals } from "@/lib/data";
import { cn } from "@/lib/utils";

const FestivalCalendar: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState<number>(new Date().getMonth() + 1);
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Get festivals for the active month
  const monthFestivals = festivals.filter(festival => festival.month === activeMonth);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full glass-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-medium text-gradient">Festival Calendar</h2>
        <p className="mt-2 text-sm text-white/70">Explore festivals celebrated throughout the year</p>
        
        {/* Month selector */}
        <div className="mt-6 flex flex-wrap gap-2">
          {months.map((month, index) => (
            <button
              key={month}
              onClick={() => setActiveMonth(index + 1)}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-all duration-300",
                activeMonth === index + 1
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {month}
            </button>
          ))}
        </div>
        
        {/* Festival list */}
        <motion.div 
          className="mt-8 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeMonth} // Re-render animation when month changes
        >
          {monthFestivals.length > 0 ? (
            monthFestivals.map((festival) => (
              <motion.div 
                key={festival.id}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                variants={itemVariants}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">{festival.title}</h3>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded-full">
                    {festival.religion}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/80">{festival.description}</p>
                <div className="mt-3 text-xs text-white/60">
                  <p><span className="font-medium">Date:</span> {festival.date}</p>
                  <p><span className="font-medium">Location:</span> {festival.state === "pan-india" ? "All across India" : festival.state}</p>
                </div>
                
                {/* Rituals */}
                <div className="mt-3">
                  <p className="text-xs font-medium text-white/70">Key Rituals:</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {festival.rituals.slice(0, 3).map((ritual, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-white/5 rounded-full"
                      >
                        {ritual}
                      </span>
                    ))}
                    {festival.rituals.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/5 rounded-full">
                        +{festival.rituals.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="text-center py-12"
              variants={itemVariants}
            >
              <p className="text-white/60">No festivals in {months[activeMonth - 1]}</p>
              <p className="mt-2 text-sm text-white/40">Try selecting a different month</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FestivalCalendar;
