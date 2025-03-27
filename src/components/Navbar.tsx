
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, MapPin, Calendar, PenLine, Home } from "lucide-react";

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "Explore", path: "/explore", icon: MapPin },
  { name: "Calendar", path: "/calendar", icon: Calendar },
  { name: "Contribute", path: "/contribute", icon: PenLine },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-lg sm:text-xl">
              <span className="text-gradient">Indian Cultural</span> <span className="font-light">Discovery</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {routes.map((route) => {
                const Icon = route.icon;
                const isActive = location.pathname === route.path;
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm transition-all duration-300",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <Icon size={16} />
                    <span>{route.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 invisible"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-black/90">
          {routes.map((route) => {
            const Icon = route.icon;
            const isActive = location.pathname === route.path;
            return (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300",
                  isActive
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon size={18} />
                <span>{route.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
