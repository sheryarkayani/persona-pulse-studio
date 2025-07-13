import React, { useEffect } from "react";

interface SoundLikeYouProps {
  painPoints?: string[];
}

const defaultPainPoints = [
  "Has a busy, happening life but lacks time for content creation",
  "Primary income/sales come from social media, especially Instagram",
  "Wants professional results without hiring a full team",
  "Needs consistent posting but struggles with content ideas",
  "Wants to focus on business growth, not content management"
];

const style = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes pulseDot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
  50% { box-shadow: 0 0 0 8px rgba(37,99,235,0.12); }
}
`;

export default function SoundLikeYou({ painPoints = defaultPainPoints }: SoundLikeYouProps) {
  useEffect(() => {
    if (!document.getElementById('soundlikeyou-animations')) {
      const s = document.createElement('style');
      s.id = 'soundlikeyou-animations';
      s.innerHTML = style;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section className="relative py-24 px-0 w-full bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 overflow-visible">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-transparent to-cyan-200/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(37,99,235,0.10),transparent_60%)]"></div>
      </div>
      <div className="relative z-10 w-full flex justify-center">
        <div className="bg-white/90 rounded-2xl p-10 border border-blue-200 shadow-lg group w-full max-w-4xl px-4 sm:px-8 lg:px-16 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30 hover:ring-2 hover:ring-blue-300/60 hover:ring-offset-2"
          style={{
            animation: `fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) both`,
            animationDelay: `0.2s`,
            animationFillMode: 'both',
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Sound Like You?</h3>
            <p className="text-lg text-blue-900/90 font-medium">
              You're in the right place if you identify with these challenges:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-700 mt-2 flex-shrink-0 shadow-md animate-pulse-dot" style={{ animation: 'pulseDot 1.5s infinite' }}></div>
                <p className="text-blue-900 font-medium text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-xl font-semibold text-blue-700">
              Let AI handle the heavy lifting while you focus on what you do best! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 