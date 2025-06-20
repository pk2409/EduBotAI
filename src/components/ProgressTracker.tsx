
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, Brain, Target, Clock, BookOpen } from 'lucide-react';

export const ProgressTracker = () => {
  const subjectProgress = [
    { subject: "Mathematics", completed: 18, total: 25, progress: 72, color: "blue" },
    { subject: "Physics", completed: 12, total: 20, progress: 60, color: "green" },
    { subject: "Chemistry", completed: 15, total: 18, progress: 83, color: "purple" },
    { subject: "Biology", completed: 8, total: 15, progress: 53, color: "orange" },
  ];

  const weeklyActivity = [
    { day: "Mon", questions: 12, time: 45 },
    { day: "Tue", questions: 8, time: 32 },
    { day: "Wed", questions: 15, time: 67 },
    { day: "Thu", questions: 10, time: 38 },
    { day: "Fri", questions: 18, time: 72 },
    { day: "Sat", questions: 22, time: 89 },
    { day: "Sun", questions: 6, time: 25 },
  ];

  const weakAreas = [
    { topic: "Organic Chemistry Mechanisms", subject: "Chemistry", difficulty: "High", lastStudied: "3 days ago" },
    { topic: "Quadratic Formula Applications", subject: "Mathematics", difficulty: "Medium", lastStudied: "1 week ago" },
    { topic: "Electromagnetic Induction", subject: "Physics", difficulty: "High", lastStudied: "5 days ago" },
  ];

  const learningStreak = {
    current: 12,
    longest: 25,
    thisWeek: 6
  };

  return (
    <div className="space-y-6">
      {/* Learning Streak & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Current Streak</p>
                <p className="text-3xl font-bold">{learningStreak.current} days</p>
              </div>
              <Target className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">This Week</p>
                <p className="text-3xl font-bold">{learningStreak.thisWeek} days</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Longest Streak</p>
                <p className="text-3xl font-bold">{learningStreak.longest} days</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Subject Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {subjectProgress.map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium text-gray-900">{subject.subject}</h3>
                  <Badge variant="outline">{subject.completed}/{subject.total} topics</Badge>
                </div>
                <span className="font-semibold text-gray-700">{subject.progress}%</span>
              </div>
              <Progress value={subject.progress} className="h-3" />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Weekly Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyActivity.map((day, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{day.questions} questions</span>
                      <span>{day.time}min</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="flex-1 bg-blue-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${Math.min((day.questions / 25) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-green-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${Math.min((day.time / 90) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Areas Needing Attention */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-orange-600" />
              Areas Needing Attention
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weakAreas.map((area, index) => (
              <div key={index} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{area.topic}</h4>
                  <Badge 
                    variant={area.difficulty === 'High' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {area.difficulty}
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{area.subject}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {area.lastStudied}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
