
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContributeForm from "@/components/ContributeForm";

const Contribute = () => {
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
                <span className="text-gradient">Contribute</span> Your Knowledge
              </motion.h1>
              <motion.p 
                className="text-lg text-white/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Share your insights about local cultural elements to help build a comprehensive cultural map of India.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Contribution form and guidelines */}
        <section className="py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ContributeForm />
                </motion.div>
              </div>
              
              <div>
                <motion.div
                  className="glass-card rounded-xl overflow-hidden sticky top-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="p-6">
                    <h2 className="text-xl font-medium mb-4">Contribution Guidelines</h2>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h3 className="font-medium text-white/90">What to Contribute</h3>
                        <ul className="mt-2 space-y-1 text-white/70">
                          <li>• Information about local temples</li>
                          <li>• Details of regional festivals</li>
                          <li>• Documentation of cultural rituals</li>
                          <li>• Historical and mythological context</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-white/90">Quality Standards</h3>
                        <ul className="mt-2 space-y-1 text-white/70">
                          <li>• Provide accurate, verified information</li>
                          <li>• Include historical or cultural significance</li>
                          <li>• Mention geographic relevance</li>
                          <li>• Note any regional variations</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-white/90">Review Process</h3>
                        <p className="mt-2 text-white/70">
                          All contributions are reviewed by our team for accuracy and relevance before being published on the platform. You may be contacted for clarification if needed.
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-white/50 text-xs">
                          By contributing, you agree to share your knowledge under our open content policy, allowing others to build upon and share your contributions while always attributing the source.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why contribute section */}
        <section className="py-12 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-2xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Your Contributions Matter
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Preserving Heritage",
                  description: "Help document and preserve cultural knowledge that might otherwise be lost to time.",
                  delay: 0
                },
                {
                  title: "Enhancing Understanding",
                  description: "Provide context and insights that promote better understanding of India's cultural diversity.",
                  delay: 0.1
                },
                {
                  title: "Building Community",
                  description: "Join a community of knowledge contributors passionate about sharing cultural heritage.",
                  delay: 0.2
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-2xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              From Our Contributors
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Contributing to this platform allowed me to share my knowledge about local temples in Kerala that aren't widely known. It's fulfilling to see others learning about our rich heritage.",
                  author: "Ananya K., Cultural Historian",
                  delay: 0
                },
                {
                  quote: "As someone passionate about preserving our traditions, I found this platform to be an excellent way to document regional variations of festivals that might otherwise be forgotten.",
                  author: "Rajiv M., Folklore Enthusiast",
                  delay: 0.1
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/90 italic mb-4">"{item.quote}"</p>
                  <p className="text-white/70 text-sm">— {item.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contribute;
