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
    icon: "🛠️",
    title: "Create",
    description: "AI-powered tools to craft your brand.",
    bullets: [
      "AI Content Creation",
      "Brand Identity & Design",
      "Content Editing"
    ],
    gradient: "from-blue-400/80 to-cyan-300/80"
  },
  {
    icon: "🚀",
    title: "Grow",
    description: "Expand your reach and audience.",
    bullets: [
      "Lead Generation",
      "Customer Profiling",
      "Social Media Management"
    ],
    gradient: "from-purple-400/80 to-pink-300/80"
  },
  {
    icon: "🤖",
    title: "Automate",
    description: "Streamline your brand management.",
    bullets: [
      "Marketing Automation",
      "Workflow Automation",
      "Creative Ideas"
    ],
    gradient: "from-yellow-300/80 to-orange-200/80"
  },
  {
    icon: "📊",
    title: "Analyze",
    description: "Insights to optimize your growth.",
    bullets: [
      "Analytics & Insights",
      "Competitor Analysis",
      "Landing Pages"
    ],
    gradient: "from-violet-400/80 to-blue-300/80"
  }
];

const Features = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Soft mesh/gradient background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 via-fuchsia-100/40 to-cyan-100/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200/40 via-blue-100/40 to-purple-100/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="relative z-10 text-center mb-24">
        <h2 className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6 drop-shadow-lg tracking-tight">
          Everything You Need to <br className="hidden sm:block" />
          <span className="block">Scale Your Brand</span>
        </h2>
        <p className="text-2xl sm:text-3xl text-muted-foreground max-w-2xl mx-auto font-medium mb-2 leading-relaxed">
          Stop juggling multiple tools. Our AI handles all aspects of personal branding<br />
          so you can focus on what matters most – growing your business.
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {featureCategories.map((cat, idx) => (
          <div
            key={cat.title}
            className="group bg-white/70 backdrop-blur-2xl rounded-3xl shadow-xl p-12 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.045] hover:shadow-2xl cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.12 + 0.2}s` }}
          >
            <div className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${cat.gradient} shadow-lg mb-8 text-5xl select-none`}>
              {cat.icon}
            </div>
            <h3 className="text-2xl font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
              {cat.title}
            </h3>
            <p className="text-lg text-muted-foreground font-medium mb-6">
              {cat.description}
            </p>
            <ul className="space-y-2">
              {cat.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-muted-foreground/90 font-medium">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-cyan-400 opacity-70" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative z-10 text-center mt-20">
        <a href="#" className="inline-block text-primary/80 font-semibold text-lg hover:underline transition-all duration-200 opacity-80 hover:opacity-100">See all features →</a>
      </div>
    </section>
  );
};

export default Features;