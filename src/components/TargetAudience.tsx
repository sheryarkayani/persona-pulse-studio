import { cn } from "@/lib/utils";
import { Camera, Users, Building2 } from "lucide-react";
import { useEffect } from "react";

const audienceClusters = [
  {
    title: "Creators",
    description:
      "Amplify your reach and monetize your creativity with tools for content, growth, and partnerships.",
    features: ["Content Creators", "Solopreneurs", "Influencers"],
    gradient: "from-blue-700 via-blue-500 to-cyan-400",
    // Modern magic wand icon
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wand-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fffbe6" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
        <rect x="14" y="6" width="4" height="20" rx="2" fill="url(#wand-gradient)" />
        <rect x="15.5" y="2" width="1" height="4" rx="0.5" fill="#facc15" />
        <rect x="15.5" y="26" width="1" height="4" rx="0.5" fill="#facc15" />
        <rect x="2" y="15.5" width="4" height="1" rx="0.5" fill="#facc15" />
        <rect x="26" y="15.5" width="4" height="1" rx="0.5" fill="#facc15" />
        <circle cx="8" cy="8" r="1.5" fill="#facc15" />
        <circle cx="24" cy="24" r="1.5" fill="#facc15" />
      </svg>
    ),
    iconBg: "from-blue-700 to-cyan-400"
  },
  {
    title: "Consultants",
    description:
      "Establish expertise, attract high-value clients, and build authority in your niche.",
    features: ["Coaches", "Consultants", "Freelancers"],
    gradient: "from-blue-800 via-blue-600 to-cyan-500",
    // Modern chat bubble with sparkles
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="chat-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect x="6" y="8" width="20" height="12" rx="6" fill="url(#chat-gradient)" />
        <polygon points="16,26 12,20 20,20" fill="#2563eb" />
        <circle cx="12" cy="14" r="1.5" fill="#fff" />
        <circle cx="16" cy="14" r="1.5" fill="#fff" />
        <circle cx="20" cy="14" r="1.5" fill="#fff" />
        <circle cx="25" cy="7" r="1" fill="#38bdf8" />
        <circle cx="7" cy="11" r="0.7" fill="#38bdf8" />
      </svg>
    ),
    iconBg: "from-blue-800 to-blue-500"
  },
  {
    title: "Entrepreneurs",
    description:
      "Build personal brand equity and scale your business with credibility and trust.",
    features: ["Agency Owners", "Entrepreneurs", "Startups"],
    gradient: "from-cyan-500 via-blue-600 to-blue-900",
    // Modern rocket icon
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rocket-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path d="M16 4C20 8 24 20 16 28C8 20 12 8 16 4Z" fill="url(#rocket-gradient)" />
        <circle cx="16" cy="14" r="2" fill="#22c55e" />
        <rect x="15" y="28" width="2" height="4" rx="1" fill="#22c55e" />
        <rect x="11" y="24" width="2" height="4" rx="1" fill="#a7f3d0" />
        <rect x="19" y="24" width="2" height="4" rx="1" fill="#a7f3d0" />
      </svg>
    ),
    iconBg: "from-cyan-500 to-blue-700"
  }
];

const style = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes floatIcon {
  0%, 100% { transform: translateY(0); }
  20% { transform: translateY(-8px) scale(1.08) rotate(-4deg); }
  50% { transform: translateY(-16px) scale(1.12) rotate(4deg); }
  80% { transform: translateY(-8px) scale(1.08) rotate(-2deg); }
}
@keyframes floatShape {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.08); }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(56,189,248,0.4), 0 4px 24px 0 rgba(37,99,235,0.10); }
  50% { box-shadow: 0 0 16px 8px rgba(56,189,248,0.25), 0 4px 24px 0 rgba(37,99,235,0.10); }
}
@keyframes badgePulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.10); }
  50% { box-shadow: 0 0 8px 2px rgba(56,189,248,0.15); }
}
.gradient-glow-bar {
  position: relative;
}
.gradient-glow-bar::after {
  content: '';
  position: absolute;
  left: 0; right: 0; top: 50%; height: 8px;
  background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
  filter: blur(8px);
  opacity: 0.5;
  border-radius: 4px;
  z-index: -1;
  transform: translateY(-50%);
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
    <section className="relative py-28 px-0 w-full bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] overflow-visible">
      {/* Subtle mesh/radial gradient background, no harsh floating shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-8 py-3 mb-8 shadow-sm">
            <span className="text-[#2563eb] font-semibold tracking-wide text-lg">Perfect For</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            Built for Ambitious
            <span className="block bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Creators & Entrepreneurs</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed mt-4">
            Whether you're just starting or scaling up, Repic AI adapts to your unique needs and growth stage.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-stretch">
          {audienceClusters.map((cluster, idx) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.title}
                className={cn(
                  "flex-1 bg-white rounded-3xl shadow-2xl min-w-[260px] max-w-[400px] mx-auto group flex flex-col items-center text-center p-10 transition-all duration-300",
                  "hover:shadow-blue-400/30 hover:-translate-y-2 hover:scale-105"
                )}
                style={{
                  boxShadow: "0 8px 32px 0 rgba(37,99,235,0.10)",
                  animation: `fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) both`,
                  animationDelay: `${0.1 + idx * 0.15}s`,
                  animationFillMode: 'both',
                }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-300/40"
                  style={{
                    boxShadow: '0 4px 24px 0 rgba(37,99,235,0.10)',
                    animation: 'floatIcon 2.5s ease-in-out infinite',
                    animationDelay: `${idx * 0.3}s`,
                  }}
                >
                  <div className={cn("w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br", cluster.iconBg)}>{Icon}</div>
                </div>
                <div
                  className={cn(
                    "w-full h-2 rounded-full mb-6 bg-gradient-to-r transition-all duration-500",
                    cluster.gradient
                  )}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  {cluster.title}
                </h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  {cluster.description}
                </p>
                <ul className="flex flex-wrap justify-center gap-2">
                  {cluster.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 font-semibold rounded-full px-4 py-1 text-xs shadow-sm border border-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-50/80">
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