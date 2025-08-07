import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Calendar as CalendarIcon,
  Clock,
  Edit,
  Trash2
} from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [dateInput, setDateInput] = useState("4/23/2025");

  // Mock scheduled posts
  const scheduledPosts = [
    {
      id: 1,
      title: "LinkedIn lead magnet strategies",
      date: "2024-01-20",
      time: "09:00",
      status: "scheduled"
    },
    {
      id: 2,
      title: "5 content creation tips",
      date: "2024-01-20",
      time: "14:00",
      status: "scheduled"
    },
    {
      id: 3,
      title: "Personal branding case study",
      date: "2024-01-22",
      time: "11:00",
      status: "scheduled"
    },
    {
      id: 4,
      title: "How to build authority on LinkedIn",
      date: "2024-01-25",
      time: "10:00",
      status: "scheduled"
    }
  ];

  const getPostsForDate = (date: string) => {
    return scheduledPosts.filter(post => post.date === date);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    });
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === currentDate.getMonth() && 
           today.getFullYear() === currentDate.getFullYear();
  };

  const getDateString = (day: number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, day).toISOString().split('T')[0];
  };

  return (
    <div className="flex h-full">
      {/* Main Calendar Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
          <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-[#C3BEEF] to-[#81A4F7] hover:from-[#B8B3E6] hover:to-[#7B9EF5] text-white">
                <Plus size={16} className="mr-2" />
                Schedule Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add to Calendar</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Please enter the date to add to:
                  </label>
                  <Input
                    value={dateInput}
                    onChange={(e) => setDateInput(e.target.value)}
                    placeholder="MM/DD/YYYY"
                  />
                </div>
                
                <div className="border rounded-lg p-4">
                  <CalendarUI
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md"
                  />
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button variant="link" className="text-blue-600">
                    Today
                  </Button>
                  <div className="space-x-2">
                    <Button variant="link" className="text-red-600">
                      Clear
                    </Button>
                    <Button variant="ghost" onClick={() => setShowAddModal(false)}>
                      <span className="mr-2">×</span>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Calendar Header */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="flex justify-between items-center p-4 border-b">
            <Button 
              variant="ghost" 
              onClick={() => navigateMonth('prev')}
              className="p-2"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <h2 className="text-xl font-semibold">{formatDate(currentDate)}</h2>
            
            <Button 
              variant="ghost" 
              onClick={() => navigateMonth('next')}
              className="p-2"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="p-4">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth().map((day, index) => {
                if (day === null) {
                  return <div key={index} className="p-2 h-24"></div>;
                }

                const dateString = getDateString(day);
                const postsForDay = getPostsForDate(dateString);
                const isCurrentDay = isToday(day);

                return (
                  <div 
                    key={day} 
                    className={`p-2 h-24 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer ${
                      isCurrentDay ? 'bg-blue-50 border-blue-200' : 'bg-white'
                    }`}
                  >
                    <div className={`text-sm font-medium mb-1 ${
                      isCurrentDay ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {day}
                    </div>
                    <div className="space-y-1">
                      {postsForDay.slice(0, 2).map(post => (
                        <div 
                          key={post.id}
                          className="text-xs bg-[#C3BEEF] text-white px-2 py-1 rounded truncate"
                        >
                          {post.time} - {post.title.substring(0, 15)}...
                        </div>
                      ))}
                      {postsForDay.length > 2 && (
                        <div className="text-xs text-gray-500">
                          +{postsForDay.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Scheduled Posts */}
      <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Clock className="text-[#C3BEEF]" size={20} />
              <span>Upcoming Posts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scheduledPosts.map(post => (
              <div key={post.id} className="border-l-4 border-[#C3BEEF] pl-4 py-2">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-sm">{post.title}</h4>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" className="p-1">
                      <Edit size={12} />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1 text-red-600">
                      <Trash2 size={12} />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-600">
                  <CalendarIcon size={12} />
                  <span>{post.date}</span>
                  <span>at {post.time}</span>
                </div>
                <Badge variant="secondary" className="mt-1 text-xs">
                  {post.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={16} className="mr-2" />
              Schedule New Post
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <CalendarIcon size={16} className="mr-2" />
              Bulk Schedule
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Clock size={16} className="mr-2" />
              Optimal Times
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar; 