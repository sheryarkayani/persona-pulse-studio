import { DashboardLayout } from "@/components/dashboard-layout";
import { LayoutGrid } from "lucide-react";

const templates = [
  {
    category: "Lead Generation Templates",
    items: [
      {
        title: "Lead Generation Stories Template",
        description: "Pre-built Instagram stories with call-to-actions (CTAs) like 'Swipe Up,' 'Sign Up,' or 'Learn More,' designed to convert followers into leads. These can be customized to fit the user's brand.",
        image: "/placeholder.svg",
      },
      {
        title: "Lead Capture Forms",
        description: "Integrated forms that are designed to collect basic information like name, email, or phone number directly from social media or landing pages.",
        image: "/placeholder.svg",
      },
      {
        title: "Email Collection Pop-Ups",
        description: "Templates for opt-in pop-ups that appear when a user lands on a page, prompting them to sign up for exclusive offers or content.",
        image: "/placeholder.svg",
      },
      {
        title: "Sales Funnel Templates",
        description: "Ready-to-use funnel designs for guiding users through stages from lead capture to conversion. This includes welcome emails, nurturing email sequences, and closing emails.",
        image: "/placeholder.svg",
      },
      {
        title: "Interactive Polls & Quizzes for Engagement",
        description: "AI-driven polls and quizzes that help segment users based on their preferences, which can be used for lead generation.",
        image: "/placeholder.svg",
      },
    ],
  },
  {
    category: "Content Creation Templates",
    items: [
        {
            title: "Reels & Stories Templates",
            description: "AI-generated Instagram story templates for different objectives—brand awareness, product promotion, or educational content. These can be pre-filled with data from the user’s profile, niche, or business model.",
            image: "/placeholder.svg",
        },
        {
            title: "Post Design Templates",
            description: "Ready-made templates for carousels, single-image posts, and product showcase posts. These will include placeholder text that the AI can auto-fill with product info or campaign messaging.",
            image: "/placeholder.svg",
        },
        {
            title: "AI Video Script Templates",
            description: "AI-driven templates for creating video scripts, which users can adapt for different content types such as promotional videos, tutorials, or social media teasers.",
            image: "/placeholder.svg",
        },
        {
            title: "Caption Templates",
            description: "Pre-written caption templates that align with different social media post types, which can be customized with the AI's content generation features.",
            image: "/placeholder.svg",
        },
    ]
  },
  {
    category: "Sales & Marketing Funnel Templates",
    items: [
        {
            title: "Ready-Made Funnel Templates",
            description: "Pre-built templates for users to easily set up funnels for different stages of the customer journey, such as awareness, consideration, and conversion.",
            image: "/placeholder.svg",
        },
        {
            title: "Automated Email Drip Campaigns",
            description: "Plug-and-play email marketing automation templates that users can adapt for their own needs, from welcome emails to nurturing and closing sales.",
            image: "/placeholder.svg",
        },
        {
            title: "CTA-Driven Funnels",
            description: "Customizable funnels with pre-written calls to action and landing page integrations that automatically push users to take the next step (e.g., book a consultation, buy a product).",
            image: "/placeholder.svg",
        },
    ]
  },
  {
    category: "Invoicing Templates",
    items: [
        {
            title: "Standard Invoicing Templates",
            description: "Templates for creating professional invoices that can be customized with client details and service descriptions, suitable for freelancers and businesses.",
            image: "/placeholder.svg",
        },
        {
            title: "Service-Specific Invoicing",
            description: "Customizable templates for services that require itemized billing, like coaching sessions, product sales, or one-time services.",
            image: "/placeholder.svg",
        },
    ]
  },
  {
    category: "Brand Positioning & Strategy Templates",
    items: [
        {
            title: "Brand Storytelling Templates",
            description: "Templates designed to help users develop their brand narrative, positioning statements, and mission/vision that they can use across marketing channels.",
            image: "/placeholder.svg",
        },
        {
            title: "Competitor Analysis Templates",
            description: "Templates that allow users to input data about their competitors to compare and contrast marketing tactics, customer base, pricing models, and positioning.",
            image: "/placeholder.svg",
        },
    ]
  },
  {
    category: "Customer Profile Templates",
    items: [
        {
            title: "Customer Persona Templates",
            description: "AI-driven templates that generate customer personas based on the user’s target audience, collecting data such as demographics, interests, and purchase behaviors.",
            image: "/placeholder.svg",
        },
        {
            title: "Client Segmentation Templates",
            description: "Templates for segmenting clients into different categories based on their behaviors, interests, or conversion rates.",
            image: "/placeholder.svg",
        },
    ]
  },
  {
    category: "Public Relations & Brand Outreach Templates",
    items: [
        {
            title: "Brand Outreach Emails",
            description: "Pre-written emails that users can customize to outreach to potential brand partners or sponsors for collaborations, guest posts, or influencer partnerships.",
            image: "/placeholder.svg",
        },
        {
            title: "PR Pitch Templates",
            description: "Templates for users to pitch their personal brand to media outlets, journalists, or influencers in their niche.",
            image: "/placeholder.svg",
        },
    ]
  },
  {
    category: "Community Building Templates",
    items: [
        {
            title: "Community Engagement Templates",
            description: "Templates designed to help creators engage their community through posts, questions, surveys, or comments to increase interaction and build a loyal following.",
            image: "/placeholder.svg",
        },
        {
            title: "Collaboration Templates",
            description: "Templates for collaboration requests that users can send to other influencers or creators in their industry for joint campaigns, giveaways, or co-branded content.",
            image: "/placeholder.svg",
        },
    ]
  },
  {
    category: "AI Chatbot Templates",
    items: [
      {
        title: "Automated DM Replies",
        description: "Templates that automatically reply to direct messages from followers with pre-set answers, FAQs, or CTA-driven responses.",
        image: "/placeholder.svg",
      },
      {
        title: "Chatbot Scripts",
        description: "Customizable scripts that allow the AI chatbot to interact with potential leads or customers to gather information, schedule meetings, or answer questions on the user’s behalf.",
        image: "/placeholder.svg",
      },
    ]
  }
];

const TemplatesPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <LayoutGrid className="w-6 h-6 text-white" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Plug & Play Templates</h1>
                <p className="text-gray-600">For lead gen stories, and funnels, etc. Voice AI for instructing the tool to do something it can take actions within software.</p>
                <p className="text-gray-500 text-sm mt-1">DEPENDING ON stage tools accessible like Invoicing Template</p>
            </div>
        </div>

        <div className="space-y-12">
          {templates.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((template) => (
                  <div key={template.title} className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src={template.image} alt={template.title} className="w-full h-48 object-cover"/>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.title}</h3>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TemplatesPage; 