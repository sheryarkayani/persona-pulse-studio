import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Enhanced background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-cyan-100/60 to-blue-200/80"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300 via-blue-500 to-cyan-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-200 via-blue-400 to-cyan-200 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/lovable-uploads/5e2c30b7-efa0-48d1-8a0a-a1687293f1c5.png" 
            alt="Repic AI Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="flex items-center justify-center mb-8 animate-slide-up">
          <div className="glass-morphism backdrop-blur-sm border border-blue-300/30 rounded-full px-6 py-3 flex items-center gap-2 shadow-card hover:shadow-blue-300/40 transition-all duration-300">
            <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold">AI-Powered Personal Branding</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-scale-in">
          Build, Grow & Manage Your
          <span className="block bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default drop-shadow-[0_2px_16px_rgba(59,130,246,0.18)]">
            Personal Brand
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-blue-900/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          Your AI employee that handles everything from content creation to marketing automation. 
          <span className="block mt-2 font-semibold text-blue-900">Focus on what you do best while AI grows your brand.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button variant="hero" size="xl" className="group hover:shadow-glow hover:shadow-blue-400/40 transform hover:scale-105 transition-spring bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 text-white">
            Start Building Your Brand
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="xl" className="border-blue-300/30 text-blue-700 hover:bg-blue-50/60 glass-morphism hover:scale-105 transition-spring">
            <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse text-blue-500" />
            See How It Works
          </Button>
        </div>
        
        {/* Dashboard Preview */}
        <div className="mt-16 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-cyan-300/20 to-blue-600/20 rounded-2xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 via-cyan-100/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/lovable-uploads/ss01.png"
              alt="Repic AI Dashboard Preview" 
              className="relative rounded-2xl shadow-2xl border border-blue-200/30 w-full group-hover:scale-[1.02] transition-transform duration-500 hover:shadow-[0_4px_32px_0_rgba(59,130,246,0.18)]"
            />
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <p className="text-blue-700/80 text-sm">Trusted by 10,000+ creators and entrepreneurs</p>
          <div className="flex items-center gap-8">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 border-2 border-background"></div>
              ))}
            </div>
            <div className="text-blue-700/80 text-sm">
              ⭐⭐⭐⭐⭐ 4.9/5 from happy creators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;