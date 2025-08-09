import { Outlet, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Magnet, 
  FileText, 
  Calendar, 
  Settings, 
  HelpCircle,
  CreditCard,
  Zap
} from "lucide-react";

const MainLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigationItems = [
    {
      name: "Create Content",
      icon: CheckCircle2,
      path: "/app/create-post",
      isActive: currentPath === "/app" || currentPath === "/app/create-post"
    },
    {
      name: "Lead Magnet AI",
      icon: Magnet,
      path: "/app/lead-magnet-ai",
      isActive: currentPath === "/app/lead-magnet" || currentPath === "/app/lead-magnet-ai"
    },
    {
      name: "AI Insights",
      icon: Zap,
      path: "/app/insights",
      isActive: currentPath === "/app/insights"
    },
    {
      name: "Post Library",
      icon: FileText,
      path: "/app/library",
      isActive: currentPath === "/app/library"
    },
    {
      name: "Calendar",
      icon: Calendar,
      path: "/app/calendar",
      isActive: currentPath === "/app/calendar"
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/app/settings",
      isActive: currentPath === "/app/settings"
    },
    {
      name: "Support",
      icon: HelpCircle,
      path: "/app/support",
      isActive: currentPath === "/app/support"
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-blue-200/50 flex flex-col relative">
        {/* Subtle gradient background for sidebar */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#f5faff]/50 to-[#eaf2ff]/30 pointer-events-none" />
        
        {/* Brand Logo */}
        <div className="relative z-10 p-6 border-b border-blue-200/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#38b6ff] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <span className="text-xl font-extrabold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Repic AI</span>
              <p className="text-xs text-gray-500 mt-0.5">Instagram Content Studio</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 overflow-y-auto relative z-10 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      item.isActive
                        ? "bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white shadow-lg"
                        : "text-gray-700 hover:bg-white/70 hover:shadow-md"
                    }`}
                  >
                    <Icon 
                      size={20} 
                      className={`${item.isActive ? "text-white" : "text-gray-500 group-hover:text-[#2563eb]"} transition-colors duration-200`}
                    />
                    <span className={`font-semibold ${item.isActive ? "text-white" : "group-hover:text-gray-900"} transition-colors duration-200`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="relative z-10 p-4 border-t border-blue-200/30">
          {/* Credit Counter */}
          <div className="mb-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-200/30 shadow-sm">
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CreditCard size={16} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">774 credits</p>
                <p className="text-xs text-gray-500">remaining</p>
              </div>
            </div>
          </div>

          {/* Get More Credits Button */}
          <Button 
            className="w-full bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get More Credits
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout; 