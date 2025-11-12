import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Sparkles, Send, TrendingUp, AlertCircle, Lightbulb, Users, Target, DollarSign, BarChart3, Brain, MessageSquare, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const insights = [
  {
    id: 1,
    type: 'opportunity',
    priority: 'high',
    title: 'Revenue Opportunity Detected',
    description: 'Enterprise Sales team conversion rate is 7% above average. Consider allocating more resources to this segment.',
    impact: '+$45K potential revenue',
    icon: DollarSign,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    type: 'alert',
    priority: 'medium',
    title: 'Campaign Performance Alert',
    description: 'New Markets team campaign performance dropped 12% this week. Recommended: Review messaging and targeting.',
    impact: 'Affecting 10 team members',
    icon: AlertCircle,
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    type: 'suggestion',
    priority: 'high',
    title: 'Team Optimization Recommendation',
    description: 'Michael Rodriguez and Lisa Anderson have complementary skills. Pairing them could increase conversion rates by ~8%.',
    impact: '+15 conversions/month',
    icon: Users,
    timestamp: '1 day ago',
  },
  {
    id: 4,
    type: 'forecast',
    priority: 'low',
    title: 'Revenue Forecast Update',
    description: 'Based on current trends, Q4 revenue is projected to exceed target by 12%. Consider raising Q1 goals.',
    impact: '+$68K above target',
    icon: TrendingUp,
    timestamp: '1 day ago',
  },
];

const chatHistory = [
  {
    id: 1,
    type: 'user',
    message: 'What are the top 3 factors affecting our conversion rates this month?',
    timestamp: '10:32 AM',
  },
  {
    id: 2,
    type: 'assistant',
    message: 'Based on the data, here are the top 3 factors:\n\n1. **Lead Response Time** - Teams responding within 2 hours have 34% higher conversion rates\n2. **Lead Source Quality** - AI Campaign leads convert 18% better than organic leads\n3. **Sales Rep Experience** - Senior reps (2+ years) show 23% higher conversion rates\n\nWould you like specific recommendations for improving any of these areas?',
    timestamp: '10:32 AM',
  },
  {
    id: 3,
    type: 'user',
    message: 'How can we improve lead response time?',
    timestamp: '10:34 AM',
  },
  {
    id: 4,
    type: 'assistant',
    message: 'Here are actionable recommendations to improve lead response time:\n\n**Immediate Actions:**\n• Enable automated lead routing to available reps\n• Set up instant notifications for high-priority leads\n• Create response time SLAs and tracking\n\n**Team Changes:**\n• Implement rotating lead duty shifts\n• Assign backup reps for coverage gaps\n\n**Tools:**\n• Deploy AI agents for initial engagement\n• Use chatbots for 24/7 qualification\n\nImplementing these could reduce response time from 4.2 to ~1.5 hours, potentially increasing conversions by 15-20%.',
    timestamp: '10:34 AM',
  },
];

const quickActions = [
  { id: 1, label: 'Analyze team performance', icon: Users },
  { id: 2, label: 'Forecast next quarter revenue', icon: TrendingUp },
  { id: 3, label: 'Optimize campaign allocation', icon: Target },
  { id: 4, label: 'Identify at-risk deals', icon: AlertCircle },
  { id: 5, label: 'Generate performance report', icon: BarChart3 },
  { id: 6, label: 'Suggest team improvements', icon: Lightbulb },
];

const assistantTypes = [
  {
    id: 1,
    name: 'Strategy Advisor',
    description: 'Long-term planning and strategic recommendations',
    active: true,
    tasks: ['Revenue forecasting', 'Market analysis', 'Goal planning'],
  },
  {
    id: 2,
    name: 'Performance Analyst',
    description: 'Real-time performance monitoring and insights',
    active: true,
    tasks: ['Team analytics', 'KPI tracking', 'Anomaly detection'],
  },
  {
    id: 3,
    name: 'Optimization Expert',
    description: 'Process improvement and resource allocation',
    active: true,
    tasks: ['Campaign optimization', 'Resource allocation', 'Workflow improvement'],
  },
];

export function AdminAIAssistant() {
  const [message, setMessage] = useState('');
  const [activeChat, setActiveChat] = useState(chatHistory);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: activeChat.length + 1,
      type: 'user' as const,
      message: message,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };
    
    setActiveChat([...activeChat, newMessage]);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: activeChat.length + 2,
        type: 'assistant' as const,
        message: 'I\'m analyzing your request. This is a demo response showing how the AI assistant would provide strategic insights and recommendations based on your data.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setActiveChat(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-slate-900">AI Assistant</h1>
        </div>
        <p className="text-slate-600">Get strategic insights, forecasts, and recommendations powered by AI</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">Active Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{insights.length}</div>
            <p className="text-slate-600">2 high priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">Assistants Running</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{assistantTypes.filter(a => a.active).length}</div>
            <p className="text-slate-600">Monitoring your business</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">12</div>
            <p className="text-slate-600">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">Forecast Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">94.2%</div>
            <p className="text-slate-600">Last 3 months</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Interface */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle>Strategy Advisor</CardTitle>
                    <p className="text-slate-600">Ask me anything about your business</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-green-500 text-green-700">
                  Online
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {activeChat.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex gap-3 ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {chat.type === 'assistant' && (
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                          AI
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        chat.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-900'
                      }`}
                    >
                      <p className="whitespace-pre-line">{chat.message}</p>
                      <p
                        className={`text-xs mt-2 ${
                          chat.type === 'user' ? 'text-blue-100' : 'text-slate-500'
                        }`}
                      >
                        {chat.timestamp}
                      </p>
                    </div>
                    {chat.type === 'user' && (
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarFallback className="bg-blue-600 text-white">
                          AD
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="p-4 border-t border-slate-200">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask about performance, forecasts, optimizations..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {quickActions.slice(0, 3).map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.id}
                      variant="outline"
                      size="sm"
                      onClick={() => setMessage(action.label)}
                    >
                      <Icon className="w-3 h-3 mr-2" />
                      {action.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.id}
                      onClick={() => setMessage(action.label)}
                      className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
                    >
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <p className="text-slate-900">{action.label}</p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.slice(0, 3).map((insight) => {
                  const Icon = insight.icon;
                  return (
                    <div
                      key={insight.id}
                      className="p-3 border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          insight.priority === 'high'
                            ? 'bg-red-100'
                            : insight.priority === 'medium'
                            ? 'bg-amber-100'
                            : 'bg-blue-100'
                        }`}>
                          <Icon className={`w-4 h-4 ${
                            insight.priority === 'high'
                              ? 'text-red-600'
                              : insight.priority === 'medium'
                              ? 'text-amber-600'
                              : 'text-blue-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant={insight.priority === 'high' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {insight.priority}
                            </Badge>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {insight.timestamp}
                            </span>
                          </div>
                          <h4 className="text-slate-900 mb-1">{insight.title}</h4>
                          <p className="text-slate-600 text-sm mb-2">{insight.description}</p>
                          <p className="text-blue-600">{insight.impact}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Button variant="outline" className="w-full">
                  View All Insights
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Active Assistants */}
          <Card>
            <CardHeader>
              <CardTitle>Active Assistants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {assistantTypes.map((assistant) => (
                  <div
                    key={assistant.id}
                    className="p-3 bg-slate-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-slate-900">{assistant.name}</h4>
                      <Badge variant="outline" className="border-green-500 text-green-700">
                        Active
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">{assistant.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {assistant.tasks.map((task) => (
                        <span
                          key={task}
                          className="px-2 py-1 bg-white text-slate-600 rounded text-xs"
                        >
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
