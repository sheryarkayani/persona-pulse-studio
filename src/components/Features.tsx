// Fixed Features Component
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

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
@keyframes bgMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes floatShape {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.08); }
}
.glow-link {
  position: relative;
  transition: color 0.2s;
}
.glow-link::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -2px; height: 4px;
  background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
  filter: blur(6px);
  opacity: 0.7;
  border-radius: 2px;
  transition: opacity 0.2s;
  z-index: -1;
}
.glow-link:hover {
  color: #2563eb;
  text-shadow: 0 0 8px #38bdf8, 0 0 16px #2563eb44;
}
.glow-link:hover::after {
  opacity: 1;
}
`;

const Features = () => {
  useEffect(() => {
    if (!document.getElementById('features-animations')) {
      const s = document.createElement('style');
      s.id = 'features-animations';
      s.innerHTML = style;
      document.head.appendChild(s);
    }
  }, []);

  const featureCategories = [
    {
      icon: (
        <svg className="w-8 h-8" fill="url(#icon-gradient-yellow)" stroke="currentColor" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="icon-gradient-yellow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffbe6" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: "from-yellow-300 to-yellow-500",
      title: "Create",
      description: "AI-powered tools to craft your brand.",
      bullets: [
        "AI Content Creation",
        "Brand Identity & Design",
        "Content Editing"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="url(#icon-gradient-red)" stroke="currentColor" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="icon-gradient-red" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff1f2" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      iconBg: "from-red-400 to-red-600",
      title: "Grow",
      description: "Expand your reach and audience.",
      bullets: [
        "Lead Generation",
        "Customer Profiling",
        "Social Media Management"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="url(#icon-gradient-blue)" stroke="currentColor" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="icon-gradient-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconBg: "from-blue-700 to-blue-500",
      title: "Automate",
      description: "Streamline your brand management.",
      bullets: [
        "Marketing Automation",
        "Workflow Automation",
        "Creative Ideas"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="url(#icon-gradient-green)" stroke="currentColor" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="icon-gradient-green" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ecfdf5" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconBg: "from-green-400 to-green-600",
      title: "Analyze",
      description: "Insights to optimize your growth.",
      bullets: [
        "Analytics & Insights",
        "Competitor Analysis",
        "Landing Pages"
      ]
    }
  ];

  return (
    <section className="relative py-28 px-0 w-full bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] overflow-visible">
      {/* Subtle mesh/radial gradient background, no harsh floating shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Scale Your Brand</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mt-4">
            Stop juggling multiple tools. Our AI handles all aspects of personal branding so you can focus on what matters most – growing your business.
          </p>
        </div>
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex flex-row gap-10 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 min-w-[900px] md:min-w-0 justify-center">
            {featureCategories.map((cat, idx) => (
              <div
                key={cat.title}
                className="bg-white rounded-3xl shadow-2xl hover:shadow-blue-400/30 hover:-translate-y-2 hover:scale-105 transition-all duration-300 p-10 flex flex-col items-center text-center min-w-[260px] max-w-[320px] mx-auto group"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(37,99,235,0.10)',
                  animation: `fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) both`,
                  animationDelay: `${0.1 + idx * 0.12}s`,
                  animationFillMode: 'both',
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-300/40" style={{ boxShadow: '0 4px 24px 0 rgba(37,99,235,0.10)', animation: 'floatIcon 2.5s ease-in-out infinite', animationDelay: `${idx * 0.3}s` }}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${cat.iconBg}`}>{cat.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  {cat.title}
                </h3>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="space-y-2 w-full">
                  {cat.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-blue-800 justify-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <a href="#" className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white font-semibold text-base rounded-full px-8 py-4 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
            See all features <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white ml-1"><ArrowRight className="text-[#2563eb] w-5 h-5" /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;