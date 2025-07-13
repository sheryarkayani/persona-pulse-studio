import Navigation from "./Navigation";
import Hero from "./Hero";
import Features from "./Features";
import TargetAudience from "./TargetAudience";
import SoundLikeYou from "./SoundLikeYou";
// import CTA from "./CTA"; // Removed CTA import

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <TargetAudience />
      <SoundLikeYou />
      {/* <CTA /> */} 
      
      {/* Footer */}
      <footer className="bg-white/90 border-t border-blue-100 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/lovable-uploads/5e2c30b7-efa0-48d1-8a0a-a1687293f1c5.png" 
                  alt="Repic AI" 
                  className="h-8 w-auto"
                />
                <span className="font-extrabold text-2xl text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Repic AI</span>
              </div>
              <p className="text-gray-500 mb-4 max-w-md text-lg">
                Your AI employee for building, growing, and managing your personal brand. 
                Focus on what you do best while AI handles the rest.
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 mb-4 text-lg" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Features</a></li>
                <li><a href="#" className="text-gray-500 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Pricing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Integrations</a></li>
                <li><a href="#" className="text-gray-500 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 mb-4 text-lg" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Help Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Contact Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Community</a></li>
                <li><a href="#" className="text-gray-500 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors font-semibold">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base font-medium">
              © 2024 Repic AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors text-base font-semibold">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-transparent bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text transition-colors text-base font-semibold">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;