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
    color: "bg-gradient-to-br from-blue-400/80 to-cyan-300/80",
    features: ["Client attraction", "Thought leadership", "Industry authority"]
  },
  {
    icon: User,
    title: "Freelancers",
    description: "Stand out from the competition with a strong personal brand",
    color: "bg-gradient-to-br from-green-400/80 to-lime-200/80",
    features: ["Portfolio showcase", "Client testimonials", "Skill positioning"]
  },
  {
    icon: TrendingUp,
    title: "Solopreneurs",
    description: "Build trust and credibility to grow your business",
    color: "bg-gradient-to-br from-purple-400/80 to-blue-200/80",
    features: ["Business growth", "Customer trust", "Market positioning"]
  },
  {
    icon: Camera,
    title: "Content Creators",
    description: "Amplify your reach and monetize your creativity",
    color: "bg-gradient-to-br from-pink-400/80 to-fuchsia-200/80",
    features: ["Audience growth", "Brand partnerships", "Content strategy"]
  },
  {
    icon: Users,
    title: "Coaches & Consultants",
    description: "Establish expertise and attract high-value clients",
    color: "bg-gradient-to-br from-orange-400/80 to-yellow-200/80",
    features: ["Authority building", "Lead generation", "Premium pricing"]
  },
  {
    icon: Building2,
    title: "Entrepreneurs",
    description: "Build personal brand equity alongside your business",
    color: "bg-gradient-to-br from-indigo-400/80 to-blue-200/80",
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
    <section className="py-32 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-br from-white via-neutral-50 to-white rounded-3xl shadow-xl border border-border/20">
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-8 py-3 mb-8 shadow-sm">
          <Users className="h-5 w-5 text-primary" />
          <span className="text-primary font-semibold tracking-wide text-lg">Perfect For</span>
        </div>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>
          Built for Ambitious
          <span className="block bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Creators & Entrepreneurs</span>
        </h2>
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
          Whether you're just starting or scaling up, Repic AI adapts to your unique needs and growth stage.
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-2xl rounded-3xl shadow-lg p-10 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.045] hover:shadow-2xl cursor-pointer border border-border/20"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
                minHeight: 380
              }}
            >
              <div className={`w-20 h-20 flex items-center justify-center rounded-2xl ${audience.color} shadow-lg mb-8 text-5xl select-none group-hover:scale-110 group-hover:rotate-2 transition-all duration-300`}>
                <Icon className="h-10 w-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {audience.title}
              </h3>
              <p className="text-lg text-muted-foreground font-medium mb-6">
                {audience.description}
              </p>
              <ul className="flex flex-wrap justify-center gap-2">
                {audience.features.map((feature, idx) => (
                  <li key={idx}>
                    <Badge variant="secondary" className="text-xs px-3 py-1 rounded-full bg-gradient-to-br from-blue-100 via-fuchsia-100 to-cyan-100 text-foreground/80 font-semibold shadow-sm">
                      {feature}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-12 border border-border/20 shadow-lg group">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-foreground mb-3 tracking-tight">Sound Like You?</h3>
          <p className="text-lg text-muted-foreground font-medium">
            You're in the right place if you identify with these challenges:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0 shadow-md"></div>
              <p className="text-foreground font-medium text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-xl font-semibold text-primary/90">
            Let AI handle the heavy lifting while you focus on what you do best! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;