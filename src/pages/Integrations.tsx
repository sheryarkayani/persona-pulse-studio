import { useState } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  MessageCircle,
  Globe,
  Camera,
  Zap,
  Check,
  Plus,
  Settings,
  BarChart3,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Shield,
  Clock,
  Shuffle
} from "lucide-react";

interface Integration {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  isConnected: boolean;
  category: 'social' | 'content' | 'analytics' | 'automation';
  features: string[];
  color: string;
  bgColor: string;
}

const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>(['instagram', 'linkedin']);

  const integrations: Integration[] = [
    // Social Media Platforms
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8" />,
      description: 'Connect your Instagram Business account to auto-post content, stories, and reels.',
      isConnected: true,
      category: 'social',
      features: ['Auto-posting', 'Story scheduling', 'Reel automation', 'Analytics sync'],
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8" />,
      description: 'Share professional content, articles, and build your professional network.',
      isConnected: true,
      category: 'social',
      features: ['Article publishing', 'Professional posts', 'Company page sync', 'Network insights'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'twitter',
      name: 'Twitter / X',
      icon: <Twitter className="w-8 h-8" />,
      description: 'Tweet automatically, engage with your audience, and track trending topics.',
      isConnected: false,
      category: 'social',
      features: ['Auto-tweeting', 'Thread creation', 'Trending analysis', 'Engagement tracking'],
      color: 'text-gray-800',
      bgColor: 'bg-gray-50'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <Facebook className="w-8 h-8" />,
      description: 'Post to your Facebook page and groups, manage events and ads.',
      isConnected: false,
      category: 'social',
      features: ['Page posting', 'Group management', 'Event creation', 'Ad integration'],
      color: 'text-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8" />,
      description: 'Upload videos, manage playlists, and optimize for YouTube SEO.',
      isConnected: false,
      category: 'social',
      features: ['Video uploads', 'SEO optimization', 'Playlist management', 'Analytics'],
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: <MessageCircle className="w-8 h-8" />,
      description: 'Create viral short-form videos and reach younger audiences.',
      isConnected: false,
      category: 'social',
      features: ['Video scheduling', 'Trend analysis', 'Hashtag optimization', 'Growth tracking'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    
    // Content Creation Tools
    {
      id: 'canva',
      name: 'Canva',
      icon: <Camera className="w-8 h-8" />,
      description: 'Design stunning visuals and graphics with AI-powered templates.',
      isConnected: false,
      category: 'content',
      features: ['Template access', 'Brand kit sync', 'Auto-resize', 'Design automation'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'unsplash',
      name: 'Unsplash',
      icon: <Globe className="w-8 h-8" />,
      description: 'Access millions of high-quality stock photos for your content.',
      isConnected: false,
      category: 'content',
      features: ['Photo library', 'AI image search', 'License management', 'Auto-attribution'],
      color: 'text-gray-700',
      bgColor: 'bg-gray-50'
    },
    
    // Analytics & Insights
    {
      id: 'google-analytics',
      name: 'Google Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Track website traffic from your social media campaigns.',
      isConnected: false,
      category: 'analytics',
      features: ['Traffic analysis', 'Conversion tracking', 'Custom reports', 'ROI measurement'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'hootsuite',
      name: 'Hootsuite',
      icon: <Users className="w-8 h-8" />,
      description: 'Enhanced social media management and team collaboration.',
      isConnected: false,
      category: 'analytics',
      features: ['Advanced scheduling', 'Team management', 'Detailed analytics', 'Competitor tracking'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    
    // Automation Tools
    {
      id: 'zapier',
      name: 'Zapier',
      icon: <Zap className="w-8 h-8" />,
      description: 'Connect RepicAI with 5000+ apps and automate your workflows.',
      isConnected: false,
      category: 'automation',
      features: ['Workflow automation', '5000+ app connections', 'Custom triggers', 'Data sync'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'slack',
      name: 'Slack',
      icon: <MessageCircle className="w-8 h-8" />,
      description: 'Get notifications and manage your brand from your team workspace.',
      isConnected: false,
      category: 'automation',
      features: ['Team notifications', 'Content approval', 'Performance alerts', 'Collaboration'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Integrations', icon: <Globe className="w-4 h-4" /> },
    { id: 'social', name: 'Social Media', icon: <Users className="w-4 h-4" /> },
    { id: 'content', name: 'Content Creation', icon: <Camera className="w-4 h-4" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-4 h-4" /> }
  ];

  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  const handleConnect = (integrationId: string) => {
    if (connectedPlatforms.includes(integrationId)) {
      setConnectedPlatforms(prev => prev.filter(id => id !== integrationId));
    } else {
      setConnectedPlatforms(prev => [...prev, integrationId]);
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-2xl mb-6 shadow-lg">
              <Shuffle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              Connect Your Digital World
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              Seamlessly integrate all your favorite platforms and tools. Let RepicAI manage your entire digital presence from one powerful dashboard.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{connectedPlatforms.length}</div>
                <div className="text-sm text-gray-500">Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">{integrations.length - connectedPlatforms.length}</div>
                <div className="text-sm text-gray-500">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm text-gray-500">Automated</div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white shadow-lg scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
                }`}
                style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Integration Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredIntegrations.map((integration) => {
              const isConnected = connectedPlatforms.includes(integration.id);
              
              return (
                <div
                  key={integration.id}
                  className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${integration.bgColor}`}>
                      <div className={integration.color}>
                        {integration.icon}
                      </div>
                    </div>
                    {isConnected && (
                      <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        <Check className="w-4 h-4" />
                        Connected
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    {integration.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    {integration.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {integration.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {integration.features.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{integration.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleConnect(integration.id)}
                    className={`w-full py-3 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isConnected
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white hover:scale-105 shadow-lg'
                    }`}
                    style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                  >
                    {isConnected ? (
                      <>
                        <Settings className="w-4 h-4" />
                        Manage
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Connect
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 mb-12">
            <div className="text-center mb-8">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Why Connect Your Platforms?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Transform your workflow with intelligent automation and seamless cross-platform management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Save Time
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Post to all platforms simultaneously. Schedule weeks of content in minutes, not hours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Better Analytics
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Get unified insights across all platforms. See what works and optimize your strategy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Stay Consistent
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Maintain your brand voice and posting schedule automatically across all channels.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Need Help Setting Up?
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Our team is here to help you connect your platforms and optimize your automation workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg">
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all border border-gray-200">
                  <ExternalLink className="w-4 h-4" />
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Integrations; 