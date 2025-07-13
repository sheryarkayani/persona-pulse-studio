"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { week: "Week 1", leads: 24, conversions: 6 },
  { week: "Week 2", leads: 32, conversions: 8 },
  { week: "Week 3", leads: 28, conversions: 7 },
  { week: "Week 4", leads: 45, conversions: 12 },
]

const chartConfig = {
  leads: {
    label: "Leads",
    color: "hsl(var(--chart-1))",
  },
  conversions: {
    label: "Conversions",
    color: "hsl(var(--chart-2))",
  },
}

export function LeadGenerationChart() {
  return (
    <section className="relative py-12 px-2 sm:px-6 bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] rounded-3xl shadow-none">
      {/* Subtle mesh/radial gradient effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
      </div>
      <Card className="relative z-10 rounded-3xl shadow-2xl border-0 p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Lead Generation</span>
          </CardTitle>
          <CardDescription className="text-gray-500">Weekly leads captured and conversion rates</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] bg-white/90 rounded-2xl shadow p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="week" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="leads" fill="var(--color-leads)" />
                <Bar dataKey="conversions" fill="var(--color-conversions)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  )
}
