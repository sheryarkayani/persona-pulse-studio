import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/5e2c30b7-efa0-48d1-8a0a-a1687293f1c5.png" 
              alt="Repic AI" 
              className="h-8 w-auto"
            />
            <span className="font-extrabold text-2xl text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Repic AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 font-semibold hover:text-[#2563eb] transition text-lg"
                style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="hover:scale-105 transition-spring font-semibold text-gray-700 text-lg" style={{ fontFamily: 'Inter, Poppins, sans-serif' }} onClick={() => navigate("/dashboard")}> 
              Sign In
            </Button>
            <a href="#" className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white font-semibold rounded-full px-7 py-3 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform text-lg" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              Start Free Trial
              <span className="bg-white rounded-full p-1 ml-1 flex items-center justify-center">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-blue-100 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-700 font-semibold hover:text-[#2563eb] transition text-lg"
                style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start font-semibold text-gray-700 text-lg" style={{ fontFamily: 'Inter, Poppins, sans-serif' }} onClick={() => { setIsMenuOpen(false); navigate("/dashboard"); }}>
                Sign In
              </Button>
              <a href="#" className="w-full flex items-center justify-center bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white font-semibold rounded-full px-7 py-3 shadow-lg hover:scale-105 transition-transform text-lg" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Start Free Trial
                <span className="bg-white rounded-full p-1 ml-1 flex items-center justify-center">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;