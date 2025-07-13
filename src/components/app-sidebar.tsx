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
    title: "Settings",
    url: "#",
    icon: Settings,
    color: "text-gray-500",
  },
]

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sidebar className="bg-gradient-to-b from-white/80 via-blue-50/80 to-fuchsia-100/80 glass-morphism shadow-2xl border-none min-h-screen transition-all duration-300">
      {/* Collapse/Expand Button */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <SidebarHeader className="border-none bg-transparent p-0">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/5e2c30b7-efa0-48d1-8a0a-a1687293f1c5.png"
              alt="Repic AI Logo"
              className="h-10 w-10 rounded-lg bg-white shadow-md"
            />
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-foreground tracking-tight">Repic AI</span>
                <span className="text-xs text-muted-foreground">Personal Branding</span>
              </div>
            )}
          </div>
        </SidebarHeader>
        <button
          className="rounded-full p-1 bg-white/80 shadow hover:bg-blue-100 transition ml-2"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
      <SidebarContent className={`pt-4 transition-all duration-300 ${collapsed ? 'w-20' : 'w-60'}`}>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-semibold tracking-wide uppercase text-xs mb-2 pl-2">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.title === "Dashboard"}
                      className={`group flex items-center gap-3 rounded-full px-3 py-3 my-1 transition-all duration-200 text-base font-medium ${item.title === "Dashboard" ? "bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white shadow-lg" : "hover:bg-blue-100/60 hover:shadow-md"} ${collapsed ? 'justify-center px-0' : ''}`}
                    >
                      <a href={item.url} className="flex items-center gap-3 w-full">
                        <Icon className={`h-6 w-6 ${item.color} group-hover:scale-110 group-hover:drop-shadow transition-transform duration-200`} />
                        {!collapsed && <span className="font-medium text-base">{item.title}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t-0 bg-transparent mt-auto pb-6 px-4">
        <div className={`flex items-center gap-3 rounded-2xl bg-white/80 shadow-lg p-3 ${collapsed ? 'justify-center' : ''}`}>
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
              <span className="text-base font-semibold text-foreground">Javeria</span>
              <span className="text-xs text-muted-foreground">Pro Plan</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
