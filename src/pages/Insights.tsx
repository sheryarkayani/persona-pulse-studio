
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Insights() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Draft Your Customer Persona</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="age-range">Age Ranges</Label>
                <Select>
                  <SelectTrigger id="age-range">
                    <SelectValue placeholder="Select age range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18-24">18-24</SelectItem>
                    <SelectItem value="25-34">25-34</SelectItem>
                    <SelectItem value="35-44">35-44</SelectItem>
                    <SelectItem value="45-54">45-54</SelectItem>
                    <SelectItem value="55+">55+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Genders</Label>
                <Select>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Locations</Label>
                <Input id="location" placeholder="e.g., India, United States" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pain-points">Pain Points</Label>
                <Textarea
                  id="pain-points"
                  placeholder="What are the biggest challenges they face?"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="desires">Desires</Label>
                <Textarea
                  id="desires"
                  placeholder="What are their deepest desires and aspirations?"
                />
              </div>
              <Button>Provide feedback on customer profile</Button>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Target Customer Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  className=" h-16 w-16 text-gray-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Eco-Conscious Gen Z</h3>
              <p className="text-sm text-gray-500">
                A young and environmentally aware individual interested in
                sustainable fashion and innovative footwear.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Age:</strong> 18-24
                </li>
                <li>
                  <strong>Gender:</strong> Female, Male
                </li>
                <li>
                  <strong>Location:</strong> India
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 