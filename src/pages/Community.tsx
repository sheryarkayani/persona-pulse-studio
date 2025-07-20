import { useState } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { 
  MessageSquare, 
  Hash, 
  Users, 
  Volume2, 
  Settings, 
  Plus, 
  Search, 
  Smile, 
  Paperclip, 
  Send, 
  MoreVertical, 
  Crown, 
  Shield, 
  Star, 
  Heart, 
  Sparkles,
  Coffee,
  Lightbulb,
  Trophy,
  Zap,
  Camera,
  Mic,
  PhoneCall,
  UserPlus
} from "lucide-react";

interface Message {
  id: string;
  user: {
    name: string;
    avatar: string;
    role: 'Admin' | 'Moderator' | 'Pro' | 'Member';
    status: 'online' | 'away' | 'offline';
  };
  content: string;
  timestamp: string;
  reactions?: { emoji: string; count: number; }[];
}

interface Channel {
  id: string;
  name: string;
  type: 'text' | 'voice';
  description?: string;
  memberCount?: number;
  unread?: number;
}

const Community = () => {
  const [selectedChannel, setSelectedChannel] = useState<string>('general');
  const [messageInput, setMessageInput] = useState<string>('');
  const [onlineUsers] = useState<number>(247);

  const channels: Channel[] = [
    { id: 'announcements', name: 'announcements', type: 'text', description: 'Important updates from the team', unread: 2 },
    { id: 'general', name: 'general', type: 'text', description: 'General discussion', unread: 5 },
    { id: 'content-creation', name: 'content-creation', type: 'text', description: 'Share and discuss content strategies' },
    { id: 'ai-tips', name: 'ai-tips', type: 'text', description: 'AI automation tips and tricks', unread: 1 },
    { id: 'success-stories', name: 'success-stories', type: 'text', description: 'Share your wins and achievements' },
    { id: 'feedback', name: 'feedback', type: 'text', description: 'Product feedback and suggestions' },
    { id: 'networking', name: 'networking', type: 'text', description: 'Connect with other creators' },
    { id: 'general-voice', name: 'General Hangout', type: 'voice', memberCount: 12 },
    { id: 'content-voice', name: 'Content Brainstorm', type: 'voice', memberCount: 5 },
  ];

  const messages: Message[] = [
    {
      id: '1',
      user: { name: 'Sarah Chen', avatar: '👩‍💼', role: 'Admin', status: 'online' },
      content: 'Welcome everyone to our RepicAI community! 🎉 This is where we share tips, celebrate wins, and help each other grow our personal brands.',
      timestamp: '2 hours ago',
      reactions: [{ emoji: '👋', count: 12 }, { emoji: '🎉', count: 8 }]
    },
    {
      id: '2',
      user: { name: 'Marcus Rodriguez', avatar: '👨‍🚀', role: 'Pro', status: 'online' },
      content: 'Just automated my entire Instagram posting schedule for the next month using RepicAI! The AI suggestions are incredible. My engagement has increased by 40% 📈',
      timestamp: '1 hour ago',
      reactions: [{ emoji: '🚀', count: 15 }, { emoji: '🔥', count: 9 }]
    },
    {
      id: '3',
      user: { name: 'Emma Thompson', avatar: '👩‍🎨', role: 'Member', status: 'online' },
      content: 'Does anyone have tips for creating consistent brand visuals? I\'m struggling to maintain the same aesthetic across platforms.',
      timestamp: '45 minutes ago',
      reactions: [{ emoji: '🤔', count: 3 }]
    },
    {
      id: '4',
      user: { name: 'Alex Kumar', avatar: '👨‍💻', role: 'Moderator', status: 'online' },
      content: '@Emma Thompson I recommend using the Canva integration in RepicAI! It automatically maintains your brand colors and fonts across all designs. Game changer! 🎨',
      timestamp: '30 minutes ago',
      reactions: [{ emoji: '💡', count: 7 }, { emoji: '✨', count: 4 }]
    },
    {
      id: '5',
      user: { name: 'Lisa Park', avatar: '👩‍🔬', role: 'Pro', status: 'away' },
      content: 'Weekly reminder: Don\'t forget to check your analytics dashboard! Understanding your audience is key to growth 📊',
      timestamp: '15 minutes ago',
      reactions: [{ emoji: '📈', count: 11 }]
    },
    {
      id: '6',
      user: { name: 'Jordan Smith', avatar: '👨‍🎤', role: 'Member', status: 'online' },
      content: 'Just hit 10K followers thanks to the RepicAI content suggestions! Who else is crushing their goals this month? 🎯',
      timestamp: '5 minutes ago',
      reactions: [{ emoji: '🎯', count: 6 }, { emoji: '🔥', count: 8 }]
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'text-red-500';
      case 'Moderator': return 'text-blue-500';
      case 'Pro': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Admin': return <Crown className="w-3 h-3" />;
      case 'Moderator': return <Shield className="w-3 h-3" />;
      case 'Pro': return <Star className="w-3 h-3" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-400';
      case 'away': return 'bg-yellow-400';
      default: return 'bg-gray-400';
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"></div>
        </div>

        <div className="relative z-10 flex h-screen">
          {/* Sidebar - Channels */}
          <div className="w-72 bg-white/80 backdrop-blur-lg border-r border-white/20 flex flex-col">
            {/* Server Header */}
            <div className="p-4 border-b border-gray-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    RepicAI Community
                  </h2>
                  <p className="text-sm text-gray-500">{onlineUsers} members online</p>
                </div>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search channels..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Text Channels */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Text Channels</h3>
                  <Plus className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
                
                {channels.filter(c => c.type === 'text').map((channel) => (
                  <div
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-all mb-1 ${
                      selectedChannel === channel.id
                        ? 'bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Hash className="w-4 h-4" />
                    <span className="text-sm font-medium" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                      {channel.name}
                    </span>
                    {channel.unread && (
                      <div className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {channel.unread}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Voice Channels */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Voice Channels</h3>
                  <Plus className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
                
                {channels.filter(c => c.type === 'voice').map((channel) => (
                  <div
                    key={channel.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-100 text-gray-700 mb-1"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="text-sm font-medium" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                      {channel.name}
                    </span>
                    {channel.memberCount && (
                      <div className="ml-auto text-xs text-gray-500">
                        {channel.memberCount}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* User Controls */}
            <div className="p-4 border-t border-gray-200/50 bg-white/60">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    J
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">Javeria</div>
                  <div className="text-xs text-gray-500">Online</div>
                </div>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <Mic className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <Settings className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200/50 bg-white/80 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Hash className="w-5 h-5 text-gray-500" />
                  <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    {channels.find(c => c.id === selectedChannel)?.name || 'general'}
                  </h1>
                  <div className="text-sm text-gray-500">
                    {channels.find(c => c.id === selectedChannel)?.description}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-xl">
                    <UserPlus className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-xl">
                    <PhoneCall className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-xl">
                    <Search className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="group hover:bg-white/50 p-3 rounded-xl transition-all">
                  <div className="flex gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
                        {message.user.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(message.user.status)} rounded-full border-2 border-white`}></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                          {message.user.name}
                        </span>
                        <div className={`flex items-center gap-1 ${getRoleColor(message.user.role)}`}>
                          {getRoleIcon(message.user.role)}
                          <span className="text-xs font-medium">{message.user.role}</span>
                        </div>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                      </div>
                      
                      <p className="text-gray-800 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                        {message.content}
                      </p>
                      
                      {message.reactions && (
                        <div className="flex gap-2">
                          {message.reactions.map((reaction, index) => (
                            <button
                              key={index}
                              className="flex items-center gap-1 px-2 py-1 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm transition-colors"
                            >
                              <span>{reaction.emoji}</span>
                              <span className="text-blue-600 font-medium">{reaction.count}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all">
                      <MoreVertical className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200/50 bg-white/80 backdrop-blur-lg">
              <div className="flex items-center gap-3 bg-gray-100 rounded-2xl p-3">
                <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder={`Message #${channels.find(c => c.id === selectedChannel)?.name || 'general'}`}
                  className="flex-1 bg-transparent outline-none text-gray-900"
                  style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Smile className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white rounded-xl hover:scale-105 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Online Members */}
          <div className="w-64 bg-white/80 backdrop-blur-lg border-l border-white/20 p-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Online — {onlineUsers}
            </h3>
            
            <div className="space-y-2">
              {[
                { name: 'Sarah Chen', role: 'Admin', status: 'online', activity: 'Managing community' },
                { name: 'Marcus Rodriguez', role: 'Pro', status: 'online', activity: 'Creating content' },
                { name: 'Alex Kumar', role: 'Moderator', status: 'online', activity: 'Helping members' },
                { name: 'Emma Thompson', role: 'Member', status: 'online', activity: 'Learning AI tips' },
                { name: 'Lisa Park', role: 'Pro', status: 'away', activity: 'In a meeting' },
                { name: 'Jordan Smith', role: 'Member', status: 'online', activity: 'Celebrating milestones' },
              ].map((user, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(user.status)} rounded-full border-2 border-white`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-900 truncate">{user.name}</span>
                      <div className={getRoleColor(user.role)}>
                        {getRoleIcon(user.role)}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 truncate">{user.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community; 