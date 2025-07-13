import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

const plans = [
  {
    name: "Starter Plan",
    price: "$97",
    period: "/month",
    description: "Perfect for solo creators",
    features: [
      "Save 20+ hours per week on content creation",
      "Increase engagement by 300% with AI-optimized content",
      "Generate qualified leads on autopilot"
    ],
    popular: false
  },
  {
    name: "Pro Plan",
    price: "$197",
    period: "/month",
    description: "For scaling entrepreneurs",
    features: [
      "Save 20+ hours per week on content creation",
      "Increase engagement by 300% with AI-optimized content",
      "Generate qualified leads on autopilot",
      "Build authority in your niche faster",
      "Scale your personal brand without burning out"
    ],
    popular: true
  }
];

const PricingPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-50 to-white flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-4 py-24 w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>
            Ready to Transform Your <span className="block bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Personal Brand?</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto font-medium">
            Join thousands of creators who've already transformed their brands with AI.<br />
            <span className="block mt-2 font-semibold text-foreground">Your AI employee is waiting.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <Card key={plan.name} className={`relative bg-white/80 border-none shadow-xl rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary/60 scale-105 z-10' : ''}`}>  
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wide" style={{letterSpacing: '0.08em'}}>POPULAR</span>
              )}
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-1 tracking-tight">{plan.name}</h2>
                <div className="text-4xl font-extrabold mb-1">{plan.price}<span className="text-lg font-medium text-muted-foreground">{plan.period}</span></div>
                <div className="text-base text-muted-foreground mb-2">{plan.description}</div>
              </div>
              <ul className="space-y-3 mb-8 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/90 text-base font-medium justify-center">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="w-full max-w-xs bg-black text-white hover:bg-neutral-900 rounded-xl text-lg font-semibold shadow-md transition-all duration-200">
                Start Free Trial
              </Button>
            </Card>
          ))}
        </div>
        <div className="text-center text-muted-foreground text-base mb-4">
          <span className="inline-block bg-neutral-100 rounded-full px-4 py-2 font-medium">🎯 14-day free trial • No credit card required • Cancel anytime</span>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-primary/90">
            Join 10,000+ creators already using Repic AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;