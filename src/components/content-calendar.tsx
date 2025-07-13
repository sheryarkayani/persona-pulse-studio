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
    <section className="relative py-12 px-2 sm:px-6 bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] rounded-3xl shadow-none">
      {/* Subtle mesh/radial gradient effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
      </div>
      <Card className="relative z-10 rounded-3xl shadow-2xl border-0 p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-extrabold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <Calendar className="h-5 w-5 text-[#2563eb]" />
            <span className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Upcoming Content</span>
          </CardTitle>
          <CardDescription className="text-gray-500">Your scheduled posts and content pipeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {upcomingContent.map((content) => {
              const Icon = content.icon
              return (
                <div key={content.id} className="p-5 rounded-2xl bg-white/90 shadow-md border-0 flex flex-col gap-3 items-start transition-transform hover:scale-[1.03]">
                  <div className={`p-3 rounded-xl shadow ${content.color} flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white drop-shadow" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#2563eb11] to-[#38b6ff11] border-blue-200/40 shadow-sm backdrop-blur-sm font-semibold capitalize ${content.status === 'scheduled' ? 'text-blue-700' : content.status === 'draft' ? 'text-gray-500' : content.status === 'in-review' ? 'text-yellow-600' : ''}`}
                  >
                    {content.status}
                  </Badge>
                  <h4 className="font-semibold text-base mb-1 line-clamp-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{content.title}</h4>
                  <div className="space-y-1 text-xs text-gray-500">
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
    </section>
  )
}
