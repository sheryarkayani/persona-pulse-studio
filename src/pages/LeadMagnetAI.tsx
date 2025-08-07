import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Magnet, FileText, Video, Database, Settings } from "lucide-react";

const LeadMagnetAI = () => {
  const [selectedResourceType, setSelectedResourceType] = useState("");
  const [resourceOutline, setResourceOutline] = useState(`A full guide to creating a killer outbound system.

Includes:
- How to create LinkedIn DMs
- How to write compelling cold email copy
- How to arrive 1000 leads in 60 seconds`);
  const [cta, setCta] = useState("Download & Comment 'EXAMPLE' and I'll send it to you.");

  const resourceTypes = [
    "Info Document",
    "Automation workflow",
    "Video masterclass",
    "Miro board",
    "Database"
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "Info Document": return FileText;
      case "Video masterclass": return Video;
      case "Database": return Database;
      case "Miro board": return Settings;
      default: return FileText;
    }
  };

  return (
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Lead Magnet AI</h1>
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
          </div>

          {/* Resource Outline Section */}
          <div>
            <Label htmlFor="outline" className="text-base font-medium text-gray-900 mb-3 block">
              Resource Outline
            </Label>
            <p className="text-sm text-gray-600 mb-3">
              Please format the outline like the placeholder below.
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
              If you do not provide a CTA, the AI will create one for you.
            </p>
            <Textarea
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              placeholder="Download & Comment 'EXAMPLE' and I'll send it to you."
              className="w-full"
              rows={3}
            />
          </div>

          {/* Generate Lead Magnet Button */}
          <Button 
            className="w-full bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white py-3 text-lg font-medium"
          >
            Generate Lead Magnet
          </Button>
        </div>
      </div>

      {/* Right Sidebar - Tips and Examples */}
      <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Magnet className="text-[#C3BEEF]" size={20} />
              <span>Lead Magnet Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                What makes a great lead magnet:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Solves a specific problem quickly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Provides immediate value</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Easy to consume (under 10 pages)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C3BEEF] mt-1">•</span>
                  <span>Actionable and practical</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Popular Resource Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-gray-700">
              <div className="mb-3">
                <span className="font-medium">Info Documents:</span> PDFs, guides, checklists
              </div>
              <div className="mb-3">
                <span className="font-medium">Video Masterclass:</span> Training videos, webinars
              </div>
              <div className="mb-3">
                <span className="font-medium">Automation Workflow:</span> Process templates, sequences
              </div>
              <div className="mb-3">
                <span className="font-medium">Miro Board:</span> Visual frameworks, mind maps
              </div>
              <div>
                <span className="font-medium">Database:</span> Resource lists, directories
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Example Outlines</h4>
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">For Info Document:</p>
                <p className="mb-3 text-xs bg-white p-2 rounded border">
                  "5-step LinkedIn outreach framework<br/>
                  - Step 1: Profile optimization<br/>
                  - Step 2: Connection strategy<br/>
                  - Step 3: Message templates<br/>
                  - Step 4: Follow-up sequence<br/>
                  - Step 5: Conversion tracking"
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