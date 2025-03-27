
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ContentType, Religion } from "@/lib/data";

const ContributeForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    type: "Festival" as ContentType,
    description: "",
    state: "",
    religion: "Hinduism" as Religion,
    significance: "",
    name: "",
    email: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Contribution received",
        description: "Thank you for contributing to Indian Cultural Discovery. Your submission will be reviewed.",
      });
      
      // Reset form
      setFormData({
        title: "",
        type: "Festival" as ContentType,
        description: "",
        state: "",
        religion: "Hinduism" as Religion,
        significance: "",
        name: "",
        email: "",
      });
    }, 1500);
  };
  
  const contentTypes: ContentType[] = ["Festival", "Temple", "Ritual"];
  const religions: Religion[] = ["Hinduism", "Buddhism", "Jainism", "Sikhism", "Islam", "Christianity", "Zoroastrianism"];
  
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-medium text-gradient">Contribute</h2>
        <p className="mt-2 text-sm text-white/70">
          Share your knowledge about India's cultural heritage
        </p>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-white/80 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                placeholder="e.g., Pongal Festival, Khajuraho Temples"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="type" className="block text-sm font-medium text-white/80 mb-1">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                >
                  {contentTypes.map(type => (
                    <option key={type} value={type} className="bg-gray-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <label htmlFor="religion" className="block text-sm font-medium text-white/80 mb-1">
                  Religion
                </label>
                <select
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                >
                  {religions.map(religion => (
                    <option key={religion} value={religion} className="bg-gray-900">
                      {religion}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-white/80 mb-1">
                State/Location
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                placeholder="e.g., Tamil Nadu, Kerala, Pan-India"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                placeholder="Briefly describe this cultural element"
              />
            </div>
            
            <div>
              <label htmlFor="significance" className="block text-sm font-medium text-white/80 mb-1">
                Cultural Significance
              </label>
              <textarea
                id="significance"
                name="significance"
                value={formData.significance}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                placeholder="Explain why this is culturally important"
              />
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-sm font-medium text-white/80">Your Information</h3>
              
              <div className="mt-3 flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                  />
                </div>
                
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-white text-black font-medium rounded-md hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-70"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : "Submit Contribution"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContributeForm;
