import { cn } from "@/lib/utils";
import { Camera, Users, Building2 } from "lucide-react";
import { useEffect } from "react";

const audienceClusters = [
  {
    title: "Creators",
    description:
      "Amplify your reach and monetize your creativity with tools for content, growth, and partnerships.",
    features: ["Content Creators", "Solopreneurs", "Influencers"],
    gradient: "from-blue-600 via-cyan-400 to-blue-500",
    icon: Camera,
    iconBg: "from-blue-500 to-cyan-400"
  },
  {
    title: "Consultants",
    description:
      "Establish expertise, attract high-value clients, and build authority in your niche.",
    features: ["Coaches", "Consultants", "Freelancers"],
    gradient: "from-blue-700 via-blue-400 to-cyan-400",
    icon: Users,
    iconBg: "from-blue-700 to-blue-500"
  },
  {
    title: "Entrepreneurs",
    description:
      "Build personal brand equity and scale your business with credibility and trust.",
    features: ["Agency Owners", "Entrepreneurs", "Startups"],
    gradient: "from-cyan-400 via-blue-500 to-blue-700",
    icon: Building2,
    iconBg: "from-cyan-400 to-blue-600"
  }
];

const style = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes floatIcon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
`;

export default function TargetAudience() {
  useEffect(() => {
    if (!document.getElementById('audience-animations')) {
      const s = document.createElement('style');
      s.id = 'audience-animations';
      s.innerHTML = style;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section className="relative py-24 px-0 w-full bg-gradient-to-br from-gray-50 to-blue-50 overflow-visible">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      </div>
      <div className="relative z-10 w-full">
        <div className="text-center mb-16 px-4 sm:px-8 lg:px-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/60 rounded-full px-8 py-3 mb-8 shadow-sm">
            <span className="text-blue-700 font-semibold tracking-wide text-lg">Perfect For</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
            Built for Ambitious
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(59,130,246,0.18)]">Creators & Entrepreneurs</span>
          </h2>
          <p className="text-lg text-blue-900/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you're just starting or scaling up, Repic AI adapts to your unique needs and growth stage.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4 sm:px-8 lg:px-16">
          {audienceClusters.map((cluster, idx) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.title}
                className={cn(
                  "flex-1 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 min-w-[260px] max-w-[400px] mx-auto group flex flex-col items-center text-center p-10 transition-all duration-300",
                  "hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-blue-200/60 hover:ring-offset-2",
                )}
                style={{
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.12)",
                  animation: `fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) both`,
                  animationDelay: `${0.1 + idx * 0.15}s`,
                  animationFillMode: 'both',
                }}
              >
                <div
                  className={cn(
                    "w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg mb-6 -mt-2 transition-all duration-500",
                    cluster.iconBg,
                    "group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:scale-110 group-hover:shadow-blue-200/60"
                  )}
                  style={{
                    animation: 'floatIcon 2.5s ease-in-out infinite',
                  }}
                >
                  <Icon className="h-8 w-8 text-white drop-shadow" />
                </div>
                <div
                  className={cn(
                    "w-full h-2 rounded-full mb-6 bg-gradient-to-r transition-all duration-500",
                    cluster.gradient,
                    "group-hover:w-[110%] group-hover:shadow-blue-200/60"
                  )}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {cluster.title}
                </h3>
                <p className="text-base text-blue-900/80 mb-6 leading-relaxed">
                  {cluster.description}
                </p>
                <ul className="flex flex-wrap justify-center gap-2">
                  {cluster.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-semibold rounded-full px-4 py-1 text-xs shadow-sm border border-blue-200 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-50/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}