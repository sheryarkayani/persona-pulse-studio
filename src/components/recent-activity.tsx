import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Bot, Target, ImageIcon, Calendar } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "content",
    icon: FileText,
    title: "AI generated 5 Instagram posts",
    description: "Based on your brand voice and trending topics",
    time: "2 minutes ago",
    status: "completed",
  },
  {
    id: 2,
    type: "lead",
    icon: Target,
    title: "New lead captured",
    description: "Sarah Johnson downloaded your lead magnet",
    time: "15 minutes ago",
    status: "new",
  },
  {
    id: 3,
    type: "design",
    icon: ImageIcon,
    title: "Brand assets updated",
    description: "Logo variations and color palette refined",
    time: "1 hour ago",
    status: "completed",
  },
  {
    id: 4,
    type: "automation",
    icon: Bot,
    title: "Email sequence triggered",
    description: "Welcome series started for 3 new subscribers",
    time: "2 hours ago",
    status: "active",
  },
  {
    id: 5,
    type: "schedule",
    icon: Calendar,
    title: "Content scheduled",
    description: "12 posts queued for next week across platforms",
    time: "3 hours ago",
    status: "scheduled",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates from your AI assistant and automations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <Badge
                    variant={
                      activity.status === "new"
                        ? "default"
                        : activity.status === "active"
                          ? "secondary"
                          : activity.status === "scheduled"
                            ? "outline"
                            : "secondary"
                    }
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
