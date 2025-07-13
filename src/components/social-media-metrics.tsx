import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    followers: "12.4K",
    growth: "+8.2%",
    engagement: 4.8,
    posts: 45,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    followers: "8.7K",
    growth: "+12.1%",
    engagement: 3.2,
    posts: 28,
    color: "bg-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    followers: "3.2K",
    growth: "+5.4%",
    engagement: 2.1,
    posts: 67,
    color: "bg-sky-500",
  },
  {
    name: "YouTube",
    icon: Youtube,
    followers: "1.8K",
    growth: "+15.3%",
    engagement: 6.4,
    posts: 12,
    color: "bg-red-600",
  },
]

export function SocialMediaMetrics() {
  return (
    <Card className="bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] shadow-2xl rounded-3xl border-0 p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Social Media Performance</CardTitle>
        <CardDescription className="text-base text-gray-600 mt-1" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Your presence across different platforms</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-2">
        {platforms.map((platform) => {
          const Icon = platform.icon
          return (
            <div key={platform.name} className="flex items-center justify-between p-4 rounded-2xl bg-white/90 shadow-md">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${platform.color} shadow-lg`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{platform.name}</div>
                  <div className="text-sm text-gray-500">{platform.followers} followers</div>
                </div>
              </div>
              <div className="text-right space-y-1">
                <Badge variant="secondary" className="font-semibold text-blue-700 bg-blue-50 border-0 px-3 py-1 rounded-full">{platform.growth}</Badge>
                <div className="text-sm text-gray-500">{platform.engagement}% engagement</div>
                <Progress value={platform.engagement * 10} className="w-20 h-1 bg-blue-100" />
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
