'use client'

import { useState } from 'react'
import { Brain, TrendingUp, Clock, Target, Zap, BarChart3, Calendar, AlertCircle, Battery, BatteryMedium, BatteryLow, Menu, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts'

// Mock data for Learning DNA
const learningDNAData = [
  { subject: 'Visual Learning', value: 85 },
  { subject: 'Auditory Learning', value: 70 },
  { subject: 'Kinesthetic', value: 65 },
  { subject: 'Logical Reasoning', value: 90 },
  { subject: 'Creative Thinking', value: 75 },
  { subject: 'Memory Retention', value: 80 },
]

// Mock data for retention decay
const retentionData = [
  { day: 'Day 1', retention: 100 },
  { day: 'Day 2', retention: 85 },
  { day: 'Day 3', retention: 75 },
  { day: 'Day 7', retention: 60 },
  { day: 'Day 14', retention: 45 },
  { day: 'Day 30', retention: 30 },
]

// Mock data for Theory vs Practice
const performanceData = [
  { subject: 'Mathematics', theory: 85, practice: 78 },
  { subject: 'Physics', theory: 75, practice: 82 },
  { subject: 'Chemistry', theory: 80, practice: 75 },
  { subject: 'Biology', theory: 90, practice: 88 },
  { subject: 'Computer Sci', theory: 88, practice: 92 },
]

// Mock data for mistake patterns
const mistakeData = [
  { category: 'Calculation Errors', count: 12 },
  { category: 'Conceptual Gaps', count: 8 },
  { category: 'Time Management', count: 15 },
  { category: 'Formula Application', count: 6 },
  { category: 'Problem Analysis', count: 10 },
]

// Mock study sessions
const studySessions = [
  { id: 1, subject: 'Mathematics - Calculus', time: '9:00 AM - 10:30 AM', duration: '90 min', type: 'Peak Focus', difficulty: 'High' },
  { id: 2, subject: 'Physics - Mechanics', time: '11:00 AM - 12:00 PM', duration: '60 min', type: 'Regular', difficulty: 'Medium' },
  { id: 3, subject: 'Chemistry - Organic', time: '2:00 PM - 3:00 PM', duration: '60 min', type: 'Review', difficulty: 'Low' },
  { id: 4, subject: 'Biology - Cell Structure', time: '4:00 PM - 5:00 PM', duration: '60 min', type: 'Practice', difficulty: 'Medium' },
  { id: 5, subject: 'Computer Science - Algorithms', time: '7:00 PM - 8:30 PM', duration: '90 min', type: 'Peak Focus', difficulty: 'High' },
]

const Navigation = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-2">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NeuroAlly</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Button 
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </Button>
            <Button 
              variant={activeTab === 'analytics' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </Button>
            <Button 
              variant={activeTab === 'planner' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('planner')}
            >
              Study Planner
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Button 
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('dashboard')
                setMobileMenuOpen(false)
              }}
            >
              Dashboard
            </Button>
            <Button 
              variant={activeTab === 'analytics' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('analytics')
                setMobileMenuOpen(false)
              }}
            >
              Analytics
            </Button>
            <Button 
              variant={activeTab === 'planner' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('planner')
                setMobileMenuOpen(false)
              }}
            >
              Study Planner
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

const BurnoutDetector = ({ level = 65 }) => {
  const getBurnoutColor = () => {
    if (level >= 80) return 'text-red-500'
    if (level >= 50) return 'text-orange-500'
    return 'text-green-500'
  }

  const getBurnoutIcon = () => {
    if (level >= 80) return <BatteryLow className={`h-8 w-8 ${getBurnoutColor()}`} />
    if (level >= 50) return <BatteryMedium className={`h-8 w-8 ${getBurnoutColor()}`} />
    return <Battery className={`h-8 w-8 ${getBurnoutColor()}`} />
  }

  const getBurnoutStatus = () => {
    if (level >= 80) return { status: 'High Fatigue', message: 'Take a break! Your cognitive load is high.' }
    if (level >= 50) return { status: 'Moderate Load', message: 'Consider a short break in the next hour.' }
    return { status: 'Fresh & Ready', message: 'Optimal condition for learning!' }
  }

  const { status, message } = getBurnoutStatus()

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-accent" />
          <span>Burnout Detector</span>
        </CardTitle>
        <CardDescription>Real-time cognitive fatigue monitoring</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              {getBurnoutIcon()}
              <div>
                <p className={`text-lg font-bold ${getBurnoutColor()}`}>{status}</p>
                <p className="text-sm text-muted-foreground">Cognitive Load: {level}%</p>
              </div>
            </div>
            <Progress value={level} className="h-3" />
            <p className="text-sm text-muted-foreground mt-3">{message}</p>
          </div>
        </div>
        {level >= 50 && (
          <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm font-medium text-orange-800">💡 Suggested Actions:</p>
            <ul className="text-xs text-orange-700 mt-1 space-y-1">
              <li>• Take a 10-minute break</li>
              <li>• Practice deep breathing</li>
              <li>• Hydrate and stretch</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-blue-500 to-accent p-8 md:p-12 text-white">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome back, Alex! 👋</h1>
          <p className="text-lg md:text-xl text-blue-50 mb-6">Your personalized learning journey continues</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm text-blue-100">Current Streak</p>
              <p className="text-2xl font-bold">15 days 🔥</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm text-blue-100">Hours Today</p>
              <p className="text-2xl font-bold">3.5 hrs ⏱️</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm text-blue-100">Completion</p>
              <p className="text-2xl font-bold">78% ✨</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Learning Speed</CardTitle>
            <Zap className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.4x</div>
            <p className="text-xs text-muted-foreground mt-1">Above average pace</p>
            <Progress value={70} className="h-2 mt-3" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Focus Duration</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 min</div>
            <p className="text-xs text-muted-foreground mt-1">Average session length</p>
            <Progress value={85} className="h-2 mt-3" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
            <Target className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground mt-1">Strong memory performance</p>
            <Progress value={82} className="h-2 mt-3" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Learning DNA */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <span>Your Learning DNA</span>
            </CardTitle>
            <CardDescription>Dynamic cognitive fingerprint</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={learningDNAData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#6b7280' }} />
                <Radar name="Your Profile" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">Your strongest areas: <span className="font-semibold text-foreground">Logical Reasoning & Visual Learning</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Burnout Detector */}
        <BurnoutDetector level={65} />
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Progress</CardTitle>
          <CardDescription>Your learning activity snapshot</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground mt-1">Topics Mastered</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">94%</p>
              <p className="text-sm text-muted-foreground mt-1">Quiz Accuracy</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-3xl font-bold text-accent">3</p>
              <p className="text-sm text-muted-foreground mt-1">Active Goals</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-600">2.1k</p>
              <p className="text-sm text-muted-foreground mt-1">XP Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Cognitive Analytics</h1>
        <p className="text-muted-foreground">Deep insights into your learning patterns</p>
      </div>

      {/* Theory vs Practice Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>Theory vs Practice Performance</span>
          </CardTitle>
          <CardDescription>Compare your theoretical understanding with practical application</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="theory" fill="#3b82f6" name="Theory" radius={[8, 8, 0, 0]} />
              <Bar dataKey="practice" fill="#f97316" name="Practice" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm font-medium text-blue-900">💡 Insight:</p>
            <p className="text-sm text-blue-700 mt-1">You excel in practical application of Computer Science and Physics. Consider more hands-on practice in Chemistry.</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Retention Decay Curve */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>Retention Decay Curve</span>
            </CardTitle>
            <CardDescription>How well you retain information over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" tick={{ fill: '#6b7280', fontSize: 11 }} />
                <YAxis tick={{ fill: '#6b7280' }} />
                <Tooltip />
                <Area type="monotone" dataKey="retention" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-3">Your retention is above average. Regular reviews recommended at Day 7 and Day 14.</p>
          </CardContent>
        </Card>

        {/* Mistake Patterns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              <span>Mistake Patterns</span>
            </CardTitle>
            <CardDescription>Common error categories to focus on</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mistakeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fill: '#6b7280' }} />
                <YAxis dataKey="category" type="category" tick={{ fill: '#6b7280', fontSize: 11 }} width={120} />
                <Tooltip />
                <Bar dataKey="count" fill="#f97316" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-3">Focus on time management techniques to reduce errors.</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Performance Summary</CardTitle>
          <CardDescription>Your learning metrics over the past 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-bold">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Goal Completion</span>
                <span className="text-sm font-bold">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Engagement Score</span>
                <span className="text-sm font-bold">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const StudyPlanner = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Adaptive Study Planner</h1>
          <p className="text-muted-foreground">AI-personalized schedule based on your cognitive patterns</p>
        </div>
        <Button className="hidden md:flex">
          <Calendar className="h-4 w-4 mr-2" />
          Export Schedule
        </Button>
      </div>

      {/* Peak Focus Times Banner */}
      <Card className="bg-gradient-to-r from-primary to-blue-600 text-white border-0">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-3 mb-3">
            <Zap className="h-6 w-6" />
            <h3 className="text-xl font-bold">Your Peak Focus Times</h3>
          </div>
          <p className="text-blue-100 mb-4">Based on your cognitive performance data</p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm text-blue-100">Morning Peak</p>
              <p className="text-lg font-bold">9:00 AM - 11:00 AM</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm text-blue-100">Evening Peak</p>
              <p className="text-lg font-bold">7:00 PM - 9:00 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-accent" />
            <span>Today's Optimized Schedule</span>
          </CardTitle>
          <CardDescription>Tailored to your learning DNA and current cognitive state</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {studySessions.map((session) => (
              <div key={session.id} className={`p-4 rounded-lg border-l-4 ${
                session.type === 'Peak Focus' ? 'border-l-accent bg-orange-50' :
                session.type === 'Practice' ? 'border-l-primary bg-blue-50' :
                'border-l-gray-300 bg-gray-50'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-foreground">{session.subject}</h4>
                      {session.type === 'Peak Focus' && (
                        <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-full">Peak Focus</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {session.time}
                      </span>
                      <span>Duration: {session.duration}</span>
                      <span className={`font-medium ${
                        session.difficulty === 'High' ? 'text-red-600' :
                        session.difficulty === 'Medium' ? 'text-orange-600' :
                        'text-green-600'
                      }`}>
                        {session.difficulty} Difficulty
                      </span>
                    </div>
                  </div>
                  <Button size="sm" className="mt-3 md:mt-0">
                    Start Session
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <Brain className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Schedule difficult topics during peak hours</p>
                  <p className="text-xs text-muted-foreground">Your focus is 40% higher at 9 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Target className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Take breaks every 45 minutes</p>
                  <p className="text-xs text-muted-foreground">Matches your optimal attention span</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 rounded-full p-2">
                  <Zap className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">Review Chemistry notes today</p>
                  <p className="text-xs text-muted-foreground">Optimal retention window closing soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Weekly Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Complete 5 Calculus modules</span>
                  <span className="text-sm font-bold">3/5</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Practice 20 coding problems</span>
                  <span className="text-sm font-bold">14/20</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Study 10 hours this week</span>
                  <span className="text-sm font-bold">7.5/10</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'planner' && <StudyPlanner />}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-border mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">NeuroAlly - AI-Driven Education Platform | Trithon 2026</p>
          <p className="text-xs mt-2">Personalized learning powered by cognitive analytics</p>
        </div>
      </footer>
    </div>
  )
}
