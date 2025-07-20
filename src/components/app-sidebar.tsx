import {
  BarChart3,
  Bot,
  Calendar,
  FileText,
  Home,
  ImageIcon,
  MessageSquare,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  Circle,
  Shuffle,
  MessageCircle,
  Kanban,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    color: "text-blue-500",
  },
  {
    title: "Content Creation",
    url: "#",
    icon: FileText,
    color: "text-green-500",
  },
  {
    title: "AI Assistant",
    url: "#",
    icon: Bot,
    color: "text-fuchsia-500",
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
    color: "text-purple-500",
  },
  {
    title: "Social Media",
    url: "#",
    icon: MessageSquare,
    color: "text-sky-500",
  },
  {
    title: "Lead Generation",
    url: "#",
    icon: Target,
    color: "text-orange-500",
  },
  {
    title: "Brand Design",
    url: "#",
    icon: ImageIcon,
    color: "text-pink-500",
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    color: "text-teal-500",
  },
  {
    title: "Automation",
    url: "#",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Competitors",
    url: "#",
    icon: TrendingUp,
    color: "text-red-500",
  },
  {
    title: "Audience",
    url: "#",
    icon: Users,
    color: "text-cyan-500",
  },
  {
    title: "Integrations",
    url: "/integrations",
    icon: Shuffle,
    color: "text-indigo-500",
  },
  {
    title: "Community",
    url: "/community",
    icon: MessageCircle,
    color: "text-emerald-500",
  },
  {
    title: "Workflow",
    url: "/workflow",
    icon: Kanban,
    color: "text-violet-500",
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    color: "text-gray-500",
  },
]

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sidebar
      className="fixed top-0 left-0 h-screen z-30 bg-gradient-to-b from-white via-[#f5faff] to-[#eaf2ff] shadow-2xl border-none transition-all duration-300 rounded-r-3xl ml-0 w-auto"
      style={{ minWidth: collapsed ? '5rem' : '16rem', maxWidth: collapsed ? '5rem' : '16rem' }}
    >
      {/* Subtle mesh/radial gradient background, no harsh floating shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
      </div>
      {/* Collapse/Expand Button */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2 relative z-10">
        <SidebarHeader className="border-none bg-transparent p-0">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/5e2c30b7-efa0-48d1-8a0a-a1687293f1c5.png"
              alt="Repic AI Logo"
              className="h-10 w-10 rounded-lg bg-white shadow-md object-contain p-1"
            />
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Repic AI</span>
                <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Personal Branding</span>
              </div>
            )}
          </div>
        </SidebarHeader>
        <button
          className="rounded-full p-1 bg-white/80 shadow hover:bg-blue-100 transition ml-2 border border-blue-100"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
      <SidebarContent className={`pt-4 transition-all duration-300 ${collapsed ? 'w-20' : 'w-60'} relative z-10`}>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 font-semibold tracking-wide uppercase text-xs mb-2 pl-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = item.title === "Dashboard"
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`group flex items-center gap-3 rounded-2xl px-4 py-3 my-2 transition-all duration-200 text-base font-semibold ${isActive ? "bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white shadow-xl" : "bg-white hover:bg-blue-50/60 hover:shadow-md text-gray-900"} ${collapsed ? 'justify-center px-0' : ''}`}
                      style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                    >
                      <a href={item.url} className="flex items-center gap-3 w-full">
                        <Icon className={`h-6 w-6 ${item.color} group-hover:scale-110 group-hover:drop-shadow transition-transform duration-200`} />
                        {!collapsed && <span className={`font-semibold text-base ${isActive ? 'bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent' : ''}`} style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{item.title}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t-0 bg-transparent mt-auto pb-6 px-4 relative z-10">
        <div className={`flex items-center gap-3 rounded-2xl bg-white/90 shadow-lg p-4 ${collapsed ? 'justify-center' : ''}`} style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {/* Status indicator */}
            <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-white shadow animate-pulse" />
          </div>
          {!collapsed && (
            <div className="flex flex-col text-left">
              <span className="text-base font-semibold text-gray-900">Javeria</span>
              <span className="text-xs text-gray-400">Pro Plan</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
