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
    <Card>
      <CardHeader>
        <CardTitle>Social Media Performance</CardTitle>
        <CardDescription>Your presence across different platforms</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {platforms.map((platform) => {
          const Icon = platform.icon
          return (
            <div key={platform.name} className="flex items-center justify-between p-3 rounded-lg border">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${platform.color}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-medium">{platform.name}</div>
                  <div className="text-sm text-muted-foreground">{platform.followers} followers</div>
                </div>
              </div>
              <div className="text-right space-y-1">
                <Badge variant="secondary">{platform.growth}</Badge>
                <div className="text-sm text-muted-foreground">{platform.engagement}% engagement</div>
                <Progress value={platform.engagement * 10} className="w-16 h-1" />
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
