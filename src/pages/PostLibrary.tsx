import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  Filter,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  MoreHorizontal,
  FileText,
  Sparkles,
  Plus
} from "lucide-react";

const PostLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  // Mock data for posts
  const posts = [
    {
      id: 1,
      type: "Post Writing",
      title: "5 Instagram Growth Strategies That Actually Work",
      content: "Growing on Instagram isn't about follower count anymore. It's about building genuine connections with your audience...",
      date: "2024-12-10",
      engagement: { likes: 1247, comments: 89, shares: 156 },
      status: "published",
      performance: "high"
    },
    {
      id: 2,
      type: "Script Writing",
      title: "How to Create Viral Reels (Hook + Script)",
      content: "HOOK: 'I gained 10K followers in 30 days using this simple strategy...' SCRIPT: Start with a problem your audience faces...",
      date: "2024-12-08",
      engagement: { likes: 2341, comments: 234, shares: 445 },
      status: "published",
      performance: "viral"
    },
    {
      id: 3,
      type: "Lead Magnet",
      title: "Instagram Content Calendar Template",
      content: "A 30-day content calendar specifically designed for Instagram growth. Includes post ideas, optimal timing...",
      date: "2024-12-05",
      engagement: { likes: 892, comments: 67, shares: 123 },
      status: "draft",
      performance: "medium"
    },
    {
      id: 4,
      type: "Post Writing",
      title: "Behind the Scenes: My Content Creation Process",
      content: "People always ask me how I create content consistently. Here's my exact process from idea to published post...",
      date: "2024-12-03",
      engagement: { likes: 567, comments: 45, shares: 78 },
      status: "scheduled",
      performance: "medium"
    }
  ];

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "viral":
        return <Badge className="bg-green-100 text-green-800">🔥 Viral</Badge>;
      case "high":
        return <Badge className="bg-blue-100 text-blue-800">📈 High</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">📊 Medium</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">📉 Low</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">✅ Published</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800">⏰ Scheduled</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">📝 Draft</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
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
              <FileText className="h-4 w-4 text-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-sm font-semibold">Content Library & Analytics</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="block text-gray-900">Your Content</span>
            <span className="block bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Library</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Manage all your Instagram content in one place. Track performance, organize posts, and discover what works best.
            <span className="block mt-2 font-semibold text-gray-900">Your content empire, organized and optimized.</span>
          </p>
        </div>

        {/* Controls Section */}
        <div className="max-w-7xl mx-auto relative z-10">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      placeholder="Search your content..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 bg-white/80 border-gray-200"
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex gap-3">
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger className="w-48 h-12 bg-white/80 border-gray-200">
                        <Filter size={16} className="mr-2" />
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="post">Post Writing</SelectItem>
                        <SelectItem value="script">Script Writing</SelectItem>
                        <SelectItem value="lead-magnet">Lead Magnet</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48 h-12 bg-white/80 border-gray-200">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="performance">Best Performing</SelectItem>
                        <SelectItem value="engagement">Most Engaging</SelectItem>
                        <SelectItem value="alphabetical">Alphabetical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white shadow-lg">
                  <Plus size={16} className="mr-2" />
                  Create New Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-[#2563eb]/10 text-[#2563eb]">{post.type}</Badge>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal size={16} />
                    </Button>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.content}
                  </p>

                  {/* Performance & Status */}
                  <div className="flex gap-2 flex-wrap">
                    {getPerformanceBadge(post.performance)}
                    {getStatusBadge(post.status)}
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{post.engagement.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        <span>{post.engagement.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 size={14} />
                        <span>{post.engagement.shares}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                      <Eye size={14} className="mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto relative z-10 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
                <div className="text-sm text-gray-600">Total Posts</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">5.2K</div>
                <div className="text-sm text-gray-600">Total Likes</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">435</div>
                <div className="text-sm text-gray-600">Comments</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
                <div className="text-sm text-gray-600">Viral Posts</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLibrary; 