import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Sparkles, TrendingUp, TrendingDown, Play, Pause, MoreVertical, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const campaigns = [
  {
    id: 1,
    name: 'Tech Leaders Outreach',
    status: 'active',
    performance: 'high',
    leads: 342,
    conversions: 128,
    conversionRate: 37.4,
    budget: 5000,
    spent: 3420,
    roi: 284,
    trend: 'up',
  },
  {
    id: 2,
    name: 'SaaS Decision Makers',
    status: 'active',
    performance: 'high',
    leads: 289,
    conversions: 94,
    conversionRate: 32.5,
    budget: 4500,
    spent: 3150,
    roi: 198,
    trend: 'up',
  },
  {
    id: 3,
    name: 'Enterprise CTOs',
    status: 'active',
    performance: 'medium',
    leads: 156,
    conversions: 54,
    conversionRate: 34.6,
    budget: 6000,
    spent: 5240,
    roi: 142,
    trend: 'down',
  },
  {
    id: 4,
    name: 'Startup Founders',
    status: 'paused',
    performance: 'low',
    leads: 98,
    conversions: 28,
    conversionRate: 28.6,
    budget: 3000,
    spent: 2890,
    roi: 87,
    trend: 'down',
  },
];

const performanceData = [
  { day: 'Mon', leads: 45, conversions: 16 },
  { day: 'Tue', leads: 52, conversions: 19 },
  { day: 'Wed', leads: 48, conversions: 17 },
  { day: 'Thu', leads: 61, conversions: 22 },
  { day: 'Fri', leads: 58, conversions: 21 },
  { day: 'Sat', leads: 34, conversions: 12 },
  { day: 'Sun', leads: 28, conversions: 10 },
];

export function AICampaigns() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-slate-900 mb-2">AI Campaigns</h1>
          <p className="text-slate-600">AI-powered campaigns optimized for performance</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Active Campaigns</CardTitle>
            <Sparkles className="w-5 h-5 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">12</div>
            <p className="text-slate-600">3 paused, 8 completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Total Leads Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">885</div>
            <p className="text-slate-600">From active campaigns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Avg. Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">33.3%</div>
            <p className="text-slate-600">Above industry avg.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Average ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">178%</div>
            <p className="text-slate-600">Across all campaigns</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Weekly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" stroke="#64748b" />
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

      {/* Campaign List */}
      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-slate-900">{campaign.name}</h3>
                      <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                        {campaign.status}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          campaign.performance === 'high'
                            ? 'border-green-500 text-green-700'
                            : campaign.performance === 'medium'
                            ? 'border-amber-500 text-amber-700'
                            : 'border-red-500 text-red-700'
                        }
                      >
                        {campaign.performance} performance
                      </Badge>
                    </div>
                    <div className="flex items-center gap-6 text-slate-600">
                      <span>{campaign.leads} leads</span>
                      <span>{campaign.conversions} conversions</span>
                      <span>{campaign.conversionRate}% rate</span>
                      <span className="flex items-center gap-1">
                        {campaign.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                        {campaign.roi}% ROI
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      {campaign.status === 'active' ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2 text-slate-600">
                    <span>Budget</span>
                    <span>
                      ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={(campaign.spent / campaign.budget) * 100} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
