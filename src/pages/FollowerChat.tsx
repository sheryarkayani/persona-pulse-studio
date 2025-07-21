import { DashboardLayout } from "@/components/dashboard-layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send, Bot, PlusCircle, Trash2, Edit } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

// Mock data for initial chat messages
const initialMessages = [
  {
    id: 1,
    author: 'bot',
    content: "Hello! I'm your AI assistant for follower engagement. How can I help you set up your automated replies today?",
    timestamp: "10:00 AM"
  },
  {
    id: 2,
    author: 'user',
    content: "Hi! I want to set up a welcome message for new followers.",
    timestamp: "10:01 AM"
  },
  {
    id: 3,
    author: 'bot',
    content: "Great! You can do that in the 'Automated Replies' panel on the right. Click 'Add New Reply' and set a trigger like 'new_follower'.",
    timestamp: "10:01 AM"
  }
];

// Mock data for automated replies
const initialAutomatedReplies = [
    { id: 1, trigger: "pricing", reply: "You can find our pricing details at [link]. We have plans for all levels!" },
    { id: 2, trigger: "hello", reply: "Hey there! 👋 Thanks for reaching out. How can I help you?" },
    { id: 3, trigger: "support", reply: "For support, please email us at support@repic.ai and our team will get back to you shortly." },
];

const FollowerChat = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState("");
    const [automatedReplies, setAutomatedReplies] = useState(initialAutomatedReplies);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;

        const userMessage = {
            id: messages.length + 1,
            author: 'user',
            content: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMessage]);
        
        // Check for an automated reply based on keywords
        const botReply = automatedReplies.find(r => newMessage.toLowerCase().includes(r.trigger));
        if (botReply) {
            setTimeout(() => {
                const botMessage = {
                    id: messages.length + 2,
                    author: 'bot',
                    content: botReply.reply,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, botMessage]);
            }, 1000); // Simulate bot typing delay
        }

        setNewMessage("");
    };

    return (
        <DashboardLayout>
            <div className="flex h-[calc(100vh-80px)]" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col p-4 sm:p-6 bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff]">
                    <div className="flex-1 overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex items-end gap-3 ${msg.author === 'user' ? 'justify-end' : ''}`}>
                                {msg.author === 'bot' && (
                                    <Avatar className="h-10 w-10 border-2 border-blue-200 shadow-md">
                                        <AvatarFallback className="bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white">
                                            <Bot size={20} />
                                        </AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`max-w-md lg:max-w-lg p-4 rounded-3xl ${
                                    msg.author === 'user' 
                                        ? 'bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white rounded-br-lg shadow-xl' 
                                        : 'bg-white shadow-md rounded-bl-lg border border-gray-100'
                                }`}>
                                    <p className="text-sm">{msg.content}</p>
                                    <p className="text-xs mt-2 opacity-70 text-right">{msg.timestamp}</p>
                                </div>
                                {msg.author === 'user' && (
                                    <Avatar className="h-10 w-10 shadow-md">
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    
                    <div className="mt-6">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Type a message to test your chatbot..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                className="w-full pl-12 pr-20 py-6 rounded-full bg-white shadow-lg border-gray-200 focus:ring-2 focus:ring-blue-400 transition-shadow"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Paperclip className="text-gray-400 hover:text-blue-600 cursor-pointer" />
                            </div>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <Button onClick={handleSendMessage} size="icon" className="rounded-full bg-gradient-to-r from-[#2563eb] to-[#38b6ff] hover:scale-110 transition-transform">
                                    <Send size={20} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel for Automated Replies */}
                <div className="w-96 bg-white/90 backdrop-blur-md border-l border-blue-100 p-6 flex-col hidden lg:flex">
                    <div className="flex items-center gap-3 mb-6">
                        <Bot size={24} className="text-blue-600" />
                        <h2 className="text-xl font-bold text-gray-800">Automated Replies</h2>
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                        {automatedReplies.map(reply => (
                            <div key={reply.id} className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                <p className="text-sm text-gray-500 mb-2">Trigger keyword: <span className="font-semibold text-gray-700">"{reply.trigger}"</span></p>
                                <p className="text-sm text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">"{reply.reply}"</p>
                                <div className="flex justify-end gap-1 mt-3">
                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                                        <Edit size={16} />
                                    </Button>
                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50">
                                        <Trash2 size={16} />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white hover:scale-105 transition-transform">
                            <PlusCircle size={20} className="mr-2"/>
                            Add New Reply
                        </Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FollowerChat; 