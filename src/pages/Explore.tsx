
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import CulturalCard from "@/components/CulturalCard";
import { culturalItems, Temple, Festival, Ritual, ContentType, Religion, getItemsByState, getItemsByType, getItemsByReligion } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinIcon, CalendarIcon, LandmarkIcon, BookIcon } from "lucide-react";

const Explore = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    type: "all" as "all" | ContentType,
    religion: "all" as "all" | Religion,
  });
  const [filteredItems, setFilteredItems] = useState<(Temple | Festival | Ritual)[]>(culturalItems as (Temple | Festival | Ritual)[]);
  const [activeTab, setActiveTab] = useState<string>("all");
  
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

  // Get stats for cultural elements
  const getStats = () => {
    const templeCount = culturalItems.filter(item => item.type === "Temple").length;
    const festivalCount = culturalItems.filter(item => item.type === "Festival").length;
    const ritualCount = culturalItems.filter(item => item.type === "Ritual").length;
    const regionCount = new Set(culturalItems.map(item => item.state)).size;
    
    return { templeCount, festivalCount, ritualCount, regionCount };
  };
  
  const stats = getStats();
  
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
            
            {/* Stats cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <LandmarkIcon className="mr-2 h-5 w-5 text-purple-400" />
                    Temples
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{stats.templeCount}</p>
                  <p className="text-sm text-white/60">Sacred structures</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5 text-orange-400" />
                    Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{stats.festivalCount}</p>
                  <p className="text-sm text-white/60">Cultural celebrations</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <BookIcon className="mr-2 h-5 w-5 text-blue-400" />
                    Rituals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{stats.ritualCount}</p>
                  <p className="text-sm text-white/60">Traditional practices</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <MapPinIcon className="mr-2 h-5 w-5 text-green-400" />
                    Regions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{stats.regionCount}</p>
                  <p className="text-sm text-white/60">Diverse locations</p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
            
            {/* Tabs for different views */}
            <Tabs 
              defaultValue="all" 
              className="mb-8"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="all">All Elements</TabsTrigger>
                <TabsTrigger value="temples">Temples</TabsTrigger>
                <TabsTrigger value="festivals">Festivals</TabsTrigger>
                <TabsTrigger value="rituals">Rituals</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">About India's Cultural Heritage</h3>
                  <p className="text-white/70 text-sm mb-4">
                    India's cultural heritage spans thousands of years, encompassing a rich tapestry of traditions, 
                    art forms, rituals, and celebrations. The diversity across different states and regions reflects
                    the country's historical depth and philosophical richness.
                  </p>
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
              </TabsContent>
              
              <TabsContent value="temples" className="mt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Temple Architecture in India</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Indian temple architecture varies by region, with distinctive styles like Nagara (North), 
                    Dravidian (South), and Vesara (mixed). Temples are not just places of worship but also 
                    centers of art, education, and community gatherings, reflecting the spiritual and cultural 
                    heritage of India.
                  </p>
                </div>
                
                {/* Grid of temple items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.filter(item => item.type === "Temple").length > 0 ? (
                    filteredItems.filter(item => item.type === "Temple").map((item, index) => (
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
                      <p className="text-white/60 text-lg">No temples found with the current filters</p>
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
              </TabsContent>
              
              <TabsContent value="festivals" className="mt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Festivals of India</h3>
                  <p className="text-white/70 text-sm mb-4">
                    India's festivals showcase its cultural diversity, with celebrations tied to seasons, 
                    harvests, mythology, and historical events. These festivals feature unique rituals, 
                    traditional music, dance, specific cuisines, and are often opportunities for 
                    community bonding and cultural expression.
                  </p>
                </div>
                
                {/* Grid of festival items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.filter(item => item.type === "Festival").length > 0 ? (
                    filteredItems.filter(item => item.type === "Festival").map((item, index) => (
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
                      <p className="text-white/60 text-lg">No festivals found with the current filters</p>
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
              </TabsContent>
              
              <TabsContent value="rituals" className="mt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Traditional Rituals</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Rituals in India form the backbone of cultural practices, connecting people to their 
                    roots through generations. These rituals range from daily practices to elaborate 
                    ceremonies marking important life events, and often incorporate elements of art, 
                    music, dance, and specific symbolic actions.
                  </p>
                </div>
                
                {/* Grid of ritual items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.filter(item => item.type === "Ritual").length > 0 ? (
                    filteredItems.filter(item => item.type === "Ritual").map((item, index) => (
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
                      <p className="text-white/60 text-lg">No rituals found with the current filters</p>
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
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
