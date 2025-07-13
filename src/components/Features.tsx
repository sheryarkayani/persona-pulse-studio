import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  Palette, 
  Target, 
  TrendingUp, 
  Zap, 
  Users, 
  Camera, 
  Globe,
  BarChart3,
  Megaphone,
  Lightbulb,
  Settings
} from "lucide-react";

const featureCategories = [
  {
    icon: Bot,
    title: "Create",
    description: "AI-powered tools to craft your brand.",
    bullets: [
      "AI Content Creation",
      "Brand Identity & Design",
      "Content Editing"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Grow",
    description: "Expand your reach and audience.",
    bullets: [
      "Lead Generation",
      "Customer Profiling",
      "Social Media Management"
    ],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Automate",
    description: "Streamline your brand management.",
    bullets: [
      "Marketing Automation",
      "Workflow Automation",
      "Creative Ideas"
    ],
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description: "Insights to optimize your growth.",
    bullets: [
      "Analytics & Insights",
      "Competitor Analysis",
      "Landing Pages"
    ],
    gradient: "from-violet-500 to-purple-500"
  }
];

const Features = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Soft background mesh and gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 via-fuchsia-100/40 to-cyan-100/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200/40 via-blue-100/40 to-purple-100/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="relative z-10 text-center mb-20">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/60 via-fuchsia-100/60 to-cyan-100/60 rounded-full px-8 py-4 mb-8 shadow-soft backdrop-blur-md">
          <Zap className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-lg font-bold text-primary tracking-wide uppercase">All-in-One Platform</span>
        </div>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6 drop-shadow-lg">
          Everything You Need to
          <span className="block bg-gradient-primary bg-clip-text text-transparent animate-gradient-x">Scale Your Brand</span>
        </h2>
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-medium mb-2">
          Stop juggling multiple tools. Our AI handles all aspects of personal branding
          <span className="block">so you can focus on what matters most - growing your business.</span>
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {featureCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-border/20 p-10 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.04] hover:shadow-glow hover:border-primary/30 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.12 + 0.2}s` }}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <Icon className="h-8 w-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {cat.title}
              </h3>
              <p className="text-base text-muted-foreground font-medium mb-4">
                {cat.description}
              </p>
              <ul className="space-y-2">
                {cat.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground/90 font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="relative z-10 text-center mt-16">
        <a href="#" className="inline-block text-primary font-semibold text-lg hover:underline transition-all duration-200">See all features →</a>
      </div>
    </section>
  );
};

export default Features;