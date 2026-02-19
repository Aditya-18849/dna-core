# NeuroAlly - AI-Driven Education Platform

**Trithon 2026 Project**

A responsive, high-fidelity frontend for an AI-driven education platform featuring personalized learning powered by cognitive analytics.

## 🚀 Live Demo

**URL:** https://burnout-detect-1.preview.emergentagent.com

## ✨ Key Features

### 1. Student Dashboard
- **Learning DNA Visualization**: Dynamic cognitive fingerprint displayed as a radar chart showing:
  - Visual Learning (85%)
  - Auditory Learning (70%)
  - Kinesthetic Learning (65%)
  - Logical Reasoning (90%)
  - Creative Thinking (75%)
  - Memory Retention (80%)

- **Burnout Detector** (Unique Feature): Real-time cognitive fatigue monitoring with:
  - Visual battery indicator that changes based on fatigue level
  - Three states: Fresh & Ready (green), Moderate Load (orange), High Fatigue (red)
  - Actionable suggestions for breaks and recovery
  - Progress bar showing cognitive load percentage

- **Real-time Metrics Cards**:
  - Learning Speed: 1.4x (above average pace)
  - Focus Duration: 45 min average session
  - Retention Rate: 82% strong memory performance

- **Quick Stats**: Topics mastered, quiz accuracy, active goals, XP earned

### 2. Analytics View
- **Theory vs Practice Performance**: Interactive bar chart comparing theoretical understanding with practical application across subjects
- **Retention Decay Curve**: Area chart showing how well information is retained over time (Day 1 to Day 30)
- **Mistake Patterns**: Horizontal bar chart identifying common error categories
- **AI-Generated Insights**: Personalized recommendations based on performance data

### 3. Adaptive Study Planner
- **Peak Focus Times Banner**: Highlights optimal learning periods (Morning & Evening peaks)
- **Today's Optimized Schedule**: 
  - Color-coded sessions by type (Peak Focus, Practice, Review)
  - Time slots, duration, and difficulty levels
  - "Start Session" buttons for each activity
- **AI Recommendations**: Smart suggestions for scheduling and study techniques
- **Weekly Goals Tracker**: Progress bars for active learning objectives

## 🎨 Design System

### Color Palette
- **Primary**: Soft blues (#3b82f6) - Main actions and branding
- **Accent**: Orange (#f97316) - Highlights and peak focus indicators
- **Background**: Clean whites and soft grays
- **Semantic Colors**: 
  - Green for positive metrics
  - Orange for warnings/moderate states
  - Red for high fatigue/critical alerts

### Typography & Layout
- Modern, clean sans-serif fonts
- Card-based layout for information hierarchy
- Responsive grid system (1, 2, or 3 columns based on screen size)
- Mobile-first design approach

### Components
- Shadcn/ui component library for consistent design
- Lucide React icons throughout
- Recharts for all data visualizations
- Progress bars and gauges for metrics

## 📱 Responsive Design

✅ **Desktop View** (1920x1080): Full dashboard with side-by-side cards
✅ **Tablet View** (768px+): Adjusted grid layouts
✅ **Mobile View** (375px): Stacked cards, hamburger menu, optimized charts

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: JavaScript (React)

## 📊 Data Visualization Features

All charts use **mock data** for demonstration:

1. **Radar Chart**: Learning DNA cognitive fingerprint
2. **Bar Chart**: Theory vs Practice performance comparison
3. **Area Chart**: Retention decay curve over 30 days
4. **Horizontal Bar Chart**: Mistake pattern analysis
5. **Progress Bars**: Goal tracking and metric indicators
6. **Custom Gauges**: Burnout detector visualization

## 🎯 Unique Selling Points

### 1. Burnout Detector Widget
- **Innovation**: First-of-its-kind cognitive fatigue monitoring
- **Visual Appeal**: Battery-style indicator that's instantly recognizable
- **Actionable**: Provides specific break recommendations
- **Real-time**: Updates based on learning patterns

### 2. Learning DNA Visualization
- **Personalization**: Unique "fingerprint" for each learner
- **Comprehensive**: Covers 6 cognitive dimensions
- **Insightful**: Identifies strongest learning modalities

### 3. Peak Focus Times
- **AI-Driven**: Schedules hard topics during optimal hours
- **Efficiency**: Maximizes learning effectiveness
- **Adaptive**: Adjusts based on performance data

## 🚦 Pages Navigation

- **Dashboard**: Main landing page with overview metrics
- **Analytics**: Deep dive into learning patterns and performance
- **Study Planner**: Personalized schedule based on cognitive data

## 📁 Project Structure

```
/app
├── app/
│   ├── page.js          # Main application (all 3 pages)
│   ├── layout.js        # Root layout with metadata
│   └── globals.css      # Global styles & design tokens
├── components/ui/       # Shadcn components (pre-installed)
├── lib/                 # Utility functions
└── README.md           # This file
```

## 🎨 Design Philosophy

**"Netflix for Education"** - The interface emphasizes:
- Highly personalized content
- Data-driven recommendations
- Clean, modern aesthetic
- Engaging visualizations
- Intuitive navigation

## 🔄 Current State: Frontend MVP

✅ All 3 core pages built and functional
✅ Responsive design (mobile + desktop)
✅ Beautiful UI with professional EdTech feel
✅ Interactive charts and visualizations
✅ Mock data for demonstration
✅ Burnout Detector widget (signature feature)
✅ Learning DNA visualization
✅ Peak Focus Times highlighting

## 🚀 Next Steps for Full Integration

When ready to connect backend:

1. **REST API Endpoints** (Node.js backend):
   - `/api/user/profile` - Learning DNA data
   - `/api/metrics/realtime` - Live metrics
   - `/api/burnout/status` - Cognitive fatigue level
   - `/api/analytics/performance` - Subject performance
   - `/api/analytics/retention` - Retention curves
   - `/api/planner/schedule` - Study sessions

2. **Python AI Layer Integration**:
   - Cognitive pattern analysis
   - Personalized recommendations
   - Burnout prediction models
   - Optimal scheduling algorithms

3. **State Management**: Add context/Redux for real-time updates

4. **Authentication**: User login and profile management

5. **Data Persistence**: MongoDB for user progress tracking

## 📝 Notes

- All data is currently **mock/placeholder data**
- Charts and metrics are fully functional with static data
- Ready for API integration when backend is available
- No backend dependencies - pure frontend showcase

## 🎓 Trithon 2026

Built for Trithon 2026 - Demonstrating the future of personalized, AI-driven education with cognitive analytics at its core.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Recharts**
