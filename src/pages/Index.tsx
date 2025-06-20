
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { ChatInterface } from '@/components/ChatInterface';
import { QuizCenter } from '@/components/QuizCenter';
import { DocumentHub } from '@/components/DocumentHub';
import { ProgressTracker } from '@/components/ProgressTracker';

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <ChatInterface />;
      case 'quiz':
        return <QuizCenter />;
      case 'documents':
        return <DocumentHub />;
      case 'progress':
        return <ProgressTracker />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to EduBot-AI
            </h1>
            <p className="text-gray-600">
              Your intelligent learning companion for academic success
            </p>
          </header>
          {renderActiveView()}
        </div>
      </main>
    </div>
  );
};

export default Index;
