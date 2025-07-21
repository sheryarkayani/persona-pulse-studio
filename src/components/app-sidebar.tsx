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
  ChevronDown,
  Circle,
  Shuffle,
  MessageCircle,
  Kanban,
  LayoutGrid,
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
import React, { useState } from "react"
import { useLocation } from "react-router-dom"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    color: "text-blue-500",
  },
  {
    title: "AI Insights",
    url: "/insights",
    icon: Target,
    color: "text-orange-500",
  },
  {
    title: "Content Creation",
    url: "/content-creation",
    icon: FileText,
    color: "text-green-500",
  },
  {
    title: "Workflows",
    url: "/workflows",
    icon: Kanban,
    color: "text-violet-500",
    hasSubItems: true,
    subItems: [
      {
        title: "Plug n Play",
        url: "/templates",
        icon: LayoutGrid,
        color: "text-cyan-500",
      },
      {
        title: "Client Management",
        url: "/workflow",
        icon: Users,
        color: "text-purple-500",
      }
    ]
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
    title: "Follower Chat",
    url: "/follower-chat",
    icon: MessageSquare,
    color: "text-pink-500",
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    color: "text-gray-500",
  },
]

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const location = useLocation()

  const isActiveItem = (item: any) => {
    if (item.hasSubItems) {
      // Check if the current path is the parent path OR any of the sub-item paths
      return location.pathname === item.url || item.subItems?.some((subItem: any) => location.pathname === subItem.url)
    }
    return location.pathname === item.url
  }

  const toggleExpanded = (itemTitle: string) => {
    setExpandedItems(prev => 
      prev.includes(itemTitle) 
        ? prev.filter(item => item !== itemTitle)
        : [...prev, itemTitle]
    )
  }

  const isExpanded = (itemTitle: string) => expandedItems.includes(itemTitle)

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
                const isActive = isActiveItem(item)
                const expanded = isExpanded(item.title)
                
                return (
                  <React.Fragment key={item.title}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild={!item.hasSubItems}
                        isActive={isActive && !item.hasSubItems}
                        className={`group flex items-center gap-3 rounded-2xl px-4 py-3 my-1 transition-all duration-200 text-base font-semibold ${isActive && !item.hasSubItems ? "bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white shadow-xl" : "bg-white hover:bg-blue-50/60 hover:shadow-md text-gray-900"} ${collapsed ? 'justify-center px-0' : ''}`}
                        style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                      >
                        {item.hasSubItems ? (
                          <button 
                            className="flex items-center gap-3 w-full"
                            onClick={() => !collapsed && toggleExpanded(item.title)}
                          >
                            <Icon className={`h-6 w-6 ${item.color} group-hover:scale-110 group-hover:drop-shadow transition-transform duration-200`} />
                            {!collapsed && (
                              <>
                                <span className="font-semibold text-base flex-1 text-left" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{item.title}</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                              </>
                            )}
                          </button>
                        ) : (
                          <a href={item.url} className="flex items-center gap-3 w-full">
                            <Icon className={`h-6 w-6 ${item.color} group-hover:scale-110 group-hover:drop-shadow transition-transform duration-200`} />
                            {!collapsed && <span className={`font-semibold text-base ${isActive ? 'text-white' : ''}`} style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{item.title}</span>}
                          </a>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    {/* Accordion sub-menu */}
                    {item.hasSubItems && expanded && !collapsed && (
                      <div className="pl-8 pr-2 pt-0 pb-1">
                        {item.subItems.map((subItem) => {
                          const SubIcon = subItem.icon
                          const isSubActive = location.pathname === subItem.url
                          
                          return (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton
                                asChild
                                isActive={isSubActive}
                                className={`group flex items-center gap-3 rounded-xl px-4 py-2 my-1 transition-all duration-200 text-sm font-medium ${isSubActive ? "bg-blue-100 text-blue-700 shadow-inner" : "hover:bg-blue-50/60 text-gray-600"}`}
                                style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                              >
                                <a href={subItem.url} className="flex items-center gap-3 w-full">
                                  <SubIcon className={`h-5 w-5 ${subItem.color}`} />
                                  <span className={`font-medium text-sm`} style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                                    {subItem.title}
                                  </span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          )
                        })}
                      </div>
                    )}
                  </React.Fragment>
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
