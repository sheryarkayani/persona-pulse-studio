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
    <section className="relative py-12 px-2 sm:px-6 bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] rounded-3xl shadow-none">
      {/* Subtle mesh/radial gradient effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
      </div>
      <Card className="relative z-10 rounded-3xl shadow-2xl border-0 p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Competitor Analysis</span>
          </CardTitle>
          <CardDescription className="text-gray-500">How you stack up against similar creators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {competitors.map((competitor) => (
            <div key={competitor.name} className="flex items-center justify-between p-4 rounded-2xl bg-white/90 shadow border-0">
              <div>
                <div className="font-semibold text-base" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{competitor.name}</div>
                <div className="text-xs text-gray-500">
                  {competitor.followers} • {competitor.posts} posts
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-1">
                <div className="flex items-center gap-1">
                  {competitor.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500 bg-gradient-to-tr from-green-400 to-blue-400 rounded-full p-0.5 shadow" />}
                  {competitor.trend === "down" && <TrendingDown className="h-4 w-4 text-red-500 bg-gradient-to-tr from-red-400 to-pink-400 rounded-full p-0.5 shadow" />}
                  {competitor.trend === "neutral" && <Minus className="h-4 w-4 text-gray-500 bg-gradient-to-tr from-gray-300 to-gray-100 rounded-full p-0.5 shadow" />}
                  <span className="text-base font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{competitor.engagement}</span>
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#2563eb11] to-[#38b6ff11] border-blue-200/40 shadow-sm backdrop-blur-sm font-semibold capitalize ${competitor.trend === 'up' ? 'text-green-700' : competitor.trend === 'down' ? 'text-red-700' : 'text-gray-500'}`}
                >
                  {competitor.change}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
