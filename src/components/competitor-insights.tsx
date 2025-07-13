import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const competitors = [
  {
    name: "Alex Marketing",
    followers: "45.2K",
    engagement: "3.2%",
    trend: "up",
    change: "+0.3%",
    posts: 28,
  },
  {
    name: "Brand Builder Pro",
    followers: "32.1K",
    engagement: "4.1%",
    trend: "down",
    change: "-0.2%",
    posts: 35,
  },
  {
    name: "Digital Nomad",
    followers: "28.7K",
    engagement: "2.8%",
    trend: "neutral",
    change: "0.0%",
    posts: 22,
  },
]

export function CompetitorInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitor Analysis</CardTitle>
        <CardDescription>How you stack up against similar creators</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {competitors.map((competitor) => (
          <div key={competitor.name} className="flex items-center justify-between p-2 rounded-lg border">
            <div>
              <div className="font-medium text-sm">{competitor.name}</div>
              <div className="text-xs text-muted-foreground">
                {competitor.followers} • {competitor.posts} posts
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                {competitor.trend === "up" && <TrendingUp className="h-3 w-3 text-green-500" />}
                {competitor.trend === "down" && <TrendingDown className="h-3 w-3 text-red-500" />}
                {competitor.trend === "neutral" && <Minus className="h-3 w-3 text-gray-500" />}
                <span className="text-sm">{competitor.engagement}</span>
              </div>
              <Badge
                variant={
                  competitor.trend === "up" ? "default" : competitor.trend === "down" ? "destructive" : "secondary"
                }
                className="text-xs"
              >
                {competitor.change}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
