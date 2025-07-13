import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 py-24 gap-16 w-full">
        {/* Left: Content */}
        <div className="flex-1 max-w-xl w-full text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-8 animate-slide-up">
            <div className="backdrop-blur-sm border border-blue-300/30 rounded-full px-6 py-3 flex items-center gap-2 shadow-card bg-white/70">
              <Sparkles className="h-4 w-4 text-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-sm font-semibold">AI-Powered Personal Branding</span>
        </div>
          </div>
          <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight mb-8" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="block text-gray-900">Build, Grow & Manage Your</span>
            <span className="block bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Personal Brand</span>
        </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Your AI employee that handles everything from content creation to marketing automation. <span className="block mt-2 font-semibold text-gray-900">Focus on what you do best while AI grows your brand.</span>
        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-slide-up">
            <button className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white px-10 py-5 rounded-full shadow-lg flex items-center gap-3 text-lg font-semibold hover:scale-105 transition-transform">
            Start Building Your Brand
              <span className="bg-white rounded-full p-2 ml-2 flex items-center justify-center">
                <ArrowRight className="text-[#2563eb] w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
        {/* Right: Flozy-style floating dashboard image */}
        <div className="flex-1 flex justify-center items-center w-full max-w-2xl relative">
          {/* Gradient effect behind the image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-3xl z-0"
            style={{
              background: 'radial-gradient(ellipse at 60% 40%, #2563eb22 0%, #38b6ff11 60%, transparent 100%)',
              filter: 'blur(24px)',
            }}
          />
          <div className="bg-white rounded-3xl shadow-2xl p-2 relative z-10" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}>
            <img src="/lovable-uploads/image101.png" alt="Repic AI Dashboard Preview" className="rounded-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;