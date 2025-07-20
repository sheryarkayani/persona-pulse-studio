import { useState } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { 
  Plus, 
  MoreHorizontal, 
  Calendar, 
  User, 
  Tag, 
  Clock, 
  CheckCircle, 
  Circle, 
  PlayCircle, 
  AlertCircle, 
  Star, 
  Paperclip, 
  MessageSquare, 
  Eye,
  Edit3,
  Trash2,
  Archive,
  Filter,
  Search,
  Settings,
  Download,
  Share,
  Zap,
  Target,
  Sparkles
} from "lucide-react";

interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate?: string;
  tags: string[];
  attachments?: number;
  comments?: number;
  checklist?: {
    completed: number;
    total: number;
  };
  status: 'outbound' | 'negotiation' | 'contract' | 'pre-production' | 'filming' | 'payment';
}

interface Column {
  id: string;
  title: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  tasks: Task[];
}

const Workflow = () => {
  const [draggedTask, setDraggedTask] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  const [columns, setColumns] = useState<Column[]>([
    {
      id: 'outbound',
      title: 'Outbound',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      icon: <Target className="w-5 h-5" />,
      tasks: [
        {
          id: '1',
          title: 'Research 10 Tech Gadget Brands',
          description: 'Identify brands aligning with channel audience for potential partnerships.',
          priority: 'medium',
          assignee: { name: 'Alex Kumar', avatar: '👨‍💻' },
          dueDate: '2024-08-05',
          tags: ['Research', 'Sponsorship'],
          status: 'outbound'
        },
        {
          id: '2',
          title: 'Draft Outreach Email Template',
          description: 'Create a personalized and effective outreach template for initial contact.',
          priority: 'low',
          assignee: { name: 'Alex Kumar', avatar: '👨‍💻' },
          tags: ['Template', 'Email'],
          status: 'outbound'
        }
      ]
    },
    {
      id: 'negotiation',
      title: 'Negotiation',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      icon: <MessageSquare className="w-5 h-5" />,
      tasks: [
        {
          id: '3',
          title: 'Negotiate with AudioBrand Inc.',
          description: 'Follow up on their reply and negotiate rates for a 3-video package.',
          priority: 'high',
          assignee: { name: 'Sarah Chen', avatar: '👩‍💼' },
          dueDate: '2024-08-10',
          tags: ['Negotiation', 'Rates'],
          comments: 3,
          status: 'negotiation'
        }
      ]
    },
    {
      id: 'contract',
      title: 'Contract',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      icon: <Edit3 className="w-5 h-5" />,
      tasks: [
        {
          id: '4',
          title: 'Review Contract from StyleHub',
          description: 'Carefully review the terms and conditions of the partnership agreement.',
          priority: 'urgent',
          assignee: { name: 'Sarah Chen', avatar: '👩‍💼' },
          dueDate: '2024-08-02',
          tags: ['Contract', 'Legal'],
          attachments: 1,
          status: 'contract'
        },
        {
          id: '5',
          title: 'Sign and Return Contract for GameCo',
          description: 'Finalize the agreement and send back the signed contract.',
          priority: 'high',
          assignee: { name: 'Sarah Chen', avatar: '👩‍💼' },
          dueDate: '2024-08-08',
          tags: ['Contract', 'Signature'],
          status: 'contract'
        }
      ]
    },
    {
      id: 'pre-production',
      title: 'Pre-production',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      icon: <Sparkles className="w-5 h-5" />,
      tasks: [
        {
          id: '6',
          title: 'Discuss Deliverables with AudioBrand',
          description: 'Clarify content format, length, and talking points for the videos.',
          priority: 'high',
          assignee: { name: 'Emma Thompson', avatar: '👩‍🎨' },
          tags: ['Creative Brief', 'Deliverables'],
          comments: 2,
          status: 'pre-production'
        },
        {
          id: '7',
          title: 'Wait for Product Shipment from GameCo',
          description: 'Product has been sent, awaiting delivery for filming.',
          priority: 'medium',
          assignee: { name: 'Emma Thompson', avatar: '👩‍🎨' },
          dueDate: '2024-08-15',
          tags: ['Product', 'Shipping'],
          status: 'pre-production'
        }
      ]
    },
    {
      id: 'filming',
      title: 'Filming',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      icon: <PlayCircle className="w-5 h-5" />,
      tasks: [
        {
          id: '8',
          title: 'Film Unboxing for StyleHub',
          description: 'Create an engaging unboxing video showcasing the product.',
          priority: 'high',
          assignee: { name: 'Jordan Smith', avatar: '👨‍🎤' },
          checklist: { completed: 1, total: 4 },
          tags: ['Filming', 'Video', 'UGC'],
          status: 'filming'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payment & Completion',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      icon: <CheckCircle className="w-5 h-5" />,
      tasks: [
        {
          id: '9',
          title: 'Send Invoice to StyleHub',
          description: 'Generate and send the invoice upon content approval.',
          priority: 'high',
          assignee: { name: 'Marcus Rodriguez', avatar: '👨‍🚀' },
          tags: ['Invoice', 'Payment'],
          status: 'payment'
        },
        {
          id: '10',
          title: 'Paid: GameCo Partnership',
          description: 'Payment received, campaign completed successfully.',
          priority: 'low',
          assignee: { name: 'Marcus Rodriguez', avatar: '👨‍🚀' },
          tags: ['Paid', 'Completed'],
          status: 'payment'
        }
      ]
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'Urgent';
      case 'high': return 'High';
      case 'medium': return 'Medium';
      case 'low': return 'Low';
      default: return 'None';
    }
  };

  const handleDragStart = (taskId: string) => {
    setDraggedTask(taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    
    if (!draggedTask) return;

    const updatedColumns = columns.map(column => {
      // Remove task from source column
      const tasksWithoutDragged = column.tasks.filter(task => task.id !== draggedTask);
      
      if (column.id === targetColumnId) {
        // Find the dragged task from any column
        const draggedTaskObj = columns
          .flatMap(col => col.tasks)
          .find(task => task.id === draggedTask);
        
        if (draggedTaskObj) {
          // Add task to target column with updated status
          return {
            ...column,
            tasks: [...tasksWithoutDragged, { ...draggedTaskObj, status: targetColumnId as 'outbound' | 'negotiation' | 'contract' | 'pre-production' | 'filming' | 'payment' }]
          };
        }
      }
      
      return { ...column, tasks: tasksWithoutDragged };
    });

    setColumns(updatedColumns);
    setDraggedTask(null);
  };

  const filteredTasks = (tasks: Task[]) => {
    return tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
      
      return matchesSearch && matchesPriority;
    });
  };

  const TaskCard = ({ task }: { task: Task }) => (
    <div
      draggable
      onDragStart={() => handleDragStart(task.id)}
      className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-move border border-gray-100 hover:scale-105"
    >
      {/* Priority & More Options */}
      <div className="flex items-center justify-between mb-3">
        <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getPriorityColor(task.priority)}`}>
          {getPriorityText(task.priority)}
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-lg">
          <MoreHorizontal className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className="text-xs text-gray-600 mb-3 line-clamp-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
          {task.description}
        </p>
      )}

      {/* Tags */}
      {task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium">
              {tag}
            </span>
          ))}
          {task.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs">
              +{task.tags.length - 2}
            </span>
          )}
        </div>
      )}

      {/* Checklist Progress */}
      {task.checklist && (
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span className="text-xs text-gray-600">
              {task.checklist.completed}/{task.checklist.total} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-green-500 h-1 rounded-full transition-all"
              style={{ width: `${(task.checklist.completed / task.checklist.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Assignee & Due Date */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs">
            {task.assignee.avatar}
          </div>
          {task.dueDate && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          )}
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">
          {task.attachments && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Paperclip className="w-3 h-3" />
              <span>{task.attachments}</span>
            </div>
          )}
          {task.comments && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MessageSquare className="w-3 h-3" />
              <span>{task.comments}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"></div>
        </div>

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    Workflow Management
                  </h1>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    Organize and track your content creation tasks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-700 transition-all">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-700 transition-all">
                  <Share className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white rounded-xl font-medium hover:scale-105 transition-all shadow-lg">
                  <Plus className="w-4 h-4" />
                  New Task
                </button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tasks..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                />
              </div>

              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Priorities</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {columns.map((column) => (
                <div key={column.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-lg">
                  <div className={`w-10 h-10 ${column.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <div className={column.color}>
                      {column.icon}
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${column.color} mb-1`}>{filteredTasks(column.tasks).length}</div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    {column.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kanban Board */}
          <div className="flex space-x-6 pb-6 overflow-x-auto">
            {columns.map((column) => (
              <div
                key={column.id}
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 w-96 flex-shrink-0"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.id)}
              >
                {/* Column Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${column.bgColor} rounded-xl`}>
                      <div className={column.color}>
                        {column.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                        {column.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {filteredTasks(column.tasks).length} tasks
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <Plus className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                {/* Tasks */}
                <div className="space-y-4 min-h-[400px]">
                  {filteredTasks(column.tasks).map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                  
                  {filteredTasks(column.tasks).length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-400 h-full">
                      <Zap className="w-12 h-12 mb-3 opacity-50" />
                      <p className="text-sm text-center" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                        Drag tasks here or create a new one.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Workflow; 