
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import CulturalCard from "@/components/CulturalCard";
import { culturalItems, Temple, Festival, Ritual, ContentType, Religion, getItemsByState, getItemsByType, getItemsByReligion } from "@/lib/data";

const Explore = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    type: "all" as "all" | ContentType,
    religion: "all" as "all" | Religion,
  });
  const [filteredItems, setFilteredItems] = useState<(Temple | Festival | Ritual)[]>(culturalItems as (Temple | Festival | Ritual)[]);
  
  // Apply filters when selectedState or filter options change
  useEffect(() => {
    let items = [...culturalItems];
    
    // Filter by state if selected
    if (selectedState) {
      items = getItemsByState(selectedState);
    }
    
    // Filter by type
    if (filters.type !== "all") {
      items = items.filter(item => item.type === filters.type);
    }
    
    // Filter by religion
    if (filters.religion !== "all") {
      items = items.filter(item => item.religion === filters.religion);
    }
    
    setFilteredItems(items as (Temple | Festival | Ritual)[]);
  }, [selectedState, filters]);
  
  // Reset expanded item when filtered items change
  useEffect(() => {
    setExpandedItem(null);
  }, [filteredItems]);
  
  const contentTypes: ContentType[] = ["Temple", "Festival", "Ritual"];
  const religions: Religion[] = ["Hinduism", "Buddhism", "Jainism", "Sikhism", "Islam", "Christianity", "Zoroastrianism"];
  
  // Handle a card click
  const handleCardClick = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
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
                <span className="text-gradient">Explore</span> India's Cultural Heritage
              </motion.h1>
              <motion.p 
                className="text-lg text-white/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Navigate through the interactive map or use filters to discover temples, festivals, and rituals across India.
              </motion.p>
            </div>
            
            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Map 
                onStateSelect={(stateId) => setSelectedState(stateId === selectedState ? null : stateId)} 
                selectedState={selectedState}
              />
            </motion.div>
          </div>
        </section>
        
        {/* Cultural Items section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-2">Cultural Elements</h2>
                <p className="text-white/70">
                  {selectedState 
                    ? `Showing ${filteredItems.length} items from the selected region` 
                    : `Showing ${filteredItems.length} items from across India`}
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-3 mt-4 md:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Type Filter */}
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value as "all" | ContentType})}
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                >
                  <option value="all" className="bg-gray-900">All Types</option>
                  {contentTypes.map(type => (
                    <option key={type} value={type} className="bg-gray-900">{type}</option>
                  ))}
                </select>
                
                {/* Religion Filter */}
                <select
                  value={filters.religion}
                  onChange={(e) => setFilters({...filters, religion: e.target.value as "all" | Religion})}
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                >
                  <option value="all" className="bg-gray-900">All Religions</option>
                  {religions.map(religion => (
                    <option key={religion} value={religion} className="bg-gray-900">{religion}</option>
                  ))}
                </select>
                
                {/* Reset button */}
                {(selectedState || filters.type !== "all" || filters.religion !== "all") && (
                  <button
                    onClick={() => {
                      setSelectedState(null);
                      setFilters({ type: "all", religion: "all" });
                    }}
                    className="px-3 py-2 bg-white/10 text-white/90 rounded-md hover:bg-white/20 transition-all duration-200"
                  >
                    Reset Filters
                  </button>
                )}
              </motion.div>
            </div>
            
            {/* Grid of items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={expandedItem === item.id ? "col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2" : ""}
                  >
                    <CulturalCard
                      item={item}
                      index={index}
                      onClick={() => handleCardClick(item.id)}
                      isExpanded={expandedItem === item.id}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-white/60 text-lg">No items found with the current filters</p>
                  <button
                    onClick={() => {
                      setSelectedState(null);
                      setFilters({ type: "all", religion: "all" });
                    }}
                    className="mt-4 px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-all duration-200"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
