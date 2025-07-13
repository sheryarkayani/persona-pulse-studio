import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Enhanced background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-background"></div>
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      
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
          <div className="glass-morphism backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 flex items-center gap-2 shadow-card hover:shadow-hover transition-all duration-300">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-primary text-sm font-semibold">AI-Powered Personal Branding</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-scale-in">
          Build, Grow & Manage Your
          <span className="block bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
            Personal Brand
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Your AI employee that handles everything from content creation to marketing automation. 
          <span className="block mt-2 font-semibold text-foreground">Focus on what you do best while AI grows your brand.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button variant="hero" size="xl" className="group hover:shadow-glow transform hover:scale-105 transition-spring">
            Start Building Your Brand
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="xl" className="border-primary/30 text-primary hover:bg-primary/5 glass-morphism hover:scale-105 transition-spring">
            <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            See How It Works
          </Button>
        </div>
        
        {/* Dashboard Preview */}
        <div className="mt-16 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-hero/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={dashboardPreview}
              alt="Repic AI Dashboard Preview" 
              className="relative rounded-2xl shadow-2xl border border-border/30 w-full group-hover:scale-[1.02] transition-transform duration-500 hover:shadow-glow"
            />
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <p className="text-muted-foreground text-sm">Trusted by 10,000+ creators and entrepreneurs</p>
          <div className="flex items-center gap-8">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background"></div>
              ))}
            </div>
            <div className="text-muted-foreground text-sm">
              ⭐⭐⭐⭐⭐ 4.9/5 from happy creators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;