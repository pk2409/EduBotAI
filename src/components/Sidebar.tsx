
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  BookOpen, 
  MessageSquare, 
  Brain, 
  FileText, 
  TrendingUp,
  Award
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
    { id: 'chat', label: 'AI Tutor', icon: MessageSquare },
    { id: 'quiz', label: 'Quiz Center', icon: Brain },
    { id: 'documents', label: 'Document Hub', icon: FileText },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">EduBot-AI</h2>
        </div>

        {/* XP Display */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6 border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-800">Total XP</span>
            <Award className="h-4 w-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-900 mb-2">2,450</div>
          <div className="w-full bg-green-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
          </div>
          <div className="text-xs text-green-700 mt-1">Level 8 • 550 XP to next level</div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                  activeView === item.id
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
