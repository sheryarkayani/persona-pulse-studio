import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Magnet, FileText, Video, Database, Settings } from "lucide-react";

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
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Instagram Lead Magnet AI</h1>
          <p className="text-gray-600 mt-2">Create irresistible lead magnets to grow your Instagram audience</p>
        </div>

        {/* Form Sections */}
        <div className="space-y-8 max-w-2xl">
          {/* Type of Resource Section */}
          <div>
            <Label htmlFor="resourceType" className="text-base font-medium text-gray-900 mb-3 block">
              Type of Resource
            </Label>
            <Select value={selectedResourceType} onValueChange={setSelectedResourceType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose an option..." />
              </SelectTrigger>
              <SelectContent>
                {resourceTypes.map((type) => {
                  const Icon = getResourceIcon(type);
                  return (
                    <SelectItem key={type} value={type}>
                      <div className="flex items-center space-x-2">
                        <Icon size={16} />
                        <span>{type}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            {selectedResourceType && (
              <p className="text-sm text-gray-600 mt-2">
                {selectedResourceType === "Info Document" && "Perfect for PDFs, guides, and downloadable resources"}
                {selectedResourceType === "Video masterclass" && "Great for educational content and tutorials"}
                {selectedResourceType === "Content templates" && "Ready-to-use templates for Instagram posts and stories"}
                {selectedResourceType === "Instagram toolkit" && "Complete resource collections and databases"}
                {selectedResourceType === "Growth checklist" && "Step-by-step action plans and checklists"}
              </p>
            )}
          </div>

          {/* Resource Outline Section */}
          <div>
            <Label htmlFor="outline" className="text-base font-medium text-gray-900 mb-3 block">
              Resource Outline
            </Label>
            <p className="text-sm text-gray-600 mb-3">
              Please format the outline like the placeholder below. Be specific about the Instagram value you're providing.
            </p>
            <Textarea
              value={resourceOutline}
              onChange={(e) => setResourceOutline(e.target.value)}
              className="w-full min-h-32"
              rows={8}
            />
          </div>

          {/* CTA Section */}
          <div>
            <Label htmlFor="cta" className="text-base font-medium text-gray-900 mb-3 block">
              CTA (optional)
            </Label>
            <p className="text-sm text-gray-600 mb-3">
              If you do not provide a CTA, the AI will create one optimized for Instagram engagement.
            </p>
            <Textarea
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              placeholder="Download free! Comment 'GROWTH' and I'll send it to your DMs."
              className="w-full"
              rows={3}
            />
          </div>

          {/* Generate Lead Magnet Button */}
          <Button 
            className="w-full bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white py-3 text-lg font-medium"
          >
            Generate Instagram Lead Magnet
          </Button>
        </div>
      </div>

      {/* Right Sidebar - Tips and Examples */}
      <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Magnet className="text-[#C3BEEF]" size={20} />
              <span>Instagram Lead Magnet Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                What makes a great Instagram lead magnet:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Solves a specific Instagram challenge</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Provides immediate actionable value</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Easy to consume on mobile</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Visual and Instagram-friendly format</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Popular Instagram Resource Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-gray-700">
              <div className="mb-3">
                <span className="font-medium">Info Documents:</span> Growth guides, strategy PDFs, content calendars
              </div>
              <div className="mb-3">
                <span className="font-medium">Video Masterclass:</span> Reels tutorials, Live training sessions
              </div>
              <div className="mb-3">
                <span className="font-medium">Content Templates:</span> Post templates, Story templates, caption frameworks
              </div>
              <div className="mb-3">
                <span className="font-medium">Instagram Toolkit:</span> Hashtag lists, content ideas, growth resources
              </div>
              <div>
                <span className="font-medium">Growth Checklist:</span> Daily action plans, optimization checklists
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Example Outlines</h4>
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">For Instagram Growth Guide:</p>
                <p className="mb-3 text-xs bg-white p-2 rounded border">
                  "7-day Instagram growth challenge<br/>
                  - Day 1: Profile optimization secrets<br/>
                  - Day 2: Content that converts followers<br/>
                  - Day 3: Hashtag strategy that works<br/>
                  - Day 4: Stories that drive engagement<br/>
                  - Day 5: Reels for maximum reach<br/>
                  - Day 6: Community building tactics<br/>
                  - Day 7: Analytics and optimization"
                </p>
                
                <p className="font-medium mb-1">For Content Templates:</p>
                <p className="mb-3 text-xs bg-white p-2 rounded border">
                  "30 viral Instagram post templates<br/>
                  - 10 educational carousel templates<br/>
                  - 10 behind-the-scenes story ideas<br/>
                  - 10 engagement-boosting captions<br/>
                  - Bonus: Hashtag research worksheet"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadMagnetAI; 