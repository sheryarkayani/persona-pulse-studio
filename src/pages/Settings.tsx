import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  CreditCard, 
  Bell, 
  Link, 
  Download, 
  Upload,
  Palette,
  Globe,
  Shield
} from "lucide-react";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [autoSchedule, setAutoSchedule] = useState(true);

  return (
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account and application preferences</p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="credits">Credits</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="text-[#C3BEEF]" size={20} />
                  <span>Account Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Corp" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Content creator and LinkedIn strategist" className="mt-1" />
                </div>

                <Button className="bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="credits">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="text-[#C3BEEF]" size={20} />
                    <span>Credit Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#C3BEEF]">774</div>
                      <div className="text-sm text-gray-600">Credits Remaining</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">1,250</div>
                      <div className="text-sm text-gray-600">Credits Used This Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">2,024</div>
                      <div className="text-sm text-gray-600">Total Credits Purchased</div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Purchase More Credits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="border-2 hover:border-[#C3BEEF] transition-colors cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold">500</div>
                          <div className="text-sm text-gray-600 mb-2">Credits</div>
                          <div className="text-lg font-semibold">$29</div>
                          <Button variant="outline" className="w-full mt-2">
                            Purchase
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-2 border-[#C3BEEF] bg-[#C3BEEF]/5">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold">1,200</div>
                          <div className="text-sm text-gray-600 mb-2">Credits</div>
                          <div className="text-lg font-semibold">$59</div>
                          <div className="text-xs text-green-600 mb-2">Most Popular</div>
                          <Button className="w-full mt-2 bg-[#C3BEEF] hover:bg-[#B8B3E6]">
                            Purchase
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-2 hover:border-[#C3BEEF] transition-colors cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold">3,000</div>
                          <div className="text-sm text-gray-600 mb-2">Credits</div>
                          <div className="text-lg font-semibold">$129</div>
                          <Button variant="outline" className="w-full mt-2">
                            Purchase
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Link className="text-[#C3BEEF]" size={20} />
                  <span>API Integrations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">IG</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Instagram</h4>
                        <p className="text-sm text-gray-600">Connect your Instagram Business account for direct posting</p>
                      </div>
                    </div>
                    <Button variant="outline">Connect</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">G</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Google Calendar</h4>
                        <p className="text-sm text-gray-600">Sync with Google Calendar for scheduling</p>
                      </div>
                    </div>
                    <Button variant="outline">Connect</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">Z</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Zapier</h4>
                        <p className="text-sm text-gray-600">Automate workflows with Zapier integration</p>
                      </div>
                    </div>
                    <Button variant="outline">Connect</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="text-[#C3BEEF]" size={20} />
                  <span>Notification Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive updates via email</p>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Push Notifications</h4>
                      <p className="text-sm text-gray-600">Receive browser notifications</p>
                    </div>
                    <Switch 
                      checked={pushNotifications} 
                      onCheckedChange={setPushNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Auto-Schedule Reminders</h4>
                      <p className="text-sm text-gray-600">Get notified before posts go live</p>
                    </div>
                    <Switch 
                      checked={autoSchedule} 
                      onCheckedChange={setAutoSchedule}
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Email Frequency</h4>
                  <Select defaultValue="daily">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="real-time">Real-time</SelectItem>
                      <SelectItem value="daily">Daily digest</SelectItem>
                      <SelectItem value="weekly">Weekly summary</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="text-[#C3BEEF]" size={20} />
                  <span>Application Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc-5">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="utc-0">GMT (UTC+0)</SelectItem>
                      <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Data Management</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download size={16} className="mr-2" />
                      Export All Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Upload size={16} className="mr-2" />
                      Import Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                      <Shield size={16} className="mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings; 