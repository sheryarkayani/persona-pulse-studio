import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  MessageSquare, 
  BookOpen, 
  Video,
  Search,
  Send,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");

  const faqData = [
    {
      question: "How many credits do I get per month?",
      answer: "Credit allocation depends on your subscription plan. Starter plan includes 500 credits, Professional includes 2,000 credits, and Enterprise includes 10,000 credits per month."
    },
    {
      question: "How does the AI content generation work?",
      answer: "Our AI analyzes your input parameters (category, topic, tone) and generates relevant content based on successful LinkedIn post patterns and engagement data."
    },
    {
      question: "Can I schedule posts directly to LinkedIn?",
      answer: "Yes! Connect your LinkedIn account in the Integrations settings to enable direct posting and scheduling to your LinkedIn profile."
    },
    {
      question: "What happens if I run out of credits?",
      answer: "You can purchase additional credits anytime from the Settings > Credits page. Your account won't be suspended, but you'll need credits to generate new content."
    },
    {
      question: "Can I edit generated content before posting?",
      answer: "Absolutely! All generated content can be edited in the Post Library before scheduling or posting. You can also regenerate content with additional instructions."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from Settings > Account. Your access will continue until the end of your current billing period."
    }
  ];

  const documentationLinks = [
    { title: "Getting Started Guide", description: "Learn the basics of using Repic", icon: BookOpen },
    { title: "Content Creation Tutorial", description: "Master the art of AI-powered content", icon: Video },
    { title: "Scheduling & Calendar", description: "Optimize your posting schedule", icon: Clock },
    { title: "Lead Magnet Creation", description: "Build effective lead magnets", icon: MessageSquare },
    { title: "API Documentation", description: "Integrate with third-party tools", icon: ExternalLink },
    { title: "Best Practices", description: "Tips for maximum engagement", icon: CheckCircle }
  ];

  const supportTickets = [
    { id: "T-001", subject: "LinkedIn integration not working", status: "Open", priority: "High", created: "2024-01-20" },
    { id: "T-002", subject: "Credit deduction issue", status: "In Progress", priority: "Medium", created: "2024-01-19" },
    { id: "T-003", subject: "Export feature request", status: "Resolved", priority: "Low", created: "2024-01-18" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-red-100 text-red-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Resolved": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Support</h1>
          <p className="text-gray-600 mt-2">Get help and find answers to your questions</p>
        </div>

        <Tabs defaultValue="faq" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <div className="space-y-6">
              {/* Search FAQ */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search frequently asked questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12"
                />
              </div>

              {/* FAQ Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HelpCircle className="text-[#C3BEEF]" size={20} />
                    <span>Frequently Asked Questions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="text-[#C3BEEF]" size={20} />
                  <span>Contact Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className="mt-1" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    rows={6}
                    className="mt-1"
                    placeholder="Please describe your issue or question in detail..."
                  />
                </div>

                <Button className="bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Other Ways to Reach Us</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📧 Email: support@repic.com</p>
                    <p>💬 Live Chat: Available 9 AM - 6 PM EST</p>
                    <p>📞 Phone: +1 (555) 123-4567</p>
                    <p>⏱️ Response Time: Usually within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="docs">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="text-[#C3BEEF]" size={20} />
                    <span>Documentation & Tutorials</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documentationLinks.map((doc, index) => {
                      const Icon = doc.icon;
                      return (
                        <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                          <div className="flex items-start space-x-3">
                            <Icon className="text-[#C3BEEF] mt-1" size={20} />
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{doc.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                              <div className="flex items-center text-sm text-[#C3BEEF]">
                                <span>Read more</span>
                                <ExternalLink size={14} className="ml-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="aspect-video bg-gray-200 rounded mb-3 flex items-center justify-center">
                        <Video className="text-gray-400" size={48} />
                      </div>
                      <h4 className="font-semibold mb-1">Getting Started with Repic</h4>
                      <p className="text-sm text-gray-600">Learn the basics in 5 minutes</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="aspect-video bg-gray-200 rounded mb-3 flex items-center justify-center">
                        <Video className="text-gray-400" size={48} />
                      </div>
                      <h4 className="font-semibold mb-1">Advanced Content Creation</h4>
                      <p className="text-sm text-gray-600">Master AI-powered content generation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="text-[#C3BEEF]" size={20} />
                  <span>Support Tickets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{ticket.subject}</h4>
                          <p className="text-sm text-gray-600">Ticket ID: {ticket.id}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                          <Badge className={getPriorityColor(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Created: {ticket.created}</span>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {supportTickets.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <AlertCircle size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>No support tickets found</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right Sidebar - Quick Help */}
      <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Quick Help</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Video size={16} className="mr-2" />
              Watch Tutorial Videos
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageSquare size={16} className="mr-2" />
              Start Live Chat
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BookOpen size={16} className="mr-2" />
              Browse Documentation
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Popular Articles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3 text-sm">
              <a href="#" className="block text-[#C3BEEF] hover:underline">
                How to optimize your LinkedIn posts for engagement
              </a>
              <a href="#" className="block text-[#C3BEEF] hover:underline">
                Setting up automatic scheduling
              </a>
              <a href="#" className="block text-[#C3BEEF] hover:underline">
                Creating effective lead magnets
              </a>
              <a href="#" className="block text-[#C3BEEF] hover:underline">
                Understanding credit usage and billing
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-600">
            <p>📧 support@repic.com</p>
            <p>💬 Live Chat Available</p>
            <p>⏱️ Mon-Fri, 9 AM - 6 PM EST</p>
            <p>📞 +1 (555) 123-4567</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support; 