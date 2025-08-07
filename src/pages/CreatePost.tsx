import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Lightbulb, TrendingUp, Copy, Download, Share2, CheckCircle } from "lucide-react";
import { OpenAIService, type TopicSuggestion, type GeneratedPost } from "@/lib/openai";
import { toast } from "sonner";

const CreatePost = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTone, setSelectedTone] = useState("");
  const [topicMode, setTopicMode] = useState<"custom" | "ai">("custom");
  const [customTopic, setCustomTopic] = useState("lead magnet linkedin posts");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingPost, setIsGeneratingPost] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<TopicSuggestion[]>([]);
  const [generatedPost, setGeneratedPost] = useState<GeneratedPost | null>(null);
  const [showGeneratedPost, setShowGeneratedPost] = useState(false);
  const [additionalInstructions, setAdditionalInstructions] = useState("");
  const [isRegenerating, setIsRegenerating] = useState(false);

  const postCategories = [
    "Any",
    "Professional advice",
    "Explanation & analysis",
    "Personal story",
    "Personal opinion",
    "Case study - client",
    "Case study - personal",
    "List of tips"
  ];

  const postTones = [
    "Standard (authoritative)",
    "Descriptive",
    "Casual",
    "Narrative",
    "Humorous"
  ];

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

  const generateLinkedInPost = async () => {
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
      const post = await OpenAIService.generateLinkedInPost(
        selectedCategory,
        topicToUse,
        selectedTone
      );
      setGeneratedPost(post);
      setShowGeneratedPost(true);
      toast.success("LinkedIn post generated successfully!");
    } catch (error) {
      console.error('Error generating post:', error);
      toast.error("Failed to generate post. Please try again.");
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
      toast.success("Post regenerated with your instructions!");
    } catch (error) {
      console.error('Error regenerating post:', error);
      toast.error("Failed to regenerate post. Please try again.");
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
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Post</h1>
        </div>

        {/* Form Sections */}
        <div className="space-y-8 max-w-2xl">
          {/* Post Category Section */}
          <div>
            <Label htmlFor="category" className="text-base font-medium text-gray-900 mb-3 block">
              Post Category
            </Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose an option..." />
              </SelectTrigger>
              <SelectContent>
                {postCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Topic Section */}
          <div>
            <Label className="text-base font-medium text-gray-900 mb-3 block">
              Topic
            </Label>
            
            {/* Topic Mode Buttons */}
            <div className="flex space-x-4 mb-4">
              <Button
                variant={topicMode === "custom" ? "default" : "outline"}
                onClick={() => handleTopicModeChange("custom")}
                className={topicMode === "custom" ? "bg-[#C3BEEF] hover:bg-[#B8B3E6]" : ""}
              >
                Custom Topic
              </Button>
              <Button
                variant={topicMode === "ai" ? "default" : "outline"}
                onClick={() => handleTopicModeChange("ai")}
                className={`${topicMode === "ai" ? "bg-[#C3BEEF] hover:bg-[#B8B3E6]" : ""} flex items-center space-x-2`}
                disabled={!selectedCategory}
              >
                <Sparkles size={16} />
                <span>Ask AI</span>
              </Button>
            </div>

            {/* Custom Topic Input */}
            {topicMode === "custom" && (
              <div className="space-y-3">
                <Input
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="lead magnet linkedin posts"
                  className="w-full"
                />
                <p className="text-sm text-gray-600">
                  Provide a brief topic idea here. Your choice in the post category is factored in when the ideas are generated. 
                  Leave the box blank for the AI to decide.
                </p>
                <Button
                  onClick={generateAITopics}
                  disabled={isGenerating || !selectedCategory}
                  className="bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    "Generate Ideas"
                  )}
                </Button>
              </div>
            )}

            {/* AI Topic Mode */}
            {topicMode === "ai" && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  AI will suggest topics based on your selected category. Click "Ask AI" again to get new suggestions.
                </p>
                {isGenerating && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-4 h-4 border-2 border-[#C3BEEF]/30 border-t-[#C3BEEF] rounded-full animate-spin"></div>
                    <span>Generating AI topics...</span>
                  </div>
                )}
              </div>
            )}

            {/* AI Suggestions */}
            {aiSuggestions.length > 0 && (
              <div className="mt-4">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  AI Suggestions:
                </Label>
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose from AI suggestions..." />
                  </SelectTrigger>
                  <SelectContent>
                    {aiSuggestions.map((suggestion, index) => (
                      <SelectItem key={index} value={suggestion.title}>
                        {suggestion.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Post Tone Section */}
          <div>
            <Label htmlFor="tone" className="text-base font-medium text-gray-900 mb-3 block">
              Post Tone
            </Label>
            <Select value={selectedTone} onValueChange={setSelectedTone}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose an option..." />
              </SelectTrigger>
              <SelectContent>
                {postTones.map((tone) => (
                  <SelectItem key={tone} value={tone}>
                    {tone}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Generate Post Button */}
          <Button 
            onClick={generateLinkedInPost}
            disabled={isGeneratingPost || !selectedCategory || !selectedTone}
            className="w-full bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white py-3 text-lg font-medium"
          >
            {isGeneratingPost ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Generating Post...
              </>
            ) : (
              "Generate Post"
            )}
          </Button>
        </div>
      </div>

      {/* Right Sidebar - AI Insights Panel */}
      <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <TrendingUp className="text-[#C3BEEF]" size={20} />
              <span>AI Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                4 lead magnets that are crushing it on LinkedIn right now:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>One-page playbooks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Simple, actionable templates your audience can implement to get results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Perfect for busy decision-makers</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Lightbulb className="text-[#81A4F7]" size={20} />
              <span>Pro Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-gray-700">
              <p className="font-medium mb-2">But here's what most people miss...</p>
              <p className="mb-3">
                The lead magnet itself doesn't matter as much as the problem it solves.
              </p>
              <p className="mb-3">
                I've seen terrible PDFs outperform beautiful guides simply because they solved real problems, 
                not created pretty downloads.
              </p>
              <p className="font-medium text-[#C3BEEF]">
                Focus on solving real problems, not creating pretty downloads.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Tell us what you wanted?</h4>
              <Textarea 
                placeholder="Add extra instructions for better results..."
                className="resize-none"
                rows={3}
                value={additionalInstructions}
                onChange={(e) => setAdditionalInstructions(e.target.value)}
              />
              <Button 
                variant="outline" 
                className="w-full border-[#C3BEEF] text-[#C3BEEF] hover:bg-[#C3BEEF] hover:text-white"
                onClick={regenerateWithInstructions}
                disabled={!generatedPost || !additionalInstructions.trim() || isRegenerating}
              >
                {isRegenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#C3BEEF]/30 border-t-[#C3BEEF] rounded-full animate-spin mr-2"></div>
                    Regenerating...
                  </>
                ) : (
                  "Regenerate with extra instructions"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Generated Post Modal */}
      <Dialog open={showGeneratedPost} onOpenChange={setShowGeneratedPost}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={24} />
              <span>Your LinkedIn Post is Ready!</span>
            </DialogTitle>
          </DialogHeader>
          
          {generatedPost && (
            <div className="space-y-6">
              {/* Post Content */}
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Post Content:
                  </Label>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="whitespace-pre-wrap text-sm text-gray-800">
                      {generatedPost.content}
                    </div>
                  </div>
                </div>

                {/* Hashtags */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Hashtags:
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {generatedPost.hashtags.map((hashtag, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#C3BEEF]/20 text-[#C3BEEF]">
                        {hashtag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Call to Action:
                  </Label>
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <p className="text-sm text-gray-800">{generatedPost.callToAction}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t">
                <Button
                  onClick={() => copyToClipboard(`${generatedPost.content}\n\n${generatedPost.callToAction}\n\n${generatedPost.hashtags.join(' ')}`)}
                  className="flex items-center space-x-2"
                  variant="outline"
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
                <Button
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white"
                >
                  <Share2 size={16} />
                  <span>Share to LinkedIn</span>
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