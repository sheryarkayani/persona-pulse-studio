import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Lightbulb, TrendingUp, Copy, Download, Share2, CheckCircle, Video, FileText, Zap } from "lucide-react";
import { OpenAIService, type TopicSuggestion, type GeneratedPost } from "@/lib/openai";
import { toast } from "sonner";

const CreatePost = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTone, setSelectedTone] = useState("");
  const [topicMode, setTopicMode] = useState<"custom" | "ai">("custom");
  const [customTopic, setCustomTopic] = useState("Instagram growth strategies");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingPost, setIsGeneratingPost] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<TopicSuggestion[]>([]);
  const [generatedPost, setGeneratedPost] = useState<GeneratedPost | null>(null);
  const [showGeneratedPost, setShowGeneratedPost] = useState(false);
  const [additionalInstructions, setAdditionalInstructions] = useState("");
  const [isRegenerating, setIsRegenerating] = useState(false);

  const postCategories = [
    "Script Writing",
    "Post Writing", 
    "Lead Magnet"
  ];

  const postTones = [
    "Educational",
    "Entertainment",
    "Inspirational",
    "Behind-the-scenes",
    "Storytelling"
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Script Writing": return Video;
      case "Post Writing": return FileText;
      case "Lead Magnet": return Zap;
      default: return FileText;
    }
  };

  const generateAITopics = async () => {
    if (!selectedCategory) {
      toast.error("Please select a post category first");
      return;
    }

    setIsGenerating(true);
    try {
      const suggestions = await OpenAIService.generateTopicSuggestions(
        selectedCategory,
        topicMode === "custom" ? customTopic : undefined
      );
      setAiSuggestions(suggestions);
      toast.success("AI topics generated successfully!");
    } catch (error) {
      console.error('Error generating topics:', error);
      toast.error("Failed to generate topics. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const generateInstagramPost = async () => {
    if (!selectedCategory) {
      toast.error("Please select a post category");
      return;
    }
    if (!selectedTone) {
      toast.error("Please select a post tone");
      return;
    }

    const topicToUse = selectedTopic || customTopic;
    if (!topicToUse) {
      toast.error("Please provide a topic or select from AI suggestions");
      return;
    }

    setIsGeneratingPost(true);
    try {
      const post = await OpenAIService.generateInstagramPost(
        selectedCategory,
        topicToUse,
        selectedTone
      );
      setGeneratedPost(post);
      setShowGeneratedPost(true);
      toast.success("Instagram content generated successfully!");
    } catch (error) {
      console.error('Error generating post:', error);
      toast.error("Failed to generate content. Please try again.");
    } finally {
      setIsGeneratingPost(false);
    }
  };

  const regenerateWithInstructions = async () => {
    if (!generatedPost || !additionalInstructions.trim()) {
      toast.error("Please provide additional instructions");
      return;
    }

    setIsRegenerating(true);
    try {
      const newPost = await OpenAIService.regenerateWithInstructions(
        generatedPost.content,
        additionalInstructions
      );
      setGeneratedPost(newPost);
      setAdditionalInstructions("");
      toast.success("Content regenerated with your instructions!");
    } catch (error) {
      console.error('Error regenerating post:', error);
      toast.error("Failed to regenerate content. Please try again.");
    } finally {
      setIsRegenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const handleTopicModeChange = (mode: "custom" | "ai") => {
    setTopicMode(mode);
    if (mode === "ai" && selectedCategory) {
      generateAITopics();
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
              <Sparkles className="h-4 w-4 text-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-sm font-semibold">AI-Powered Content Creation</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="block text-gray-900">Create Viral</span>
            <span className="block bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Instagram Content</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Generate engaging Instagram posts, scripts, and lead magnets with AI. 
            <span className="block mt-2 font-semibold text-gray-900">Professional content that drives real engagement.</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto relative z-10">
          {/* Left Side - Main Form */}
          <div className="flex-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Content Generator
                </CardTitle>
                <p className="text-gray-600">Choose your content type and let AI create engaging Instagram content</p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Content Category Section */}
                <div>
                  <Label htmlFor="category" className="text-base font-semibold text-gray-900 mb-4 block">
                    Content Category
                  </Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full h-14 bg-white/80 border-gray-200">
                      <SelectValue placeholder="Choose your content type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {postCategories.map((category) => {
                        const Icon = getCategoryIcon(category);
                        return (
                          <SelectItem key={category} value={category}>
                            <div className="flex items-center space-x-3 py-2">
                              <Icon size={20} className="text-[#2563eb]" />
                              <span className="font-medium">{category}</span>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  {selectedCategory && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800 font-medium">
                        {selectedCategory === "Script Writing" && "✨ Perfect for Instagram Reels and Stories - includes hooks and full scripts"}
                        {selectedCategory === "Post Writing" && "📱 Engaging Instagram posts optimized for feed and carousel content"}
                        {selectedCategory === "Lead Magnet" && "🎯 Content designed to capture leads and grow your Instagram audience"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Topic Section */}
                <div>
                  <Label className="text-base font-semibold text-gray-900 mb-4 block">
                    Content Topic
                  </Label>
                  
                  {/* Topic Mode Buttons */}
                  <div className="flex space-x-4 mb-6">
                    <Button
                      variant={topicMode === "custom" ? "default" : "outline"}
                      onClick={() => handleTopicModeChange("custom")}
                      className={topicMode === "custom" ? "bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb]" : "border-gray-300"}
                    >
                      Custom Topic
                    </Button>
                    <Button
                      variant={topicMode === "ai" ? "default" : "outline"}
                      onClick={() => handleTopicModeChange("ai")}
                      className={`${topicMode === "ai" ? "bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb]" : "border-gray-300"} flex items-center space-x-2`}
                      disabled={!selectedCategory}
                    >
                      <Sparkles size={16} />
                      <span>AI Suggestions</span>
                    </Button>
                  </div>

                  {/* Custom Topic Input */}
                  {topicMode === "custom" && (
                    <div className="space-y-4">
                      <Input
                        value={customTopic}
                        onChange={(e) => setCustomTopic(e.target.value)}
                        placeholder="Instagram growth strategies"
                        className="w-full h-12 bg-white/80 border-gray-200"
                      />
                      <p className="text-sm text-gray-600">
                        Provide your topic idea. Your content category will influence how the AI generates ideas.
                      </p>
                      <Button
                        onClick={generateAITopics}
                        disabled={isGenerating || !selectedCategory}
                        className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white shadow-lg"
                      >
                        {isGenerating ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Generating Ideas...
                          </>
                        ) : (
                          <>
                            <Sparkles size={16} className="mr-2" />
                            Generate Topic Ideas
                          </>
                        )}
                      </Button>
                    </div>
                  )}

                  {/* AI Topic Mode */}
                  {topicMode === "ai" && (
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-sm text-purple-800 font-medium">
                          AI will suggest trending topics based on your selected category. Get fresh ideas instantly!
                        </p>
                      </div>
                      {isGenerating && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                          <div className="w-4 h-4 border-2 border-[#2563eb]/30 border-t-[#2563eb] rounded-full animate-spin"></div>
                          <span>AI is generating topic suggestions...</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* AI Suggestions */}
                  {aiSuggestions.length > 0 && (
                    <div className="mt-6">
                      <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                        🎯 AI Suggestions:
                      </Label>
                      <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                        <SelectTrigger className="w-full h-12 bg-white/80 border-gray-200">
                          <SelectValue placeholder="Choose from AI suggestions..." />
                        </SelectTrigger>
                        <SelectContent>
                          {aiSuggestions.map((suggestion, index) => (
                            <SelectItem key={index} value={suggestion.title}>
                              <div className="py-1">
                                <span className="font-medium">{suggestion.title}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                {/* Content Tone Section */}
                <div>
                  <Label htmlFor="tone" className="text-base font-semibold text-gray-900 mb-4 block">
                    Content Tone
                  </Label>
                  <Select value={selectedTone} onValueChange={setSelectedTone}>
                    <SelectTrigger className="w-full h-14 bg-white/80 border-gray-200">
                      <SelectValue placeholder="Choose your content style..." />
                    </SelectTrigger>
                    <SelectContent>
                      {postTones.map((tone) => (
                        <SelectItem key={tone} value={tone}>
                          <div className="py-2">
                            <span className="font-medium">{tone}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Generate Button */}
                <Button 
                  onClick={generateInstagramPost}
                  disabled={isGeneratingPost || !selectedCategory || !selectedTone}
                  className="w-full h-14 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white text-lg font-semibold shadow-xl"
                >
                  {isGeneratingPost ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Creating Your Content...
                    </>
                  ) : (
                    <>
                      <Zap size={20} className="mr-3" />
                      Generate Instagram Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Tips and Insights */}
          <div className="w-full xl:w-96 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <TrendingUp className="text-[#2563eb]" size={20} />
                  <span>Instagram Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    🔥 Top performing content types:
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start space-x-3 p-2 bg-blue-50 rounded-lg">
                      <span className="text-[#2563eb] mt-1">•</span>
                      <span><strong>Short-form videos (Reels)</strong> - 67% higher engagement</span>
                    </li>
                    <li className="flex items-start space-x-3 p-2 bg-green-50 rounded-lg">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Behind-the-scenes content</strong> - Builds authenticity</span>
                    </li>
                    <li className="flex items-start space-x-3 p-2 bg-purple-50 rounded-lg">
                      <span className="text-purple-600 mt-1">•</span>
                      <span><strong>Educational carousels</strong> - High save rates</span>
                    </li>
                    <li className="flex items-start space-x-3 p-2 bg-orange-50 rounded-lg">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>User-generated content</strong> - Increases trust</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <Lightbulb className="text-[#38b6ff]" size={20} />
                  <span>Pro Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-700 space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="font-semibold mb-2 text-yellow-800">⚡ Algorithm Secrets:</p>
                    <p className="text-yellow-700">The first 3 seconds determine your reach. Strong hooks are essential.</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="font-semibold mb-2 text-green-800">📈 Growth Hack:</p>
                    <p className="text-green-700">Consistency beats perfection. Post regularly and engage authentically.</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-800">🎯 Focus on value, authenticity, and community building.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">✨ Improve Your Content</h4>
                  <Textarea 
                    placeholder="Add extra instructions for better results..."
                    className="resize-none bg-white/80 border-gray-200"
                    rows={3}
                    value={additionalInstructions}
                    onChange={(e) => setAdditionalInstructions(e.target.value)}
                  />
                  <Button 
                    variant="outline" 
                    className="w-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                    onClick={regenerateWithInstructions}
                    disabled={!generatedPost || !additionalInstructions.trim() || isRegenerating}
                  >
                    {isRegenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#2563eb]/30 border-t-[#2563eb] rounded-full animate-spin mr-2"></div>
                        Regenerating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} className="mr-2" />
                        Regenerate with Instructions
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Generated Post Modal */}
      <Dialog open={showGeneratedPost} onOpenChange={setShowGeneratedPost}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white custom-scroll">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-2xl font-bold">
              <CheckCircle className="text-green-500" size={28} />
              <span>Your Instagram Content is Ready!</span>
            </DialogTitle>
          </DialogHeader>
          
          {generatedPost && (
            <div className="space-y-6">
              {/* Hook */}
              {generatedPost.hook && (
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                    🎣 Hook (Opening Line):
                  </Label>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                    <div className="text-sm font-semibold text-gray-800">
                      {generatedPost.hook}
                    </div>
                  </div>
                </div>
              )}

              {/* Post Content */}
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                  📝 Post Content:
                </Label>
                <div className="bg-gray-50 p-4 rounded-xl border">
                  <div className="whitespace-pre-wrap text-sm text-gray-800">
                    {generatedPost.content}
                  </div>
                </div>
              </div>

              {/* Script */}
              {generatedPost.script && (
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                    🎬 Video Script:
                  </Label>
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <div className="whitespace-pre-wrap text-sm text-gray-800">
                      {generatedPost.script}
                    </div>
                  </div>
                </div>
              )}

              {/* Hashtags */}
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                  #️⃣ Hashtags:
                </Label>
                <div className="flex flex-wrap gap-2">
                  {generatedPost.hashtags.map((hashtag, index) => (
                    <Badge key={index} variant="secondary" className="bg-[#2563eb]/10 text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-colors">
                      {hashtag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                  📢 Call to Action:
                </Label>
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <p className="text-sm text-gray-800 font-medium">{generatedPost.callToAction}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t">
                <Button
                  onClick={() => copyToClipboard(`${generatedPost.hook ? generatedPost.hook + '\n\n' : ''}${generatedPost.content}\n\n${generatedPost.callToAction}\n\n${generatedPost.hashtags.join(' ')}`)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white"
                >
                  <Copy size={16} />
                  <span>Copy All</span>
                </Button>
                <Button
                  onClick={() => copyToClipboard(generatedPost.content)}
                  className="flex items-center space-x-2"
                  variant="outline"
                >
                  <Copy size={16} />
                  <span>Copy Content</span>
                </Button>
                {generatedPost.script && (
                  <Button
                    onClick={() => copyToClipboard(generatedPost.script || '')}
                    className="flex items-center space-x-2"
                    variant="outline"
                  >
                    <Video size={16} />
                    <span>Copy Script</span>
                  </Button>
                )}
                <Button
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600"
                >
                  <Share2 size={16} />
                  <span>Share to Instagram</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreatePost; 