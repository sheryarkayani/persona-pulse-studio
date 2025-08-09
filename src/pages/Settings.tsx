import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Palette,
  Key,
  Instagram,
  Settings as SettingsIcon,
  Sparkles,
  Save
} from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
  });

  const [profile, setProfile] = useState({
    name: "Alex Thompson",
    email: "alex@example.com",
    bio: "Content creator focused on Instagram growth",
    timezone: "America/New_York",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff]">
      <div className="max-w-none w-full mx-auto space-y-10 pb-16 px-2 md:px-8 relative overflow-x-hidden custom-scroll" style={{ height: 'calc(100vh - 0px)' }}>
        {/* Subtle mesh/radial gradient background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
        </div>

        {/* Header Section */}
        <div className="relative z-10 pt-12 pb-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="backdrop-blur-sm border border-blue-300/30 rounded-full px-6 py-3 flex items-center gap-2 shadow-lg bg-white/70">
              <SettingsIcon className="h-4 w-4 text-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-sm font-semibold">Account & Preferences</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span className="block text-gray-900">Settings &</span>
            <span className="block bg-gradient-to-r from-[#2563eb] to-[#38b6ff] bg-clip-text text-transparent">Preferences</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Customize your Instagram content creation experience and manage your account settings.
            <span className="block mt-2 font-semibold text-gray-900">Everything exactly how you like it.</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto relative z-10">
          {/* Left Side - Settings */}
          <div className="flex-1 space-y-8">
            {/* Profile Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}>
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  <User className="text-[#2563eb]" size={24} />
                  <span>Profile Information</span>
                </CardTitle>
                <p className="text-gray-600">Update your personal information and Instagram details</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold text-gray-900 mb-3 block">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="h-12 bg-white/80 border-gray-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold text-gray-900 mb-3 block">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="h-12 bg-white/80 border-gray-200"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio" className="text-base font-semibold text-gray-900 mb-3 block">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="bg-white/80 border-gray-200"
                    rows={3}
                    placeholder="Tell us about your Instagram content focus..."
                  />
                </div>
                <div>
                  <Label htmlFor="timezone" className="text-base font-semibold text-gray-900 mb-3 block">Timezone</Label>
                  <Select value={profile.timezone} onValueChange={(value) => setProfile({ ...profile, timezone: value })}>
                    <SelectTrigger className="h-12 bg-white/80 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="Europe/London">London (GMT)</SelectItem>
                      <SelectItem value="Europe/Paris">Paris (CET)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}>
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  <Bell className="text-[#38b6ff]" size={24} />
                  <span>Notifications</span>
                </CardTitle>
                <p className="text-gray-600">Manage how you receive updates and alerts</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div>
                    <h4 className="font-semibold text-blue-900">Email Notifications</h4>
                    <p className="text-sm text-blue-700">Receive content updates and insights via email</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <h4 className="font-semibold text-green-900">Push Notifications</h4>
                    <p className="text-sm text-green-700">Get instant alerts for important updates</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div>
                    <h4 className="font-semibold text-purple-900">Marketing Updates</h4>
                    <p className="text-sm text-purple-700">Receive tips, strategies, and product updates</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* API Keys */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.10)' }}>
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-2 text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  <Key className="text-green-600" size={24} />
                  <span>API Configuration</span>
                </CardTitle>
                <p className="text-gray-600">Manage your AI service connections</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="openai-key" className="text-base font-semibold text-gray-900 mb-3 block">OpenAI API Key</Label>
                  <div className="flex space-x-3">
                    <Input
                      id="openai-key"
                      type="password"
                      placeholder="sk-..."
                      className="h-12 bg-white/80 border-gray-200 flex-1"
                    />
                    <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                      Test
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Required for AI content generation. Your key is stored securely and never shared.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Account Info & Integrations */}
          <div className="w-full xl:w-96 space-y-6">
            {/* Account Status */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <CreditCard className="text-[#2563eb]" size={20} />
                  <span>Account Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Plan</h3>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Credits remaining</span>
                    <span className="font-semibold text-gray-900">774</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Next billing</span>
                    <span className="font-semibold text-gray-900">Dec 15, 2024</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Plan price</span>
                    <span className="font-semibold text-gray-900">$29/month</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white">
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>

            {/* Integrations */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <Globe className="text-[#38b6ff]" size={20} />
                  <span>Integrations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instagram</h4>
                      <p className="text-sm text-gray-600">Connect your Instagram Business account</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                    Connect
                  </Button>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800 mb-2">🚀 Coming Soon</h5>
                  <div className="space-y-2 text-sm text-yellow-700">
                    <div>• Facebook Pages integration</div>
                    <div>• TikTok direct posting</div>
                    <div>• Analytics dashboard</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" style={{ boxShadow: '0 8px 48px 0 rgba(37,99,235,0.08)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-bold text-gray-900">
                  <Shield className="text-green-600" size={20} />
                  <span>Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-1">🔒 Account Secured</h5>
                  <p className="text-green-700 text-sm">Two-factor authentication enabled</p>
                </div>
                <Button variant="outline" className="w-full border-gray-300">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full border-gray-300">
                  Download Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Save Button */}
        <div className="max-w-7xl mx-auto relative z-10">
          <Button className="w-full md:w-auto bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white px-8 py-3 text-lg font-semibold shadow-xl">
            <Save size={20} className="mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings; 