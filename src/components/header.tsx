import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="flex h-20 shrink-0 items-center gap-4 border-b px-8 bg-white/80 backdrop-blur-xl shadow-sm">
      <SidebarTrigger className="-ml-2" />
      <div className="flex flex-1 items-center gap-4 px-2">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-transform duration-200 group-focus-within:scale-110 group-focus-within:text-blue-500" />
          <Input
            type="search"
            placeholder="Search content, analytics, leads..."
            className="pl-14 pr-6 py-3 rounded-2xl bg-white/90 shadow focus:shadow-lg border border-blue-100 focus:border-blue-400 transition-all duration-200 text-base group text-foreground/90 font-medium placeholder:text-muted-foreground/70"
            style={{ fontSize: '1.08rem', letterSpacing: '-0.01em' }}
          />
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="relative bg-white/90 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 w-12 h-12 flex items-center justify-center border border-blue-100 hover:border-blue-300"
            aria-label="Notifications"
            style={{ boxShadow: '0 2px 12px 0 rgba(31,38,135,0.06)' }}
          >
            <Bell className="h-6 w-6 text-blue-500" />
            <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full p-0 text-xs bg-pink-500 text-white animate-bounce border-2 border-white shadow-md font-semibold">3</Badge>
          </Button>
        </div>
      </div>
    </header>
  );
}
