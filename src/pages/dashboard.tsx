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
      <div className="max-w-none w-full mx-auto space-y-10 min-h-screen pb-16 px-2 md:px-8 bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] relative overflow-x-hidden">
        {/* Subtle mesh/radial gradient background, no harsh floating shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
        </div>
        <div className="relative z-10">
        {/* Stats Cards */}
        <div className="mb-10">
          <StatsCards />
        </div>

        {/* Pill-shaped Tab Bar */}
        <div className="flex gap-2 mb-8">
          <button className="px-5 py-2 rounded-full bg-white shadow text-blue-600 font-semibold border border-blue-100 hover:bg-blue-50 transition" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Overview</button>
          <button className="px-5 py-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Content</button>
          <button className="px-5 py-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Audience</button>
          <button className="px-5 py-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Leads</button>
          <button className="px-5 py-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Automation</button>
        </div>

        {/* Quick Actions Row */}
        <div className="flex flex-wrap gap-3 items-center mb-10">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white font-semibold shadow-lg hover:scale-105 transition-transform" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}><Plus className="w-4 h-4" /> Add Post</button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-blue-600 font-semibold border border-blue-100 shadow hover:bg-blue-50 transition" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}><Download className="w-4 h-4" /> Export Data</button>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-10">
          <section className="overflow-hidden rounded-3xl shadow-2xl bg-white p-10 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <span className="font-extrabold text-blue-700 text-xl" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Content Performance</span>
            </div>
            <ContentPerformanceChart />
          </section>
          <section className="overflow-hidden rounded-3xl shadow-2xl bg-white p-10 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-fuchsia-500" />
              <span className="font-extrabold text-fuchsia-700 text-xl" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Engagement</span>
            </div>
            <EngagementChart />
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-10">
          <section className="overflow-hidden rounded-3xl shadow-2xl bg-white p-10 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="font-extrabold text-purple-700 text-xl" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Lead Generation</span>
            </div>
            <LeadGenerationChart />
          </section>
          <section className="overflow-hidden rounded-3xl shadow-2xl bg-white p-10 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <span className="font-extrabold text-blue-700 text-xl" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Social Metrics</span>
            </div>
            <SocialMediaMetrics />
          </section>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 mb-10">
          <section className="overflow-hidden rounded-3xl shadow-2xl bg-white p-10 flex flex-col lg:col-span-2">
            <RecentActivity />
          </section>
          <div className="flex flex-col gap-8">
            <section className="overflow-hidden rounded-3xl shadow-2xl bg-white p-10 flex flex-col">
              <AIUsageStats />
            </section>
            <section className="overflow-hidden rounded-3xl shadow-2xl bg-white p-10 flex flex-col">
              <CompetitorInsights />
            </section>
          </div>
        </div>

        <section className="overflow-hidden rounded-3xl shadow-2xl bg-white p-10 flex flex-col mb-10">
          <ContentCalendar />
        </section>
        </div>
      </div>
    </DashboardLayout>
  )
}
