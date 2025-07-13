"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"
import { BarChart3 } from "lucide-react"

const data = [
  { month: "Jan", posts: 45, engagement: 2400, reach: 12000 },
  { month: "Feb", posts: 52, engagement: 2800, reach: 15000 },
  { month: "Mar", posts: 48, engagement: 3200, reach: 18000 },
  { month: "Apr", posts: 61, engagement: 3800, reach: 22000 },
  { month: "May", posts: 55, engagement: 4200, reach: 25000 },
  { month: "Jun", posts: 67, engagement: 4800, reach: 28000 },
]

const chartConfig = {
  posts: {
    label: "Posts",
    color: "#6366f1", // Indigo
    gradient: "url(#posts-gradient)",
  },
  engagement: {
    label: "Engagement",
    color: "#f472b6", // Pink
    gradient: "url(#engagement-gradient)",
  },
  reach: {
    label: "Reach",
    color: "#38bdf8", // Sky
    gradient: "url(#reach-gradient)",
  },
}

export function ContentPerformanceChart() {
  return (
    <Card className="bg-gradient-to-br from-white/90 via-blue-50/80 to-fuchsia-50/80 shadow-xl rounded-2xl border-0">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className="bg-indigo-500/90 p-2 rounded-lg shadow">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <CardTitle className="text-lg font-bold">Content Performance</CardTitle>
          <CardDescription className="text-sm">Your content creation and engagement metrics over time</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="bg-white/80 rounded-xl shadow-inner p-4">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="posts-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.7}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="engagement-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f472b6" stopOpacity={0.7}/>
                  <stop offset="95%" stopColor="#f472b6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="reach-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.7}/>
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#a1a1aa" fontSize={12} />
              <YAxis stroke="#a1a1aa" fontSize={12} />
              <Tooltip />
              <Legend iconType="circle" formatter={(value) => <span className="text-xs text-gray-700 font-semibold">{chartConfig[value]?.label || value}</span>} />
              <Area type="monotone" dataKey="reach" stroke={chartConfig.reach.color} fill={chartConfig.reach.gradient} fillOpacity={1} strokeWidth={3} isAnimationActive={true} />
              <Area type="monotone" dataKey="engagement" stroke={chartConfig.engagement.color} fill={chartConfig.engagement.gradient} fillOpacity={1} strokeWidth={3} isAnimationActive={true} />
              <Area type="monotone" dataKey="posts" stroke={chartConfig.posts.color} fill={chartConfig.posts.gradient} fillOpacity={1} strokeWidth={3} isAnimationActive={true} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
