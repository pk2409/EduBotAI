
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Target, 
  TrendingUp, 
  BookOpen,
  Award,
  Brain,
  Calendar
} from 'lucide-react';

export const Dashboard = () => {
  const recentAchievements = [
    { title: "Quiz Master", description: "Completed 5 quizzes in Mathematics", xp: 150 },
    { title: "Streak Champion", description: "7-day learning streak", xp: 200 },
    { title: "Question Solver", description: "Asked 10 meaningful questions", xp: 100 },
  ];

  const weeklyGoals = [
    { subject: "Mathematics", progress: 75, target: "Complete Algebra module" },
    { subject: "Physics", progress: 45, target: "Finish Mechanics chapter" },
    { subject: "Chemistry", progress: 90, target: "Review Organic compounds" },
  ];

  const todaysSchedule = [
    { time: "9:00 AM", subject: "Mathematics", topic: "Quadratic Equations" },
    { time: "11:00 AM", subject: "Physics", topic: "Newton's Laws" },
    { time: "2:00 PM", subject: "Chemistry", topic: "Molecular Structure" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Questions Solved</p>
                <p className="text-3xl font-bold">247</p>
              </div>
              <Brain className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Study Streak</p>
                <p className="text-3xl font-bold">12 days</p>
              </div>
              <Target className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Topics Mastered</p>
                <p className="text-3xl font-bold">34</p>
              </div>
              <BookOpen className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Study Time</p>
                <p className="text-3xl font-bold">28h</p>
              </div>
              <Clock className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Weekly Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{goal.subject}</span>
                  <span className="text-sm text-gray-500">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-sm text-gray-600">{goal.target}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <Badge variant="secondary" className="mt-1">+{achievement.xp} XP</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-600" />
            Today's Study Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {todaysSchedule.map((item, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">{item.time}</span>
                </div>
                <h4 className="font-semibold text-gray-900">{item.subject}</h4>
                <p className="text-sm text-gray-600">{item.topic}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
