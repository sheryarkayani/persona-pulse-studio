import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Briefcase, 
  Camera, 
  TrendingUp, 
  User, 
  Building2 
} from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Agency Owners",
    description: "Scale your personal brand while managing client work",
    color: "bg-blue-500",
    features: ["Client attraction", "Thought leadership", "Industry authority"]
  },
  {
    icon: User,
    title: "Freelancers",
    description: "Stand out from the competition with a strong personal brand",
    color: "bg-green-500",
    features: ["Portfolio showcase", "Client testimonials", "Skill positioning"]
  },
  {
    icon: TrendingUp,
    title: "Solopreneurs",
    description: "Build trust and credibility to grow your business",
    color: "bg-purple-500",
    features: ["Business growth", "Customer trust", "Market positioning"]
  },
  {
    icon: Camera,
    title: "Content Creators",
    description: "Amplify your reach and monetize your creativity",
    color: "bg-pink-500",
    features: ["Audience growth", "Brand partnerships", "Content strategy"]
  },
  {
    icon: Users,
    title: "Coaches & Consultants",
    description: "Establish expertise and attract high-value clients",
    color: "bg-orange-500",
    features: ["Authority building", "Lead generation", "Premium pricing"]
  },
  {
    icon: Building2,
    title: "Entrepreneurs",
    description: "Build personal brand equity alongside your business",
    color: "bg-indigo-500",
    features: ["Investment attraction", "Partnership opportunities", "Market credibility"]
  }
];

const painPoints = [
  "Has a busy, happening life but lacks time for content creation",
  "Primary income/sales come from social media, especially Instagram",
  "Wants professional results without hiring a full team",
  "Needs consistent posting but struggles with content ideas",
  "Wants to focus on business growth, not content management"
];

const TargetAudience = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-primary font-semibold">Perfect For</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Built for Ambitious
          <span className="block bg-gradient-primary bg-clip-text text-transparent">Creators & Entrepreneurs</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Whether you're just starting or scaling up, Repic AI adapts to your unique needs and growth stage.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-white border-border/30 shadow-sm">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${audience.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {audience.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {audience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {audience.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="bg-gradient-secondary rounded-2xl p-8 border border-border/30 shadow-soft">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Sound Like You?
          </h3>
          <p className="text-muted-foreground text-lg">
            You're in the right place if you identify with these challenges:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-foreground font-medium">{point}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-primary">
            Let AI handle the heavy lifting while you focus on what you do best! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;