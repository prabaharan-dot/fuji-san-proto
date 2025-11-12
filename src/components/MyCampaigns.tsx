import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Sparkles, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const myCampaigns = [
  {
    id: 1,
    name: 'Tech Leaders Outreach',
    status: 'active',
    role: 'Lead Generator',
    myLeads: 89,
    myConversions: 38,
    conversionRate: 42.7,
    myRevenue: 48600,
    teamLeads: 342,
    startDate: '2025-10-15',
  },
  {
    id: 2,
    name: 'SaaS Decision Makers',
    status: 'active',
    role: 'Lead Generator',
    myLeads: 67,
    myConversions: 30,
    conversionRate: 44.8,
    myRevenue: 40800,
    teamLeads: 289,
    startDate: '2025-10-20',
  },
];

const campaignPerformance = [
  { week: 'Week 1', leads: 18, conversions: 7 },
  { week: 'Week 2', leads: 24, conversions: 11 },
  { week: 'Week 3', leads: 21, conversions: 9 },
  { week: 'Week 4', leads: 26, conversions: 11 },
];

const topActivities = [
  { activity: 'Emails Sent', count: 234, trend: '+12%' },
  { activity: 'Calls Made', count: 89, trend: '+8%' },
  { activity: 'Meetings Scheduled', count: 42, trend: '+15%' },
  { activity: 'Proposals Sent', count: 28, trend: '+5%' },
];

export function MyCampaigns() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-slate-900 mb-2">My Campaigns</h1>
        <p className="text-slate-600">Your active AI-powered campaigns and performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Active Campaigns</CardTitle>
            <Sparkles className="w-5 h-5 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{myCampaigns.length}</div>
            <p className="text-slate-600">Participating in</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">My Leads</CardTitle>
            <Users className="w-5 h-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">
              {myCampaigns.reduce((sum, c) => sum + c.myLeads, 0)}
            </div>
            <p className="text-slate-600">From campaigns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Conversions</CardTitle>
            <Target className="w-5 h-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">
              {myCampaigns.reduce((sum, c) => sum + c.myConversions, 0)}
            </div>
            <p className="text-slate-600">
              {((myCampaigns.reduce((sum, c) => sum + c.myConversions, 0) /
                myCampaigns.reduce((sum, c) => sum + c.myLeads, 0)) *
                100).toFixed(1)}% rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Revenue</CardTitle>
            <DollarSign className="w-5 h-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">
              ${myCampaigns.reduce((sum, c) => sum + c.myRevenue, 0).toLocaleString()}
            </div>
            <p className="text-slate-600">Generated</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>My Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={campaignPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-slate-600">Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-slate-600">Conversions</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Cards */}
      <div className="space-y-6 mb-8">
        <h2 className="text-slate-900">Active Campaigns</h2>
        {myCampaigns.map((campaign) => (
          <Card key={campaign.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-slate-900">{campaign.name}</h3>
                    <Badge variant="default">Active</Badge>
                    <Badge variant="outline">{campaign.role}</Badge>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Started {new Date(campaign.startDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <div className="text-slate-900">{campaign.myLeads}</div>
                      <p className="text-slate-600">My Leads</p>
                    </div>
                    <div>
                      <div className="text-slate-900">{campaign.myConversions}</div>
                      <p className="text-slate-600">My Conversions</p>
                    </div>
                    <div>
                      <div className="text-slate-900">{campaign.conversionRate}%</div>
                      <p className="text-slate-600">Conversion Rate</p>
                    </div>
                    <div>
                      <div className="text-slate-900">${campaign.myRevenue.toLocaleString()}</div>
                      <p className="text-slate-600">Revenue Generated</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">My contribution to campaign</span>
                  <span className="text-slate-900">
                    {campaign.myLeads} of {campaign.teamLeads} leads (
                    {((campaign.myLeads / campaign.teamLeads) * 100).toFixed(1)}%)
                  </span>
                </div>
                <Progress value={(campaign.myLeads / campaign.teamLeads) * 100} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Summary */}
      <Card>
        <CardHeader>
          <CardTitle>My Activity Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topActivities.map((activity) => (
              <div key={activity.activity} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">{activity.activity}</span>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-slate-900 mb-1">{activity.count}</div>
                <p className="text-green-600">{activity.trend} this month</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
