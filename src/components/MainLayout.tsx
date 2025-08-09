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
  BarChart3,
  Zap,
  Users,
  Shuffle,
  LayoutGrid
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
      name: "Dashboard",
      icon: BarChart3,
      path: "/app/dashboard",
      isActive: currentPath === "/app/dashboard"
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
      name: "Templates",
      icon: LayoutGrid,
      path: "/app/templates",
      isActive: currentPath === "/app/templates"
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
      name: "Integrations",
      icon: Shuffle,
      path: "/app/integrations",
      isActive: currentPath === "/app/integrations"
    },
    {
      name: "Community",
      icon: Users,
      path: "/app/community",
      isActive: currentPath === "/app/community"
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
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Brand Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#C3BEEF] to-[#81A4F7] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Repic AI</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Instagram Content Studio</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                      item.isActive
                        ? "bg-[#C3BEEF] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon 
                      size={20} 
                      className={item.isActive ? "text-white" : "text-gray-500"}
                    />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          {/* Credit Counter */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CreditCard size={16} />
              <span>774 credits remaining</span>
            </div>
          </div>

          {/* Get More Credits Button */}
          <Button 
            className="w-full bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
          >
            Get more Credits
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout; 