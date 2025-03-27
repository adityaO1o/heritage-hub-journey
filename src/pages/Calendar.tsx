
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FestivalCalendar from "@/components/FestivalCalendar";
import { festivals } from "@/lib/data";

const Calendar = () => {
  // Group festivals by season
  const festivalsBySeasons = {
    Spring: festivals.filter(f => f.season === "Spring"),
    Summer: festivals.filter(f => f.season === "Summer"),
    Monsoon: festivals.filter(f => f.season === "Monsoon"),
    Autumn: festivals.filter(f => f.season === "Autumn"),
    Winter: festivals.filter(f => f.season === "Winter"),
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-gradient">Festival</span> Calendar
              </motion.h1>
              <motion.p 
                className="text-lg text-white/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover the vibrant festivals celebrated across India throughout the year.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Calendar widget section */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FestivalCalendar />
            </motion.div>
          </div>
        </section>
        
        {/* Festivals by Season section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Festivals by Season
            </motion.h2>
            
            <div className="space-y-10">
              {Object.entries(festivalsBySeasons).map(([season, seasonFestivals], seasonIndex) => (
                seasonFestivals.length > 0 && (
                  <div key={season}>
                    <motion.h3 
                      className="text-xl font-medium mb-6 border-b border-white/10 pb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: seasonIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {season}
                    </motion.h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {seasonFestivals.map((festival, festivalIndex) => (
                        <motion.div 
                          key={festival.id}
                          className="glass-card rounded-xl overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: seasonIndex * 0.05 + festivalIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="p-6">
                            <div className="flex justify-between items-start">
                              <h4 className="text-lg font-medium">{festival.title}</h4>
                              <span className="text-xs px-2 py-1 bg-white/10 rounded-full">
                                {festival.religion}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-white/70">{festival.description}</p>
                            <div className="mt-4 text-xs text-white/60">
                              <p><span className="font-medium">Date:</span> {festival.date}</p>
                              <p className="mt-1"><span className="font-medium">Duration:</span> {festival.celebrationPeriod}</p>
                              <p className="mt-1">
                                <span className="font-medium">Location:</span> {
                                  festival.state === "pan-india" 
                                    ? "All across India" 
                                    : festival.state.charAt(0).toUpperCase() + festival.state.slice(1)
                                }
                              </p>
                            </div>
                            
                            {/* Key ritual tags */}
                            <div className="mt-4">
                              <p className="text-xs font-medium text-white/70">Key Rituals:</p>
                              <div className="mt-1 flex flex-wrap gap-2">
                                {festival.rituals.slice(0, 2).map((ritual, index) => (
                                  <span 
                                    key={index} 
                                    className="text-xs px-2 py-1 bg-white/5 rounded-full"
                                  >
                                    {ritual}
                                  </span>
                                ))}
                                {festival.rituals.length > 2 && (
                                  <span className="text-xs px-2 py-1 bg-white/5 rounded-full">
                                    +{festival.rituals.length - 2} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
        
        {/* Festival diversity section */}
        <section className="py-12 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-gradient">Diversity</span> of Indian Festivals
                </h2>
                <p className="text-white/70 mb-6">
                  India's festivals showcase the country's cultural diversity, with celebrations tied to harvests, religious traditions, changing seasons, and historical events.
                </p>
                <p className="text-white/70 mb-6">
                  Many festivals transcend religious boundaries and are celebrated by people of different faiths, reflecting India's syncretic cultural fabric.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mr-4">
                      <span className="text-white/90 text-xl">🌾</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Harvest Festivals</h3>
                      <p className="text-sm text-white/70">Celebrating agricultural prosperity with seasonal events like Pongal, Baisakhi, and Onam</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mr-4">
                      <span className="text-white/90 text-xl">✨</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Religious Celebrations</h3>
                      <p className="text-sm text-white/70">Rituals and ceremonies honoring deities and significant religious events</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mr-4">
                      <span className="text-white/90 text-xl">🎭</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Cultural Festivities</h3>
                      <p className="text-sm text-white/70">Celebrations showcasing regional arts, dance, music, and traditions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4">Festival Statistics</h3>
                  
                  {/* Religion distribution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white/80 mb-2">Distribution by Religion</h4>
                    <div className="space-y-2">
                      {[
                        { religion: "Hinduism", count: festivals.filter(f => f.religion === "Hinduism").length, color: "bg-amber-500" },
                        { religion: "Buddhism", count: festivals.filter(f => f.religion === "Buddhism").length, color: "bg-yellow-500" },
                        { religion: "Jainism", count: festivals.filter(f => f.religion === "Jainism").length, color: "bg-green-500" },
                        { religion: "Sikhism", count: festivals.filter(f => f.religion === "Sikhism").length, color: "bg-orange-500" },
                        { religion: "Islam", count: festivals.filter(f => f.religion === "Islam").length, color: "bg-blue-500" },
                      ].filter(item => item.count > 0).map(item => (
                        <div key={item.religion} className="flex items-center">
                          <span className="text-xs w-24">{item.religion}</span>
                          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${item.color}`} 
                              style={{ width: `${(item.count / festivals.length) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-white/70 ml-2">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Seasonal distribution */}
                  <div>
                    <h4 className="text-sm font-medium text-white/80 mb-2">Distribution by Season</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {["Spring", "Summer", "Monsoon", "Autumn", "Winter"].map(season => {
                        const count = festivals.filter(f => f.season === season).length;
                        return (
                          <div key={season} className="text-center">
                            <div className="aspect-square flex items-center justify-center bg-white/10 rounded-lg mb-2">
                              <span className="text-lg">{count}</span>
                            </div>
                            <span className="text-xs text-white/70">{season}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-white/50">
                      Calendar data includes major festivals celebrated across different regions of India. Regional variations may exist in dates and celebration styles.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calendar;
