import { TrendingUp, TrendingDown, Users, FileText, Target, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    title: "Total Followers",
    value: 24800,
    display: "24.8K",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    description: "Across all platforms",
    color: "bg-blue-100 text-blue-900 border border-blue-200",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-200",
  },
  {
    title: "Content Created",
    value: 1247,
    display: "1,247",
    change: "+23.1%",
    trend: "up",
    icon: FileText,
    description: "This month",
    color: "bg-green-100 text-green-900 border border-green-200",
    iconColor: "text-green-500",
    iconBg: "bg-green-200",
  },
  {
    title: "Leads Generated",
    value: 342,
    display: "342",
    change: "+8.2%",
    trend: "up",
    icon: Target,
    description: "This month",
    color: "bg-purple-100 text-purple-900 border border-purple-200",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-200",
  },
  {
    title: "Time Saved",
    value: 127,
    display: "127h",
    change: "+15.3%",
    trend: "up",
    icon: Clock,
    description: "Through AI automation",
    color: "bg-orange-100 text-orange-900 border border-orange-200",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-200",
  },
  {
    title: "Engagement Rate",
    value: 4.8,
    display: "4.8%",
    change: "+0.3%",
    trend: "up",
    icon: TrendingUp,
    description: "Avg. across platforms",
    color: "bg-pink-100 text-pink-900 border border-pink-200",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-200",
  },
  {
    title: "Conversion Rate",
    value: 2.4,
    display: "2.4%",
    change: "-0.1%",
    trend: "down",
    icon: TrendingDown,
    description: "Lead to customer",
    color: "bg-teal-100 text-teal-900 border border-teal-200",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-200",
  },
]

function useCountUp(target: number, duration = 1000) {
  const [value, setValue] = useState(0)
  const raf = useRef<number>()
  useEffect(() => {
    let start: number | null = null
    function step(ts: number) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) {
        raf.current = requestAnimationFrame(step)
      } else {
        setValue(target)
      }
    }
    raf.current = requestAnimationFrame(step)
    return () => raf.current && cancelAnimationFrame(raf.current)
  }, [target, duration])
  return value
}

export function StatsCards() {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] rounded-3xl p-6 shadow-2xl">
      {stats.map((stat) => {
        const Icon = stat.icon
        let displayValue: string | number = stat.display
        if (typeof stat.value === "number" && !isNaN(stat.value)) {
          const animatedValue = useCountUp(stat.value, 900)
          if (stat.title === "Total Followers") {
            displayValue = `${(animatedValue / 1000).toFixed(1)}K`
          } else if (stat.title === "Engagement Rate" || stat.title === "Conversion Rate") {
            displayValue = `${animatedValue.toFixed(1)}%`
          } else if (stat.title === "Time Saved") {
            displayValue = `${animatedValue}h`
          } else {
            displayValue = animatedValue.toLocaleString()
          }
        }
        return (
          <div
            key={stat.title}
            className={`flex-1 flex flex-col justify-between rounded-2xl bg-white shadow-xl p-6 min-w-[180px] transition-transform hover:scale-[1.04] hover:shadow-2xl active:scale-100 cursor-pointer border-0`}
            style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-semibold text-gray-700">{stat.title}</div>
              <div className={`rounded-xl ${stat.iconBg} p-3 flex items-center justify-center shadow-md`}>
                <Icon className={`w-7 h-7 ${stat.iconColor}`} />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2 min-w-0">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight truncate max-w-full bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">
                {displayValue}
              </span>
              {stat.trend === "up" && <TrendingUp className="w-5 h-5 text-green-500" />}
              {stat.trend === "down" && <TrendingDown className="w-5 h-5 text-red-500" />}
            </div>
            <div className="flex items-center gap-2 text-base mt-1">
              <span className={`font-bold ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>{stat.change}</span>
              <span className="opacity-80 text-gray-500">{stat.description}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
