
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar, PenLine } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-gradient-soft">Indian Cultural</span>
            <br />
            <span className="text-white font-light">Discovery Map</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Explore India's rich tapestry of temples, festivals, and cultural rituals through an interactive journey.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link 
              to="/explore" 
              className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-all duration-300"
            >
              Start Exploring
            </Link>
            <a 
              href="#features" 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-gradient">Discover</span> India's Cultural Heritage
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our interactive platform offers a comprehensive view of India's diverse cultural landscape.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Map",
                description: "Navigate through different states to discover cultural highlights across India.",
                icon: MapPin,
                link: "/explore",
                delay: 0
              },
              {
                title: "Festival Calendar",
                description: "Explore festivals and celebrations throughout the year in various regions.",
                icon: Calendar,
                link: "/calendar",
                delay: 0.1
              },
              {
                title: "Community Contributions",
                description: "Share your knowledge about local festivals, temples, and cultural practices.",
                icon: PenLine,
                link: "/contribute",
                delay: 0.2
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-white/70 mb-4">{feature.description}</p>
                <Link 
                  to={feature.link} 
                  className="text-sm text-white/90 hover:text-white inline-flex items-center"
                >
                  Explore <span className="ml-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Why</span> This Project?
              </h2>
              <p className="text-white/70 mb-6">
                India is home to an incredible variety of temples, festivals, and cultural rituals that define its diverse heritage. However, there are limited digital tools that provide an interactive and educational way to explore these traditions.
              </p>
              <p className="text-white/70 mb-6">
                The Indian Cultural Discovery Map is designed to bridge this gap, offering a rich, user-friendly experience to discover India's cultural roots.
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Explore by geography, theme, or timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Learn about the significance and stories behind cultural elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Discover connections between different traditions across regions</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Featured Highlights</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Diwali",
                      description: "Festival of lights celebrating the victory of light over darkness",
                      type: "Festival",
                      location: "All India",
                    },
                    {
                      title: "Golden Temple",
                      description: "Holiest gurdwara and important pilgrimage site for Sikhs",
                      type: "Temple",
                      location: "Punjab",
                    },
                    {
                      title: "Kathakali",
                      description: "Classical dance form with elaborate makeup and costumes",
                      type: "Ritual",
                      location: "Kerala",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{item.title}</h4>
                        <span className="text-xs px-2 py-1 bg-white/10 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-white/70">{item.description}</p>
                      <p className="mt-1 text-xs text-white/50">{item.location}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link 
                    to="/explore" 
                    className="text-sm text-white hover:text-white/80 inline-flex items-center"
                  >
                    View all cultural elements <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="glass-card p-10 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Start</span> Your Cultural Journey
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Begin exploring India's rich cultural heritage through our interactive platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/explore" 
                className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-all duration-300"
              >
                Explore the Map
              </Link>
              <Link 
                to="/contribute" 
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-all duration-300"
              >
                Contribute
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
