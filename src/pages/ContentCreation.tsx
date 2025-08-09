import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Video, FileText, Magnet, ArrowRight, Zap } from "lucide-react";

const ContentCreation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff]">
      <div className="max-w-none w-full mx-auto space-y-10 pb-16 px-2 md:px-8 relative overflow-x-hidden custom-scroll" style={{ height: 'calc(100vh - 0px)' }}>
        {/* Subtle mesh/radial gradient background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
        </div>

        {/* Header Section */}
        <div className="relative z-10 pt-12 pb-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="backdrop-blur-sm border border-blue-300/30 rounded-full px-6 py-3 flex items-center gap-2 shadow-lg bg-white/70">
              <Sparkles className="h-4 w-4 text-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-sm font-semibold">AI Content Creation Hub</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="block text-gray-900">Instagram Content Hub</span>
            <span className="block bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Your Creative Command Center</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create viral Instagram content with AI-powered tools. Generate posts, scripts, and lead magnets that engage your audience and grow your following.
            <span className="block mt-2 font-semibold text-gray-900">Everything you need to dominate Instagram.</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Post Creation Card */}
            <Card 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}
              onClick={() => navigate('/app/create-post')}
            >
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-center text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Post Creation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Generate engaging Instagram posts with AI. Create hooks, captions, and hashtags that drive real engagement.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>AI-powered captions</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Trending hashtags</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Multiple content tones</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Script Writing Card */}
            <Card 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}
              onClick={() => navigate('/app/create-post')}
            >
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-center text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Script Writing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Create compelling video scripts for Instagram Reels and Stories. Perfect hooks and engaging narratives.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Viral hooks & openings</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Story structure</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Call-to-action endings</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lead Magnets Card */}
            <Card 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}
              onClick={() => navigate('/app/lead-magnet-ai')}
            >
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Magnet className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-center text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Lead Magnets
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Design irresistible lead magnets that grow your audience and convert followers into customers.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>Growth-focused resources</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <span>Multiple formats</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span>Conversion-optimized CTAs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => navigate('/app/create-post')}
              className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Zap size={20} className="mr-2" />
              Start Creating
              <ArrowRight size={16} className="ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/app/library')}
              className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Browse Templates
            </Button>
          </div>

          {/* Stats or Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#2563eb]">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Advanced AI creates content that resonates with your audience</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Generate professional content in seconds, not hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Engagement Focused</h3>
              <p className="text-gray-600">Every piece of content is optimized for maximum engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreation; 