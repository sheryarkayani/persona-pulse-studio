import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Sparkles, Zap } from "lucide-react";

const benefits = [
  "Save 20+ hours per week on content creation",
  "Increase engagement by 300% with AI-optimized content", 
  "Generate qualified leads on autopilot",
  "Build authority in your niche faster",
  "Scale your personal brand without burning out"
];

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero rounded-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center py-16 px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-semibold">Limited Time Offer</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Personal Brand?
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
            Join thousands of creators who've already transformed their brands with AI. 
            <span className="block mt-2 font-semibold">Your AI employee is waiting.</span>
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Zap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Starter Plan</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    $97<span className="text-lg text-white/70">/month</span>
                  </div>
                  <p className="text-white/80">Perfect for solo creators</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="hero" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 relative overflow-hidden shadow-glow">
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Sparkles className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Pro Plan</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    $197<span className="text-lg text-white/70">/month</span>
                  </div>
                  <p className="text-white/80">For scaling entrepreneurs</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="gradient" size="lg" className="w-full">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-white/70 mb-4">
              🎯 14-day free trial • No credit card required • Cancel anytime
            </p>
            <p className="text-white/60">
              Join 10,000+ creators already using Repic AI
            </p>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <Card className="text-center bg-white border-border/30 shadow-soft">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground">Active Creators</p>
          </CardContent>
        </Card>
        
        <Card className="text-center bg-white border-border/30 shadow-soft">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">5M+</div>
            <p className="text-muted-foreground">Content Pieces Created</p>
          </CardContent>
        </Card>
        
        <Card className="text-center bg-white border-border/30 shadow-soft">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">300%</div>
            <p className="text-muted-foreground">Average Engagement Increase</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;