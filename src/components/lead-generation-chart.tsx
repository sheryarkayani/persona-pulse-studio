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
    <Card>
      <CardHeader>
        <CardTitle>Lead Generation</CardTitle>
        <CardDescription>Weekly leads captured and conversion rates</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
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
  )
}
