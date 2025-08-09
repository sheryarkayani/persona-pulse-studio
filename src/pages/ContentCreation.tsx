import { DashboardLayout } from "@/components/dashboard-layout";
import { FileText, Sparkles, Video, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ContentCreationPage = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center p-6">
        <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl mb-6 animate-pulse">
                <Video className="w-12 h-12 text-white" />
            </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Instagram Content Hub
            <Sparkles className="w-10 h-10 text-yellow-400 inline-block ml-3 animate-spin" />
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Create viral Instagram content with AI-powered tools. Generate posts, scripts, and lead magnets that engage your audience and grow your following.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/app/create-post')}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Post Creation</h3>
                <p className="text-gray-600">Generate engaging Instagram posts, captions, and hashtags optimized for maximum reach and engagement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/app/create-post')}>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Script Writing</h3>
                <p className="text-gray-600">Create compelling scripts for Instagram Reels and Stories with powerful hooks that capture attention.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate('/app/lead-magnet-ai')}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Lead Magnets</h3>
                <p className="text-gray-600">Design irresistible lead magnets to grow your Instagram audience and convert followers into customers.</p>
            </div>
        </div>

        <div className="flex space-x-4">
            <Button 
                onClick={() => navigate('/app/create-post')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-medium"
            >
                Start Creating
            </Button>
            <Button 
                variant="outline"
                onClick={() => navigate('/app/templates')}
                className="border-purple-500 text-purple-500 hover:bg-purple-50 px-8 py-3 text-lg font-medium"
            >
                Browse Templates
            </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContentCreationPage; 