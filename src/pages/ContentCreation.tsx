import { DashboardLayout } from "@/components/dashboard-layout";
import { FileText, Sparkles } from "lucide-react";

const ContentCreationPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center p-6">
        <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl mb-6 animate-pulse">
                <FileText className="w-12 h-12 text-white" />
            </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Magic Create is Coming Soon!
            <Sparkles className="w-10 h-10 text-yellow-400 inline-block ml-3 animate-spin" />
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Get ready for a revolutionary way to generate content. Our AI-powered tools will help you create stunning Reels and more with just a few clicks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Magic Reels Generation</h3>
                <p className="text-gray-600">Automated templates that sync your text, images, and video to music or voiceovers, creating engaging Reels in seconds.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Dynamic Content Templates</h3>
                <p className="text-gray-600">Intelligent templates that adapt to user behavior, automatically publishing content at the perfect time for maximum engagement.</p>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContentCreationPage; 