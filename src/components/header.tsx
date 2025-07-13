import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white/80 backdrop-blur-md">
      <SidebarTrigger className="-ml-1" />
      <div className="flex flex-1 items-center gap-2 px-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-transform duration-200 group-focus-within:scale-110 group-focus-within:text-blue-500" />
          <Input
            type="search"
            placeholder="Search content, analytics, leads..."
            className="pl-10 pr-4 py-2 rounded-full bg-white/90 shadow focus:shadow-lg border border-blue-100 focus:border-blue-400 transition-all duration-200 text-base group"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="relative bg-white/90 rounded-full shadow hover:bg-blue-50 transition-all duration-200 w-10 h-10 flex items-center justify-center"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-blue-500" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-pink-500 text-white animate-bounce border-2 border-white shadow-md">3</Badge>
          </Button>
        </div>
      </div>
    </header>
  )
}
