
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BarChart3, Users, Target, TrendingUp, Sparkles, Instagram, Eye } from "lucide-react";

export default function Insights() {
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
              <BarChart3 className="h-4 w-4 text-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-sm font-semibold">AI-Powered Audience Insights</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="block text-gray-900">Understand Your</span>
            <span className="block bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Instagram Audience</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create detailed customer personas and audience insights to supercharge your Instagram content strategy.
            <span className="block mt-2 font-semibold text-gray-900">Know your audience, grow your engagement.</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto relative z-10">
          {/* Left Side - Persona Builder */}
          <div className="flex-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Instagram Audience Persona Builder
                </CardTitle>
                <p className="text-gray-600">Define your ideal Instagram follower to create content that resonates and converts</p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="age-range" className="text-base font-semibold text-gray-900 mb-3 block">Age Range</Label>
                    <Select>
                      <SelectTrigger id="age-range" className="h-12 bg-white/80 border-gray-200">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-24">18-24 (Gen Z)</SelectItem>
                        <SelectItem value="25-34">25-34 (Millennials)</SelectItem>
                        <SelectItem value="35-44">35-44 (Gen X)</SelectItem>
                        <SelectItem value="45-54">45-54 (Gen X)</SelectItem>
                        <SelectItem value="55+">55+ (Boomers)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="gender" className="text-base font-semibold text-gray-900 mb-3 block">Gender</Label>
                    <Select>
                      <SelectTrigger id="gender" className="h-12 bg-white/80 border-gray-200">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="non-binary">Non-binary</SelectItem>
                        <SelectItem value="all">All genders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-base font-semibold text-gray-900 mb-3 block">Primary Locations</Label>
                  <Input 
                    id="location" 
                    placeholder="e.g., United States, Canada, United Kingdom" 
                    className="h-12 bg-white/80 border-gray-200"
                  />
                </div>

                <div>
                  <Label htmlFor="interests" className="text-base font-semibold text-gray-900 mb-3 block">Instagram Interests</Label>
                  <Input 
                    id="interests" 
                    placeholder="e.g., Fitness, Fashion, Travel, Food, Business" 
                    className="h-12 bg-white/80 border-gray-200"
                  />
                </div>

                <div>
                  <Label htmlFor="pain-points" className="text-base font-semibold text-gray-900 mb-3 block">Pain Points & Challenges</Label>
                  <Textarea
                    id="pain-points"
                    placeholder="What are the biggest challenges they face that your Instagram content can solve?"
                    className="bg-white/80 border-gray-200"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="desires" className="text-base font-semibold text-gray-900 mb-3 block">Goals & Aspirations</Label>
                  <Textarea
                    id="desires"
                    placeholder="What are their deepest desires and aspirations that your content can help achieve?"
                    className="bg-white/80 border-gray-200"
                    rows={4}
                  />
                </div>

                <Button className="w-full h-14 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white text-lg font-semibold shadow-xl">
                  <Target size={20} className="mr-3" />
                  Generate Instagram Audience Insights
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Persona Display & Tips */}
          <div className="w-full xl:w-96 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <Users className="text-[#2563eb]" size={20} />
                  <span>Target Audience Profile</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Instagram className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instagram-Savvy Millennial</h3>
                <p className="text-sm text-gray-600 mb-6">
                  A digitally-native individual who uses Instagram for inspiration, entertainment, and discovery. Values authenticity and visual storytelling.
                </p>
                
                <div className="space-y-4 text-left">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-1">📊 Demographics</h4>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li><strong>Age:</strong> 25-34</li>
                      <li><strong>Gender:</strong> Female (60%), Male (40%)</li>
                      <li><strong>Location:</strong> Urban areas, English-speaking countries</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-1">📱 Instagram Behavior</h4>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li><strong>Active hours:</strong> 7-9 AM, 6-9 PM</li>
                      <li><strong>Preferred content:</strong> Stories, Reels, Carousels</li>
                      <li><strong>Engagement style:</strong> Saves helpful content</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <TrendingUp className="text-[#38b6ff]" size={20} />
                  <span>Content Strategy Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-700 space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h5 className="font-semibold text-yellow-800 mb-1">🎯 Content Pillars</h5>
                    <p className="text-yellow-700 text-xs">Educational (40%), Entertainment (30%), Behind-the-scenes (20%), Promotional (10%)</p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h5 className="font-semibold text-purple-800 mb-1">📅 Posting Schedule</h5>
                    <p className="text-purple-700 text-xs">Monday/Wednesday/Friday at 8 AM, Tuesday/Thursday at 7 PM for optimal engagement</p>
                  </div>
                  
                  <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <h5 className="font-semibold text-pink-800 mb-1">🎨 Visual Style</h5>
                    <p className="text-pink-700 text-xs">Clean, bright aesthetics with consistent brand colors. Use lifestyle photography and infographics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <Eye className="text-green-600" size={20} />
                  <span>Audience Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-700 space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">💡 Key Insight</h5>
                    <p className="text-blue-700 text-xs">
                      Your audience craves authentic, relatable content over polished perfection. 
                      Show the journey, not just the destination.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-2">🚀 Growth Opportunity</h5>
                    <p className="text-green-700 text-xs">
                      Educational carousel posts have 3x higher save rates. 
                      Create "swipe-worthy" content that provides quick value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 