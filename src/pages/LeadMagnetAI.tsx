import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Magnet, FileText, Video, Database, Settings, Sparkles, Target, Zap } from "lucide-react";

const LeadMagnetAI = () => {
  const [selectedResourceType, setSelectedResourceType] = useState("");
  const [resourceOutline, setResourceOutline] = useState(`A complete guide to Instagram growth and engagement.

Includes:
- How to create viral Instagram Reels
- Instagram Story strategies that convert
- How to gain 1000 targeted followers in 30 days
- Content planning templates for consistent posting`);
  const [cta, setCta] = useState("Download free! Comment 'GROWTH' and I'll send it to your DMs.");

  const resourceTypes = [
    "Info Document",
    "Video masterclass",
    "Content templates",
    "Instagram toolkit",
    "Growth checklist"
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "Info Document": return FileText;
      case "Video masterclass": return Video;
      case "Instagram toolkit": return Database;
      case "Content templates": return Settings;
      case "Growth checklist": return Magnet;
      default: return FileText;
    }
  };

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
              <Target className="h-4 w-4 text-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-sm font-semibold">AI Lead Magnet Generator</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="block text-gray-900">Create Irresistible</span>
            <span className="block bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Instagram Lead Magnets</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Design powerful lead magnets that grow your Instagram audience and convert followers into loyal customers.
            <span className="block mt-2 font-semibold text-gray-900">Turn your content into a lead generation machine.</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto relative z-10">
          {/* Left Side - Main Form */}
          <div className="flex-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Lead Magnet Creator
                </CardTitle>
                <p className="text-gray-600">Design compelling resources that capture leads and grow your Instagram following</p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Type of Resource Section */}
                <div>
                  <Label htmlFor="resourceType" className="text-base font-semibold text-gray-900 mb-4 block">
                    Resource Type
                  </Label>
                  <Select value={selectedResourceType} onValueChange={setSelectedResourceType}>
                    <SelectTrigger className="w-full h-14 bg-white/80 border-gray-200">
                      <SelectValue placeholder="Choose your lead magnet type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {resourceTypes.map((type) => {
                        const Icon = getResourceIcon(type);
                        return (
                          <SelectItem key={type} value={type}>
                            <div className="flex items-center space-x-3 py-2">
                              <Icon size={20} className="text-[#2563eb]" />
                              <span className="font-medium">{type}</span>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  {selectedResourceType && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800 font-medium">
                        {selectedResourceType === "Info Document" && "📄 Perfect for PDFs, guides, and downloadable resources"}
                        {selectedResourceType === "Video masterclass" && "🎥 Great for educational content and tutorials"}
                        {selectedResourceType === "Content templates" && "📋 Ready-to-use templates for Instagram posts and stories"}
                        {selectedResourceType === "Instagram toolkit" && "🛠️ Complete resource collections and databases"}
                        {selectedResourceType === "Growth checklist" && "✅ Step-by-step action plans and checklists"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Resource Outline Section */}
                <div>
                  <Label htmlFor="outline" className="text-base font-semibold text-gray-900 mb-4 block">
                    Resource Outline
                  </Label>
                  <p className="text-sm text-gray-600 mb-4">
                    Describe what your lead magnet will include. Be specific about the Instagram value you're providing.
                  </p>
                  <Textarea
                    value={resourceOutline}
                    onChange={(e) => setResourceOutline(e.target.value)}
                    className="w-full min-h-32 bg-white/80 border-gray-200"
                    rows={8}
                    placeholder="Describe your lead magnet content..."
                  />
                </div>

                {/* CTA Section */}
                <div>
                  <Label htmlFor="cta" className="text-base font-semibold text-gray-900 mb-4 block">
                    Call-to-Action (Optional)
                  </Label>
                  <p className="text-sm text-gray-600 mb-4">
                    If you don't provide a CTA, our AI will create one optimized for Instagram engagement.
                  </p>
                  <Textarea
                    value={cta}
                    onChange={(e) => setCta(e.target.value)}
                    placeholder="Download free! Comment 'GROWTH' and I'll send it to your DMs."
                    className="w-full bg-white/80 border-gray-200"
                    rows={3}
                  />
                </div>

                {/* Generate Button */}
                <Button 
                  className="w-full h-14 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white text-lg font-semibold shadow-xl"
                >
                  <Zap size={20} className="mr-3" />
                  Generate Instagram Lead Magnet
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Tips and Examples */}
          <div className="w-full xl:w-96 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <Magnet className="text-[#2563eb]" size={20} />
                  <span>Lead Magnet Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    🎯 What makes a great Instagram lead magnet:
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start space-x-3 p-2 bg-blue-50 rounded-lg">
                      <span className="text-[#2563eb] mt-1">•</span>
                      <span><strong>Solves specific Instagram challenges</strong> - Addresses real pain points</span>
                    </li>
                    <li className="flex items-start space-x-3 p-2 bg-green-50 rounded-lg">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Provides immediate value</strong> - Actionable from day one</span>
                    </li>
                    <li className="flex items-start space-x-3 p-2 bg-purple-50 rounded-lg">
                      <span className="text-purple-600 mt-1">•</span>
                      <span><strong>Mobile-optimized format</strong> - Easy to consume on phones</span>
                    </li>
                    <li className="flex items-start space-x-3 p-2 bg-orange-50 rounded-lg">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Visual and Instagram-friendly</strong> - Fits the platform aesthetic</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Popular Instagram Resource Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-700 space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-semibold text-blue-800">📄 Info Documents:</span> Growth guides, strategy PDFs, content calendars
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="font-semibold text-purple-800">🎥 Video Masterclass:</span> Reels tutorials, Live training sessions
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-semibold text-green-800">📋 Content Templates:</span> Post templates, Story templates, caption frameworks
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <span className="font-semibold text-orange-800">🛠️ Instagram Toolkit:</span> Hashtag lists, content ideas, growth resources
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <span className="font-semibold text-yellow-800">✅ Growth Checklist:</span> Daily action plans, optimization checklists
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">💡 Example Outlines</h4>
                  <div className="text-sm text-gray-700 space-y-4">
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                      <p className="font-semibold mb-2 text-blue-800">🚀 For Instagram Growth Guide:</p>
                      <div className="text-xs bg-white p-3 rounded border text-gray-700">
                        <strong>"7-day Instagram growth challenge"</strong><br/>
                        • Day 1: Profile optimization secrets<br/>
                        • Day 2: Content that converts followers<br/>
                        • Day 3: Hashtag strategy that works<br/>
                        • Day 4: Stories that drive engagement<br/>
                        • Day 5: Reels for maximum reach<br/>
                        • Day 6: Community building tactics<br/>
                        • Day 7: Analytics and optimization
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <p className="font-semibold mb-2 text-green-800">📋 For Content Templates:</p>
                      <div className="text-xs bg-white p-3 rounded border text-gray-700">
                        <strong>"30 viral Instagram post templates"</strong><br/>
                        • 10 educational carousel templates<br/>
                        • 10 behind-the-scenes story ideas<br/>
                        • 10 engagement-boosting captions<br/>
                        • Bonus: Hashtag research worksheet
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetAI; 