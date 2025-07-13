// Fixed Features Component
import { useEffect } from "react";

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
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconBg: "from-blue-500 to-blue-700",
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
    <section className="relative py-24 px-0 sm:px-0 lg:px-0 w-full bg-gradient-to-br from-gray-50 to-blue-50 overflow-visible">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      </div>
      <div className="relative z-10 w-full">
        {/* Centered heading */}
        <div className="text-center mb-16 px-4 sm:px-8 lg:px-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(59,130,246,0.18)]">Scale Your Brand</span>
          </h2>
          <p className="text-lg text-blue-900/80 max-w-2xl mx-auto leading-relaxed">
            Stop juggling multiple tools. Our AI handles all aspects of personal branding so you can focus on what matters most – growing your business.
          </p>
        </div>
        {/* Feature cards: horizontal scroll on mobile, 2x2 grid on tablet, 4-col on desktop */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex flex-row gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 min-w-[900px] md:min-w-0 justify-center px-4 sm:px-8 lg:px-16">
            {featureCategories.map((cat, idx) => (
              <div
                key={cat.title}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center text-center border border-blue-100 min-w-[260px] max-w-[320px] mx-auto group"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(59,130,246,0.12)',
                  animation: `fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) both`,
                  animationDelay: `${0.1 + idx * 0.12}s`,
                  animationFillMode: 'both',
                }}
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${cat.iconBg} shadow-lg mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-200/60`}
                  style={{ animation: 'floatIcon 2.5s ease-in-out infinite' }}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-base text-blue-900/80 mb-4 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="space-y-2 w-full">
                  {cat.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-blue-800 justify-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-8 px-4 sm:px-8 lg:px-16">
          <a href="#" className="text-blue-600 font-semibold text-base hover:underline transition-all duration-200 flex items-center gap-1">
            See all features <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;