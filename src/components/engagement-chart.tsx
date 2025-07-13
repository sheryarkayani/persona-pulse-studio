"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Clock } from "lucide-react"

const data = [
  { name: "Likes", value: 45, color: "#8b5cf6" }, // Violet
  { name: "Comments", value: 25, color: "#22d3ee" }, // Cyan
  { name: "Shares", value: 20, color: "#f59e42" }, // Orange
  { name: "Saves", value: 10, color: "#f43f5e" }, // Rose
]

export function EngagementChart() {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  return (
    <Card className="bg-gradient-to-br from-white/90 via-fuchsia-50/80 to-blue-50/80 shadow-xl rounded-2xl border-0">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className="bg-fuchsia-500/90 p-2 rounded-lg shadow">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <div>
          <CardTitle className="text-lg font-bold">Engagement</CardTitle>
          <CardDescription className="text-sm">How your audience interacts with your content</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="bg-white/80 rounded-xl shadow-inner p-4 flex flex-col items-center relative">
          <div className="flex flex-col items-center justify-center w-full h-[220px] relative">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            {/* Central label, now flex-centered and always inside the donut */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="text-2xl font-bold text-fuchsia-500">{total}</span>
              <span className="text-xs text-muted-foreground">Total</span>
            </div>
          </div>
          {/* Modern legend */}
          <div className="grid grid-cols-2 gap-2 mt-6 w-full">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm font-semibold text-gray-700">{item.name}</span>
                <span className="text-xs text-gray-400 ml-auto">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
