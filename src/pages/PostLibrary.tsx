import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Copy, 
  Download, 
  Trash2, 
  Edit, 
  Search, 
  Filter,
  Calendar,
  Eye,
  MoreHorizontal
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PostLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const mockPosts = [
    {
      id: 1,
      title: "How to create a LinkedIn lead magnet that converts",
      category: "Professional advice",
      tone: "Standard (authoritative)",
      dateCreated: "2024-01-15",
      status: "Published",
      engagement: "245 likes, 32 comments"
    },
    {
      id: 2,
      title: "5 types of lead magnets crushing it on LinkedIn",
      category: "List of tips",
      tone: "Casual",
      dateCreated: "2024-01-14",
      status: "Draft",
      engagement: "N/A"
    },
    {
      id: 3,
      title: "My journey from 0 to 10k LinkedIn followers",
      category: "Personal story",
      tone: "Narrative",
      dateCreated: "2024-01-13",
      status: "Scheduled",
      engagement: "N/A"
    },
    {
      id: 4,
      title: "Case study: How I generated 137 leads in 30 days",
      category: "Case study - personal",
      tone: "Descriptive",
      dateCreated: "2024-01-12",
      status: "Published",
      engagement: "189 likes, 28 comments"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-100 text-green-800";
      case "Draft": return "bg-gray-100 text-gray-800";
      case "Scheduled": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Post Library</h1>
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Copy size={16} />
              <span>Copy</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Download size={16} />
              <span>Download</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 text-red-600 hover:text-red-700">
              <Trash2 size={16} />
              <span>Delete</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Edit size={16} />
              <span>Edit</span>
            </Button>
          </div>

          <div className="flex space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>

            {/* Filter */}
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-48">
                <div className="flex items-center space-x-2">
                  <Filter size={16} />
                  <SelectValue placeholder="Filter by..." />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Posts</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Drafts</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="professional">Professional advice</SelectItem>
                <SelectItem value="personal">Personal story</SelectItem>
                <SelectItem value="tips">List of tips</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6">
          {mockPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.tone}</span>
                      <span>•</span>
                      <span>{post.dateCreated}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(post.status)}>
                      {post.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    {post.engagement !== "N/A" ? (
                      <span>{post.engagement}</span>
                    ) : (
                      <span className="text-gray-400">No engagement data</span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>View</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-1">
                      <Edit size={14} />
                      <span>Edit</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>Schedule</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="px-8">
            Load More Posts
          </Button>
        </div>
      </div>

      {/* Right Sidebar - User Activity */}
      <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Activity Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm">
              <p className="text-gray-600 mb-2">6 months ago:</p>
              <p className="font-medium text-gray-900 mb-4">
                I worked 84 hours/week and made $4,000/month.
              </p>
              
              <p className="text-gray-600 mb-2">Today:</p>
              <p className="font-medium text-gray-900">
                I work 25 hours/week and make $15,000/month using automated content systems.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Published "Lead magnet guide"</span>
                <span className="text-gray-500 text-xs">2h ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Scheduled 3 posts for tomorrow</span>
                <span className="text-gray-500 text-xs">4h ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Generated new lead magnet</span>
                <span className="text-gray-500 text-xs">1d ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Created 5 new posts</span>
                <span className="text-gray-500 text-xs">2d ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Performance Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Posts</span>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Published</span>
                <span className="font-semibold">32</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg. Engagement</span>
                <span className="font-semibold">156 interactions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Best Performing</span>
                <span className="font-semibold text-green-600">Professional advice</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostLibrary; 