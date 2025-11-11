import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, Target, Zap, Trophy, TrendingUp, Award, Star } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Avatar, AvatarFallback } from '../../ui/avatar';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface DashboardProps {
  // generic navigation handler to support both admin and user views
  onNavigate: (view: any) => void;
}

const revenueData = [
  { month: 'Jan', revenue: 45000, goal: 50000 },
  { month: 'Feb', revenue: 52000, goal: 55000 },
  { month: 'Mar', revenue: 48000, goal: 55000 },
  { month: 'Apr', revenue: 61000, goal: 60000 },
  { month: 'May', revenue: 68000, goal: 65000 },
  { month: 'Jun', revenue: 72000, goal: 70000 },
];

const campaignData = [
  { name: 'Active', value: 12, color: '#3b82f6' },
  { name: 'Paused', value: 3, color: '#94a3b8' },
  { name: 'Completed', value: 8, color: '#10b981' },
];

const leadSourceData = [
  { source: 'AI Campaigns', leads: 245 },
  { source: 'Organic', leads: 189 },
  { source: 'Referral', leads: 134 },
  { source: 'Direct', leads: 98 },
];

const employeeLeaderboard = [
  { id: 1, name: 'Sarah Chen', role: 'Senior Sales Rep', points: 2850, leads: 156, conversions: 68, revenue: 89400, trend: 'up', change: 12, badges: ['Pipeline Builder', 'Deal Closer'] },
  { id: 2, name: 'Michael Rodriguez', role: 'Sales Rep', points: 2720, leads: 142, conversions: 64, revenue: 84200, trend: 'up', change: 8, badges: ['Deal Closer'] },
  { id: 3, name: 'Emily Thompson', role: 'Senior Sales Rep', points: 2640, leads: 138, conversions: 59, revenue: 78900, trend: 'up', change: 15, badges: ['Raising Star'] },
  { id: 4, name: 'James Park', role: 'Sales Rep', points: 2480, leads: 129, conversions: 54, revenue: 71200, trend: 'down', change: -3, badges: [] },
  { id: 5, name: 'Lisa Anderson', role: 'Sales Rep', points: 2350, leads: 121, conversions: 51, revenue: 68500, trend: 'up', change: 5, badges: ['First Win'] },
];

const teamLeaderboard = [
  { id: 1, name: 'Enterprise Sales', members: 8, points: 18450, conversions: 342, revenue: 456800, avgConversionRate: 42.3, trend: 'up' },
  { id: 2, name: 'SMB Growth', members: 12, points: 16890, conversions: 298, revenue: 389200, avgConversionRate: 38.7, trend: 'up' },
  { id: 3, name: 'Strategic Accounts', members: 6, points: 14220, conversions: 256, revenue: 398600, avgConversionRate: 45.1, trend: 'up' },
  { id: 4, name: 'New Markets', members: 10, points: 12340, conversions: 214, revenue: 287400, avgConversionRate: 34.2, trend: 'down' },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  const topPerformer = employeeLeaderboard[0];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's your performance overview.</p>
      </div>

      {/* Top Performer Highlight */}
      <Card className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hide">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-slate-900">Top Sales Rep This Month</h2>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                    <Star className="w-3 h-3 mr-1" />
                    #1 Performer
                  </Badge>
                </div>
                <p className="text-slate-600 mb-3">{topPerformer.name} • {topPerformer.role}</p>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-slate-900">{topPerformer.conversions} Conversions</div>
                    <p className="text-slate-600">From {topPerformer.leads} leads</p>
                  </div>
                  <div>
                    <div className="text-slate-900">${topPerformer.revenue.toLocaleString()} Revenue</div>
                    <p className="text-slate-600">Generated this month</p>
                  </div>
                  <div>
                    <div className="text-slate-900">{topPerformer.points.toLocaleString()} Points</div>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-slate-600">+{topPerformer.change}% from last month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate('revenue')}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Total Revenue</CardTitle>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">$346,000</div>
            <div className="flex items-center gap-1 text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-slate-600">12.5% vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate('leads')}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Lead Conversions</CardTitle>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">34.8%</div>
            <div className="flex items-center gap-1 text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-slate-600">5.2% vs last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Goal Progress</CardTitle>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">86%</div>
            <div className="flex items-center gap-1 text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-slate-600">On track</span>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate('campaigns')}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">AI Campaigns</CardTitle>
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">12 Active</div>
            <div className="flex items-center gap-1 text-red-600 mt-1">
              <ArrowDownRight className="w-4 h-4" />
              <span className="text-slate-600">2 need attention</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Employee Leaderboard */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <CardTitle>Employee Leaderboard</CardTitle>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {employeeLeaderboard.map((employee, index) => (
                <div
                  key={employee.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-xs">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-900">{employee.name}</span>
                        {employee.badges && employee.badges.length > 0 && (
                          <div className="flex items-center gap-1 ml-2">
                            {employee.badges.map((b) => (
                              <Badge key={b} variant="outline" className="text-xs px-2 py-0.5">
                                {b}
                              </Badge>
                            ))}
                          </div>
                        )}
                        {index === 0 && <Award className="w-4 h-4 text-amber-500" />}
                      </div>
                      <p className="text-slate-600">{employee.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-900">{employee.points.toLocaleString()} pts</div>
                    <div className="flex items-center gap-1 justify-end">
                      {employee.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3 text-green-600" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 text-red-600" />
                      )}
                      <span className={employee.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                        {employee.change > 0 ? '+' : ''}{employee.change}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Leaderboard */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <CardTitle>Team Leaderboard</CardTitle>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamLeaderboard.map((team, index) => (
                <div
                  key={team.id}
                  className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        index === 0 ? 'bg-gradient-to-br from-amber-400 to-amber-600' :
                        index === 1 ? 'bg-gradient-to-br from-slate-300 to-slate-400' :
                        index === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                        'bg-slate-200'
                      }`}>
                        <span className={index < 3 ? 'text-white' : 'text-slate-600'}>
                          #{index + 1}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-900">{team.name}</span>
                          {index === 0 && <Trophy className="w-4 h-4 text-amber-500" />}
                        </div>
                        <p className="text-slate-600">{team.members} members</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-900">{team.points.toLocaleString()} pts</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-slate-900">{team.conversions}</div>
                      <p className="text-slate-600">Conversions</p>
                    </div>
                    <div>
                      <div className="text-slate-900">${(team.revenue / 1000).toFixed(0)}K</div>
                      <p className="text-slate-600">Revenue</p>
                    </div>
                    <div>
                      <div className="text-slate-900">{team.avgConversionRate}%</div>
                      <p className="text-slate-600">Avg. Rate</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="goal" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={leadSourceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="source" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="leads" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Overview */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Campaign Performance</CardTitle>
          <Button variant="outline" size="sm" onClick={() => onNavigate('campaigns')}>
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-8">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={campaignData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {campaignData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-6">
              {campaignData.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-600">{item.name}</span>
                  </div>
                  <div className="text-slate-900">{item.value} campaigns</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
