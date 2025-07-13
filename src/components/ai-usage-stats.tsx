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
    <Card>
      <CardHeader>
        <CardTitle>AI Usage This Month</CardTitle>
        <CardDescription>Your AI assistant activity and limits</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {aiStats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-1 rounded ${stat.color}`}>
                    <Icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">{stat.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {stat.value}/{stat.limit}
                </span>
              </div>
              <Progress value={stat.percentage} className="h-2" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
