import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Bot, Zap, Clock, Target } from "lucide-react"

const aiStats = [
  {
    title: "Content Generated",
    value: "1,247",
    limit: "2,000",
    percentage: 62,
    icon: Bot,
    color: "bg-blue-500",
  },
  {
    title: "AI Automations",
    value: "23",
    limit: "50",
    percentage: 46,
    icon: Zap,
    color: "bg-purple-500",
  },
  {
    title: "Time Saved",
    value: "127h",
    limit: "200h",
    percentage: 64,
    icon: Clock,
    color: "bg-green-500",
  },
  {
    title: "Lead Magnets",
    value: "8",
    limit: "15",
    percentage: 53,
    icon: Target,
    color: "bg-orange-500",
  },
]

export function AIUsageStats() {
  return (
    <section className="relative py-12 px-2 sm:px-6 bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] rounded-3xl shadow-none">
      {/* Subtle mesh/radial gradient effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
      </div>
      <Card className="relative z-10 rounded-3xl shadow-2xl border-0 p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">AI Usage This Month</span>
          </CardTitle>
          <CardDescription className="text-gray-500">Your AI assistant activity and limits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {aiStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.title} className="space-y-2 bg-white/90 rounded-2xl shadow p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl shadow ${stat.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white drop-shadow" />
                    </div>
                    <span className="text-base font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{stat.title}</span>
                  </div>
                  <span className="text-base text-gray-500 font-semibold">
                    {stat.value}/{stat.limit}
                  </span>
                </div>
                <Progress value={stat.percentage} className="h-2" />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
