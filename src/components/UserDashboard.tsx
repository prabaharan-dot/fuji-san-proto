import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, Target, TrendingUp, Award, Star, Trophy } from 'lucide-react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const myPerformanceData = [
  { week: 'Week 1', leads: 28, conversions: 12 },
  { week: 'Week 2', leads: 34, conversions: 15 },
  { week: 'Week 3', leads: 31, conversions: 13 },
  { week: 'Week 4', leads: 39, conversions: 17 },
];

const myRevenueData = [
  { month: 'Jan', revenue: 12400 },
  { month: 'Feb', revenue: 15200 },
  { month: 'Mar', revenue: 13800 },
  { month: 'Apr', revenue: 17600 },
  { month: 'May', revenue: 19200 },
  { month: 'Jun', revenue: 21800 },
];

const recentLeads = [
  { id: 1, name: 'Acme Corporation', status: 'Converted', value: 12500, date: '2025-11-08' },
  { id: 2, name: 'Tech Innovations Ltd', status: 'Qualified', value: 8900, date: '2025-11-09' },
  { id: 3, name: 'Global Solutions Inc', status: 'In Progress', value: 15200, date: '2025-11-10' },
  { id: 4, name: 'Digital Dynamics', status: 'Converted', value: 9800, date: '2025-11-10' },
  { id: 5, name: 'Future Systems', status: 'Qualified', value: 11300, date: '2025-11-11' },
];

const myRanking = {
  overall: 2,
  total: 45,
  inTeam: 1,
  teamSize: 8,
};

export function UserDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-slate-900 mb-2">My Dashboard</h1>
        <p className="text-slate-600">Welcome back, Sarah! Here's your personal performance overview.</p>
      </div>

      {/* Personal Achievement Banner */}
      <Card className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-slate-900">You're Rank #{myRanking.overall} Overall!</h2>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                    <Star className="w-3 h-3 mr-1" />
                    Top Performer
                  </Badge>
                </div>
                <p className="text-slate-600 mb-3">
                  #1 in your team • Top 5% company-wide
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-slate-900">2,850 Points</div>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-slate-600">+12% this month</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-900">156 Leads</div>
                    <p className="text-slate-600">This month</p>
                  </div>
                  <div>
                    <div className="text-slate-900">68 Conversions</div>
                    <p className="text-slate-600">43.6% rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">My Revenue</CardTitle>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">$89,400</div>
            <div className="flex items-center gap-1 text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-slate-600">18.2% vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Active Leads</CardTitle>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">34</div>
            <div className="flex items-center gap-1 text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-slate-600">8 new this week</span>
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
            <div className="text-slate-900">92%</div>
            <div className="flex items-center gap-1 text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-slate-600">Ahead of target</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Conversion Rate</CardTitle>
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-amber-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">43.6%</div>
            <div className="flex items-center gap-1 text-green-600 mt-1">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-slate-600">Above team avg</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>My Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={myRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={myPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="leads" fill="#93c5fd" radius={[8, 8, 0, 0]} />
                <Bar dataKey="conversions" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full" />
                <span className="text-slate-600">Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-slate-600">Conversions</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Goals */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>My Monthly Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-900">Revenue Target</span>
                <span className="text-slate-600">$89,400 / $95,000</span>
              </div>
              <Progress value={94} className="mb-1" />
              <p className="text-slate-600">94% complete • $5,600 to go</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-900">Lead Conversions</span>
                <span className="text-slate-600">68 / 70</span>
              </div>
              <Progress value={97} className="mb-1" />
              <p className="text-slate-600">97% complete • 2 conversions to go</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-900">New Leads Generated</span>
                <span className="text-slate-600">156 / 150</span>
              </div>
              <Progress value={104} className="mb-1" />
              <p className="text-green-600">Goal exceeded! 🎉</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-600">Company</th>
                  <th className="text-left py-3 px-4 text-slate-600">Status</th>
                  <th className="text-right py-3 px-4 text-slate-600">Value</th>
                  <th className="text-right py-3 px-4 text-slate-600">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer">
                    <td className="py-4 px-4 text-slate-900">{lead.name}</td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          lead.status === 'Converted'
                            ? 'default'
                            : lead.status === 'Qualified'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-right text-slate-900">
                      ${lead.value.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-slate-600">
                      {new Date(lead.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
