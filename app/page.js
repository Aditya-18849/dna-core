'use client'

import { useState } from 'react'
import { Brain, TrendingUp, Clock, Target, Zap, BarChart3, Calendar, AlertCircle, Battery, BatteryMedium, BatteryLow, Menu, X, Award, Flame, Users, ChevronRight, Star, Trophy, BookOpen, Activity, Settings, User, Home, Play, Pause, RotateCcw } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts'

// Mock data for Learning DNA - now with more metrics
const learningDNAData = [
  { subject: 'Visual Learning', value: 92, fullMark: 100 },
  { subject: 'Focus Stamina', value: 88, fullMark: 100 },
  { subject: 'Retention', value: 95, fullMark: 100 },
  { subject: 'Problem Solving', value: 85, fullMark: 100 },
  { subject: 'Agility', value: 98, fullMark: 100 },
  { subject: 'Creative Thinking', value: 87, fullMark: 100 },
]

// Core Archetypes Data
const coreArchetypes = [
  { name: 'Visual-Spatial Learner', percentage: 92, color: 'from-purple-500 to-pink-500', icon: '👁️' },
  { name: 'Rapid Problem Solver', percentage: 84, color: 'from-blue-500 to-cyan-500', icon: '⚡' },
  { name: 'Deep Focus Master', percentage: 88, color: 'from-indigo-500 to-purple-500', icon: '🧠' },
  { name: 'Pattern Recognition Expert', percentage: 91, color: 'from-cyan-500 to-teal-500', icon: '🔮' },
]

// Enhanced retention data
const retentionData = [
  { day: 'Day 1', retention: 100, optimal: 100 },
  { day: 'Day 2', retention: 92, optimal: 95 },
  { day: 'Day 3', retention: 85, optimal: 85 },
  { day: 'Day 5', retention: 78, optimal: 75 },
  { day: 'Day 7', retention: 72, optimal: 65 },
  { day: 'Day 14', retention: 65, optimal: 55 },
  { day: 'Day 21', retention: 58, optimal: 45 },
]

// Performance Data with predictions
const performanceData = [
  { subject: 'Math', theory: 85, practice: 88, predicted: 90 },
  { subject: 'Physics', theory: 82, practice: 85, predicted: 87 },
  { subject: 'Chemistry', theory: 88, practice: 84, predicted: 91 },
  { subject: 'Biology', theory: 90, practice: 92, predicted: 94 },
  { subject: 'CS', theory: 95, practice: 98, predicted: 97 },
]

// Achievements data
const achievements = [
  { id: 1, name: '7 Day Streak', icon: Flame, unlocked: true, color: 'text-orange-500' },
  { id: 2, name: 'Perfect Score', icon: Star, unlocked: true, color: 'text-yellow-500' },
  { id: 3, name: 'Early Bird', icon: Trophy, unlocked: false, color: 'text-blue-500' },
  { id: 4, name: 'Night Owl', icon: Award, unlocked: true, color: 'text-purple-500' },
]

// Study sessions with enhanced data
const studySessions = [
  { 
    id: 1, 
    subject: 'Advanced Calculus', 
    time: '8:00 PM - 9:30 PM', 
    duration: '90 min', 
    type: 'HYPER-FOCUS', 
    difficulty: 'HIGH',
    aiScore: 98,
    color: 'cyan'
  },
  { 
    id: 2, 
    subject: 'Quantum Physics', 
    time: '10:00 AM - 11:00 AM', 
    duration: '60 min', 
    type: 'PEAK TIME', 
    difficulty: 'MEDIUM',
    aiScore: 94,
    color: 'purple'
  },
  { 
    id: 3, 
    subject: 'Organic Chemistry', 
    time: '2:00 PM - 3:00 PM', 
    duration: '60 min', 
    type: 'REVIEW', 
    difficulty: 'LOW',
    aiScore: 87,
    color: 'blue'
  },
]

const Navigation = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-[#0f172a]/80 backdrop-blur-xl border-b border-blue-500/20 sticky top-0 z-50 glow-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-2 glow-border">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-wider gradient-text uppercase">DNA_CORE</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <Button 
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('dashboard')}
              className={activeTab === 'dashboard' ? 'neon-button text-white border-0' : 'text-gray-400 hover:text-white hover:bg-blue-500/10'}
            >
              <Home className="h-4 w-4 mr-2" />
              DASHBOARD
            </Button>
            <Button 
              variant={activeTab === 'analytics' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('analytics')}
              className={activeTab === 'analytics' ? 'neon-button text-white border-0' : 'text-gray-400 hover:text-white hover:bg-blue-500/10'}
            >
              <Activity className="h-4 w-4 mr-2" />
              ANALYTICS
            </Button>
            <Button 
              variant={activeTab === 'planner' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('planner')}
              className={activeTab === 'planner' ? 'neon-button text-white border-0' : 'text-gray-400 hover:text-white hover:bg-blue-500/10'}
            >
              <Calendar className="h-4 w-4 mr-2" />
              PLANNER
            </Button>
          </div>

          <Button className="hidden md:flex glass-card border-blue-500/30 text-blue-400 hover:bg-blue-500/20">
            <Settings className="h-4 w-4" />
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-blue-400"
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
              <Home className="h-4 w-4 mr-2" />
              DASHBOARD
            </Button>
            <Button 
              variant={activeTab === 'analytics' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('analytics')
                setMobileMenuOpen(false)
              }}
            >
              <Activity className="h-4 w-4 mr-2" />
              ANALYTICS
            </Button>
            <Button 
              variant={activeTab === 'planner' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('planner')
                setMobileMenuOpen(false)
              }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              PLANNER
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

const HexagonalDNA = ({ percentage = 98.4 }) => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Animated background rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute w-[250px] h-[250px] border border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Main hexagonal shape */}
      <div className="relative hexagon-glow">
        <svg width="350" height="350" viewBox="0 0 350 350" className="animate-float">
          {/* Outer hexagon with gradient stroke */}
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background fill */}
          <polygon 
            points="175,50 280,112.5 280,237.5 175,300 70,237.5 70,112.5" 
            fill="rgba(15, 23, 42, 0.8)"
            stroke="url(#hexGradient)"
            strokeWidth="3"
            filter="url(#glow)"
          />
          
          {/* Inner glowing hexagon */}
          <polygon 
            points="175,80 250,122.5 250,207.5 175,250 100,207.5 100,122.5" 
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            opacity="0.4"
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-2">AGILITY</div>
          <div className="text-6xl font-bold text-white glow-text mb-1">{percentage}%</div>
          <div className="text-blue-400 text-sm tracking-wider">COGNITIVE SCORE</div>
        </div>
      </div>
      
      {/* Corner labels */}
      <div className="absolute top-8 left-8 text-xs text-gray-500 tracking-widest uppercase">Visual Pref.</div>
      <div className="absolute top-8 right-8 text-xs text-gray-500 tracking-widest uppercase">Retention</div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 tracking-widest uppercase">Problem Solving</div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-blue-400 tracking-widest uppercase">Focus Stamina</div>
    </div>
  )
}

const Dashboard = () => {
  const [focusTimer, setFocusTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  return (
    <div className="space-y-6 cyber-grid pb-20">
      {/* Hero Stats Bar */}
      <div className="glass-card rounded-2xl p-6 glow-border">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 blur-xl opacity-50 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-3">
                <Flame className="h-8 w-8 text-white animate-pulse" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">28 Days Streak</div>
              <div className="text-sm text-gray-400 tracking-wider">CONSISTENCY CHAMPION</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="glass-card px-6 py-3 rounded-xl border-l-4 border-cyan-500">
              <div className="text-sm text-gray-400 uppercase tracking-wider">Today's Focus</div>
              <div className="text-2xl font-bold text-cyan-400">4.2 hrs</div>
            </div>
            <div className="glass-card px-6 py-3 rounded-xl border-l-4 border-purple-500">
              <div className="text-sm text-gray-400 uppercase tracking-wider">Weekly XP</div>
              <div className="text-2xl font-bold text-purple-400">12.4k</div>
            </div>
            <div className="glass-card px-6 py-3 rounded-xl border-l-4 border-green-500">
              <div className="text-sm text-gray-400 uppercase tracking-wider">Accuracy</div>
              <div className="text-2xl font-bold text-green-400">96.8%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main DNA Visualization */}
      <div className="glass-card rounded-2xl p-8 glow-border">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold tracking-[0.2em] uppercase gradient-text mb-2">Cognitive Fingerprint</h2>
          <p className="text-gray-400 tracking-wider text-sm">YOUR UNIQUE LEARNING DNA PROFILE</p>
          <Badge className="mt-3 neon-button border-0 text-white px-4 py-1">
            <Zap className="h-3 w-3 mr-1" />
            LATEST SCAN: TODAY
          </Badge>
        </div>
        
        <HexagonalDNA percentage={98.4} />
      </div>

      {/* Peak Time & Revision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6 border-l-4 border-cyan-500 glow-border-cyan">
          <div className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-3">Peak Time</div>
          <div className="text-4xl font-bold text-white mb-2">8PM – 11PM</div>
          <div className="flex items-center text-cyan-400 text-sm">
            <Zap className="h-4 w-4 mr-2" />
            <span className="tracking-wider">HYPER-FOCUS WINDOW</span>
          </div>
          <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse-slow"></div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border-l-4 border-purple-500 glow-border-purple">
          <div className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-3">Revision Cycle</div>
          <div className="text-4xl font-bold text-white mb-2">3 Days</div>
          <div className="flex items-center text-purple-400 text-sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            <span className="tracking-wider">OPTIMAL DECAY RESET</span>
          </div>
          <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Retention Curve */}
      <div className="glass-card rounded-2xl p-6 glow-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold tracking-wider uppercase text-white">Retention Curve</h3>
            <p className="text-sm text-gray-400 tracking-wider">Memory persistence over 7 days</p>
          </div>
          <TrendingUp className="h-6 w-6 text-blue-400" />
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={retentionData}>
            <defs>
              <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(99, 102, 241, 0.1)" />
            <XAxis dataKey="day" tick={{ fill: '#9ca3af', fontSize: 11 }} stroke="#4b5563" />
            <YAxis tick={{ fill: '#9ca3af' }} stroke="#4b5563" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '8px',
                color: '#fff'
              }} 
            />
            <Area type="monotone" dataKey="retention" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRetention)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Core Archetypes */}
      <div className="glass-card rounded-2xl p-6 glow-border">
        <h3 className="text-xl font-bold tracking-[0.2em] uppercase gradient-text mb-6">Core Archetypes</h3>
        <div className="space-y-4">
          {coreArchetypes.map((archetype, index) => (
            <div key={index} className="glass-card p-4 rounded-xl hover:glow-border transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{archetype.icon}</div>
                  <span className="text-white font-medium tracking-wide">{archetype.name}</span>
                </div>
                <span className="text-2xl font-bold text-white">{archetype.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${archetype.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${archetype.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="glass-card rounded-2xl p-6 glow-border">
        <h3 className="text-xl font-bold tracking-wider uppercase text-white mb-6">Recent Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`glass-card p-4 rounded-xl text-center ${
                achievement.unlocked ? 'glow-border' : 'opacity-40'
              } hover:scale-105 transition-transform cursor-pointer`}
            >
              <achievement.icon className={`h-8 w-8 mx-auto mb-2 ${achievement.color}`} />
              <div className="text-xs text-white font-medium">{achievement.name}</div>
              {achievement.unlocked && (
                <Badge className="mt-2 bg-green-500/20 text-green-400 border-green-500/30 text-xs">Unlocked</Badge>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full neon-button text-white font-bold py-6 rounded-2xl flex items-center justify-center space-x-3 text-lg tracking-wider uppercase">
        <span>Generate Optimized Path</span>
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

const Analytics = () => {
  return (
    <div className="space-y-6 cyber-grid pb-20">
      <div className="glass-card rounded-2xl p-6 glow-border">
        <h1 className="text-3xl font-bold tracking-[0.2em] uppercase gradient-text mb-2">Cognitive Analytics</h1>
        <p className="text-gray-400 tracking-wider">DEEP INSIGHTS INTO YOUR LEARNING PATTERNS</p>
      </div>

      {/* AI Predictions */}
      <div className="glass-card rounded-2xl p-6 border-l-4 border-cyan-500 glow-border-cyan">
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="h-6 w-6 text-cyan-400" />
          <h3 className="text-xl font-bold text-white tracking-wider uppercase">AI Predictions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card p-4 rounded-xl">
            <div className="text-sm text-gray-400 uppercase tracking-wider">Next Peak</div>
            <div className="text-2xl font-bold text-cyan-400">8:45 PM</div>
            <div className="text-xs text-gray-500 mt-1">In 3 hours</div>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <div className="text-sm text-gray-400 uppercase tracking-wider">Burnout Risk</div>
            <div className="text-2xl font-bold text-green-400">Low</div>
            <div className="text-xs text-gray-500 mt-1">12% probability</div>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <div className="text-sm text-gray-400 uppercase tracking-wider">Weekly Trend</div>
            <div className="text-2xl font-bold text-purple-400">↑ 18%</div>
            <div className="text-xs text-gray-500 mt-1">vs last week</div>
          </div>
        </div>
      </div>

      {/* Performance with Predictions */}
      <div className="glass-card rounded-2xl p-6 glow-border">
        <h3 className="text-xl font-bold tracking-wider uppercase text-white mb-6">Theory vs Practice vs Predicted</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={performanceData}>
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0.6}/>
              </linearGradient>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0.6}/>
              </linearGradient>
              <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.6}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(99, 102, 241, 0.1)" />
            <XAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} stroke="#4b5563" />
            <YAxis tick={{ fill: '#9ca3af' }} stroke="#4b5563" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '8px'
              }} 
            />
            <Legend />
            <Bar dataKey="theory" fill="url(#blueGradient)" name="Theory" radius={[8, 8, 0, 0]} />
            <Bar dataKey="practice" fill="url(#purpleGradient)" name="Practice" radius={[8, 8, 0, 0]} />
            <Bar dataKey="predicted" fill="url(#cyanGradient)" name="AI Predicted" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Learning Velocity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6 glow-border">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Learning Velocity</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Comprehension Speed</span>
                <span className="text-cyan-400 font-bold">1.8x</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Application Rate</span>
                <span className="text-purple-400 font-bold">1.5x</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Retention Strength</span>
                <span className="text-green-400 font-bold">2.1x</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 glow-border">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Focus Analytics</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Deep Focus Sessions</span>
                <span className="text-cyan-400 font-bold">12</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Avg Session Length</span>
                <span className="text-purple-400 font-bold">52 min</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Distraction Score</span>
                <span className="text-green-400 font-bold">Low</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="glass-card rounded-2xl p-6 border-l-4 border-purple-500 glow-border-purple">
        <div className="flex items-start space-x-3">
          <Zap className="h-6 w-6 text-purple-400 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">AI INSIGHT</h3>
            <p className="text-gray-300 mb-3">Your performance shows exceptional growth in Computer Science practical application. The AI predicts a 97% score in your upcoming assessment based on current trajectory.</p>
            <Badge className="neon-button border-0 text-white">Confidence: 94%</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

const StudyPlanner = () => {
  return (
    <div className="space-y-6 cyber-grid pb-20">
      <div className="glass-card rounded-2xl p-6 glow-border">
        <h1 className="text-3xl font-bold tracking-[0.2em] uppercase gradient-text mb-2">Adaptive Study Planner</h1>
        <p className="text-gray-400 tracking-wider">AI-POWERED COGNITIVE SCHEDULING</p>
      </div>

      {/* Today's Optimization Score */}
      <div className="glass-card rounded-2xl p-8 text-center glow-border border-cyan-500">
        <div className="inline-block">
          <div className="text-7xl font-bold gradient-text mb-2">96</div>
          <div className="text-sm text-gray-400 tracking-[0.3em] uppercase">Optimization Score</div>
          <Badge className="mt-3 neon-button border-0 text-white px-4 py-1">
            <Star className="h-3 w-3 mr-1" />
            PEAK EFFICIENCY
          </Badge>
        </div>
      </div>

      {/* Study Sessions */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">Today's Sessions</h3>
        {studySessions.map((session) => (
          <div 
            key={session.id} 
            className={`glass-card rounded-2xl p-6 border-l-4 ${
              session.color === 'cyan' ? 'border-cyan-500 glow-border-cyan' :
              session.color === 'purple' ? 'border-purple-500 glow-border-purple' :
              'border-blue-500 glow-border'
            } hover:scale-[1.02] transition-transform cursor-pointer`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-xl font-bold text-white">{session.subject}</h4>
                  <Badge className={`${
                    session.type === 'HYPER-FOCUS' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' :
                    session.type === 'PEAK TIME' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                    'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  } uppercase tracking-wider`}>
                    {session.type}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {session.time}
                  </span>
                  <span>{session.duration}</span>
                  <span className={`font-bold ${
                    session.difficulty === 'HIGH' ? 'text-red-400' :
                    session.difficulty === 'MEDIUM' ? 'text-orange-400' :
                    'text-green-400'
                  }`}>
                    {session.difficulty}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="text-xs text-gray-500 mb-1">AI Match Score</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${
                          session.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                          session.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          'from-blue-500 to-indigo-500'
                        } rounded-full`}
                        style={{ width: `${session.aiScore}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-white">{session.aiScore}%</span>
                  </div>
                </div>
              </div>
              <Button className="neon-button text-white border-0 px-8">
                <Play className="h-4 w-4 mr-2" />
                START
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="glass-card rounded-2xl p-6 glow-border">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">AI Recommendations</h3>
        <div className="space-y-3">
          <div className="glass-card p-4 rounded-xl flex items-start space-x-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Brain className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <div className="font-medium text-white">Schedule difficult topics at 8 PM</div>
              <div className="text-sm text-gray-400">Your cognitive performance peaks 45% higher during this window</div>
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex items-start space-x-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Target className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <div className="font-medium text-white">Take micro-breaks every 50 minutes</div>
              <div className="text-sm text-gray-400">Optimized for your attention span pattern</div>
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex items-start space-x-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <div className="font-medium text-white">Review Chemistry notes today</div>
              <div className="text-sm text-gray-400">Retention decay window closing - review now for 3x impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Path Button */}
      <button className="w-full neon-button text-white font-bold py-6 rounded-2xl flex items-center justify-center space-x-3 text-lg tracking-wider uppercase">
        <span>Generate Optimized Path</span>
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

const BottomNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 glass-card border-t border-blue-500/20 md:hidden z-50">
      <div className="flex items-center justify-around py-3">
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all ${
            activeTab === 'dashboard' ? 'text-blue-400' : 'text-gray-500'
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs font-medium">DNA</span>
        </button>
        <button 
          onClick={() => setActiveTab('analytics')}
          className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all ${
            activeTab === 'analytics' ? 'text-blue-400' : 'text-gray-500'
          }`}
        >
          <Activity className="h-5 w-5" />
          <span className="text-xs font-medium">Memory</span>
        </button>
        <button 
          onClick={() => setActiveTab('planner')}
          className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all ${
            activeTab === 'planner' ? 'text-blue-400' : 'text-gray-500'
          }`}
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-medium">Path</span>
        </button>
        <button className="flex flex-col items-center space-y-1 px-4 py-2 rounded-lg text-gray-500">
          <User className="h-5 w-5" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0e27]">
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
      
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
