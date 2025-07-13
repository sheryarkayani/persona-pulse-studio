import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { ContentPerformanceChart } from "@/components/content-performance-chart"
import { EngagementChart } from "@/components/engagement-chart"
import { LeadGenerationChart } from "@/components/lead-generation-chart"
import { RecentActivity } from "@/components/recent-activity"
import { ContentCalendar } from "@/components/content-calendar"
import { SocialMediaMetrics } from "@/components/social-media-metrics"
import { AIUsageStats } from "@/components/ai-usage-stats"
import { CompetitorInsights } from "@/components/competitor-insights"
import { Plus, Download, BarChart3, PieChart, Users } from "lucide-react"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-none w-full mx-auto space-y-10 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] min-h-screen pb-16 px-2 md:px-8">
        {/* Stats Cards */}
        <div className="mb-10">
          <StatsCards />
        </div>

        {/* Pill-shaped Tab Bar */}
        <div className="flex gap-2 mb-8">
          <button className="px-5 py-2 rounded-full bg-white shadow text-blue-600 font-semibold border border-blue-100 hover:bg-blue-50 transition">Overview</button>
          <button className="px-5 py-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition">Content</button>
          <button className="px-5 py-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition">Audience</button>
          <button className="px-5 py-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition">Leads</button>
          <button className="px-5 py-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition">Automation</button>
        </div>

        {/* Quick Actions Row */}
        <div className="flex flex-wrap gap-3 items-center mb-10">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"><Plus className="w-4 h-4" /> Add Post</button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-blue-600 font-medium border border-blue-100 shadow hover:bg-blue-50 transition"><Download className="w-4 h-4" /> Export Data</button>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-10">
          <section className="overflow-hidden rounded-2xl shadow-lg bg-white p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-blue-700 text-lg">Content Performance</span>
            </div>
            <ContentPerformanceChart />
          </section>
          <section className="overflow-hidden rounded-2xl shadow-lg bg-white p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-fuchsia-500" />
              <span className="font-semibold text-fuchsia-700 text-lg">Engagement</span>
            </div>
            <EngagementChart />
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-10">
          <section className="overflow-hidden rounded-2xl shadow-lg bg-white p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-purple-700 text-lg">Lead Generation</span>
            </div>
            <LeadGenerationChart />
          </section>
          <section className="overflow-hidden rounded-2xl shadow-lg bg-white p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-blue-700 text-lg">Social Metrics</span>
            </div>
            <SocialMediaMetrics />
          </section>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 mb-10">
          <section className="overflow-hidden rounded-2xl shadow-lg bg-white p-8 flex flex-col lg:col-span-2">
            <RecentActivity />
          </section>
          <div className="flex flex-col gap-8">
            <section className="overflow-hidden rounded-2xl shadow-lg bg-white p-8 flex flex-col">
              <AIUsageStats />
            </section>
            <section className="overflow-hidden rounded-2xl shadow-lg bg-white p-8 flex flex-col">
              <CompetitorInsights />
            </section>
          </div>
        </div>

        <section className="overflow-hidden rounded-2xl shadow-lg bg-white p-8 flex flex-col mb-10">
          <ContentCalendar />
        </section>
      </div>
    </DashboardLayout>
  )
}
