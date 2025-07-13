import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const upcomingContent = [
  {
    id: 1,
    title: "5 Personal Branding Tips for Entrepreneurs",
    platform: "Instagram",
    icon: Instagram,
    type: "Carousel",
    scheduledFor: "Today, 2:00 PM",
    status: "scheduled",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "How AI is Transforming Content Creation",
    platform: "LinkedIn",
    icon: Linkedin,
    type: "Article",
    scheduledFor: "Tomorrow, 9:00 AM",
    status: "draft",
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Quick tip: Brand consistency matters",
    platform: "Twitter",
    icon: Twitter,
    type: "Thread",
    scheduledFor: "Tomorrow, 3:00 PM",
    status: "scheduled",
    color: "bg-sky-500",
  },
  {
    id: 4,
    title: "Building Your Personal Brand in 2024",
    platform: "YouTube",
    icon: Youtube,
    type: "Video",
    scheduledFor: "Friday, 10:00 AM",
    status: "in-review",
    color: "bg-red-600",
  },
]

export function ContentCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Content
        </CardTitle>
        <CardDescription>Your scheduled posts and content pipeline</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {upcomingContent.map((content) => {
            const Icon = content.icon
            return (
              <div key={content.id} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
                <div className={`p-2 rounded-lg ${content.color}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <Badge
                  variant={
                    content.status === "scheduled"
                      ? "default"
                      : content.status === "draft"
                        ? "secondary"
                        : content.status === "in-review"
                          ? "outline"
                          : "secondary"
                  }
                  className="text-xs"
                >
                  {content.status}
                </Badge>
                <h4 className="font-medium text-sm mb-2 line-clamp-2">{content.title}</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>
                    {content.platform} • {content.type}
                  </div>
                  <div>{content.scheduledFor}</div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
