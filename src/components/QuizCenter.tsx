
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, Clock, Target, CheckCircle, XCircle, Award } from 'lucide-react';

export const QuizCenter = () => {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const availableQuizzes = [
    {
      id: 1,
      title: "Quadratic Equations",
      subject: "Mathematics",
      difficulty: "Intermediate",
      questions: 10,
      timeLimit: 15,
      xpReward: 150,
    },
    {
      id: 2,
      title: "Newton's Laws of Motion",
      subject: "Physics",
      difficulty: "Beginner",
      questions: 8,
      timeLimit: 12,
      xpReward: 120,
    },
    {
      id: 3,
      title: "Organic Chemistry Basics",
      subject: "Chemistry",
      difficulty: "Advanced",
      questions: 15,
      timeLimit: 20,
      xpReward: 200,
    },
  ];

  const sampleQuestions = [
    {
      question: "What is the standard form of a quadratic equation?",
      options: ["ax² + bx + c = 0", "ax + b = 0", "x² + x = 0", "ax² = 0"],
      correct: 0
    },
    {
      question: "Which method can be used to solve quadratic equations?",
      options: ["Factoring", "Quadratic formula", "Completing the square", "All of the above"],
      correct: 3
    }
  ];

  const startQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setScore(0);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === sampleQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < sampleQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setScore(0);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    const xpEarned = Math.round((percentage / 100) * activeQuiz.xpReward);

    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center p-8">
          <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
          <p className="text-gray-600 mb-6">Great job on completing the {activeQuiz.title} quiz</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{score}</div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{percentage}%</div>
              <div className="text-sm text-gray-600">Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{xpEarned}</div>
              <div className="text-sm text-gray-600">XP Earned</div>
            </div>
          </div>

          <div className="space-y-4">
            <Button onClick={resetQuiz} className="w-full">
              Take Another Quiz
            </Button>
            <Button variant="outline" onClick={() => setActiveQuiz(null)} className="w-full">
              Back to Quiz Center
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (activeQuiz) {
    const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100;
    const currentQ = sampleQuestions[currentQuestion];

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{activeQuiz.title}</CardTitle>
            <Badge variant="outline">{currentQuestion + 1} / {sampleQuestions.length}</Badge>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        
        <CardContent className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">{currentQ.question}</h3>
          
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className="w-full text-left justify-start h-auto p-4"
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    {selectedAnswer === index && (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    )}
                  </div>
                  {option}
                </div>
              </Button>
            ))}
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleNextQuestion} 
              disabled={selectedAnswer === null}
              className="flex-1"
            >
              {currentQuestion + 1 === sampleQuestions.length ? 'Finish Quiz' : 'Next Question'}
            </Button>
            <Button variant="outline" onClick={resetQuiz}>
              Exit Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableQuizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{quiz.title}</CardTitle>
                <Badge variant="secondary">{quiz.difficulty}</Badge>
              </div>
              <p className="text-sm text-gray-600">{quiz.subject}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Brain className="h-4 w-4" />
                  {quiz.questions} questions
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {quiz.timeLimit} min
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <Award className="h-4 w-4" />
                  +{quiz.xpReward} XP
                </div>
              </div>
              
              <Button onClick={() => startQuiz(quiz)} className="w-full">
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Quiz History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Quiz Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { quiz: "Algebra Basics", score: "85%", date: "2 hours ago", xp: 127 },
              { quiz: "Chemical Bonding", score: "92%", date: "1 day ago", xp: 184 },
              { quiz: "Kinematics", score: "78%", date: "2 days ago", xp: 156 },
            ].map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{result.quiz}</h4>
                  <p className="text-sm text-gray-600">{result.date}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-green-600">{result.score}</div>
                  <div className="text-sm text-gray-600">+{result.xp} XP</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
