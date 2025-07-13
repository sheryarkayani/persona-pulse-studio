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

const features = [
  {
    icon: Bot,
    title: "AI Content Creation",
    description: "Generate engaging posts, captions, and stories tailored to your brand voice and audience.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Brand Identity & Design",
    description: "Create consistent visual branding with AI-powered design tools and templates.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Customer Profiling",
    description: "Build detailed customer profiles based on real user statistics and behavior data.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Competitor Analysis",
    description: "Track competitors and analyze their positioning to find your competitive advantages.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Automated funnels, lead generation, and customer journey optimization.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "AI-powered lead magnets and conversion optimization to grow your audience.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Camera,
    title: "Content Editing",
    description: "Professional photo and video editing with AI-powered enhancement tools.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Create high-converting landing pages that reflect your brand and drive results.",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track performance across all channels with detailed analytics and recommendations.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "Schedule, publish, and manage content across all your social media platforms.",
    gradient: "from-sky-500 to-blue-500"
  },
  {
    icon: Lightbulb,
    title: "Creative Ideas",
    description: "Get endless content ideas and creative concepts that align with your brand values.",
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    icon: Settings,
    title: "Workflow Automation",
    description: "Streamline your entire brand management process with intelligent automations.",
    gradient: "from-slate-500 to-gray-500"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-background">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-primary font-semibold">All-in-One Platform</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Everything You Need to 
          <span className="block bg-gradient-primary bg-clip-text text-transparent">Scale Your Brand</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stop juggling multiple tools. Our AI handles all aspects of personal branding 
          so you can focus on what matters most - growing your business.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-spring hover:-translate-y-2 border-border/30 bg-white shadow-card hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-soft`}>
                  <Icon className="h-6 w-6 text-white group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="text-center mt-16">
        <div className="bg-white rounded-2xl p-8 border border-border/30 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] group">
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            Like Flozy for Service Businesses, but for Personal Brands
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Just as Flozy revolutionized service-based businesses, Repic AI is the complete 
            platform that transforms how creators build and scale their personal brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;