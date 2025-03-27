
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg">
              <span className="text-gradient">Indian Cultural</span> <span className="font-light">Discovery</span>
            </h3>
            <p className="mt-3 text-sm text-white/60">
              Explore the rich cultural heritage of India through an interactive journey of temples, festivals, and rituals.
            </p>
          </div>
          
          <div>
            <h4 className="text-white/80 font-medium">Navigation</h4>
            <ul className="mt-3 space-y-2">
              <li><Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/explore" className="text-sm text-white/60 hover:text-white transition-colors">Explore</Link></li>
              <li><Link to="/calendar" className="text-sm text-white/60 hover:text-white transition-colors">Festival Calendar</Link></li>
              <li><Link to="/contribute" className="text-sm text-white/60 hover:text-white transition-colors">Contribute</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/80 font-medium">About</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About the Project</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Indian Cultural Discovery Map. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
