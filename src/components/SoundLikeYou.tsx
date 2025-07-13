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
    <section className="relative py-28 px-0 w-full bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] overflow-visible">
      {/* Subtle mesh/radial gradient background, no harsh floating shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
      </div>
      <div className="relative z-10 w-full flex justify-center">
        <div className="bg-white rounded-3xl p-12 shadow-2xl group w-full max-w-4xl transition-all duration-300 hover:shadow-blue-400/30 hover:-translate-y-2 hover:scale-105">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              <span className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Sound Like You?</span>
            </h3>
            <p className="text-lg text-gray-700 font-medium mt-2">
              You're in the right place if you identify with these challenges:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#2563eb] to-[#38b6ff] mt-2 flex-shrink-0 shadow-md animate-pulse-dot" style={{ animation: 'pulseDot 1.5s infinite' }}></div>
                <p className="text-blue-900 font-medium text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-semibold bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">
              Let AI handle the heavy lifting while you focus on what you do best! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 