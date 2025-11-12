import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Download, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, FunnelChart, Funnel, Cell, LabelList } from 'recharts';

const funnelData = [
  { stage: 'Visitors', value: 5420, fill: '#3b82f6' },
  { stage: 'Leads', value: 2840, fill: '#6366f1' },
  { stage: 'Qualified', value: 1520, fill: '#8b5cf6' },
  { stage: 'Proposals', value: 680, fill: '#a855f7' },
  { stage: 'Customers', value: 234, fill: '#c026d3' },
];

const conversionRates = [
  { stage: 'Visitors → Leads', rate: 52.4 },
  { stage: 'Leads → Qualified', rate: 53.5 },
  { stage: 'Qualified → Proposals', rate: 44.7 },
  { stage: 'Proposals → Customers', rate: 34.4 },
];

const weeklyData = [
  { week: 'Week 1', conversions: 42 },
  { week: 'Week 2', conversions: 55 },
  { week: 'Week 3', conversions: 48 },
  { week: 'Week 4', conversions: 67 },
];

const topSources = [
  { source: 'AI Campaign - Tech Leaders', leads: 342, conversions: 128, rate: 37.4 },
  { source: 'Organic Search', leads: 289, conversions: 94, rate: 32.5 },
  { source: 'LinkedIn Ads', leads: 234, conversions: 81, rate: 34.6 },
  { source: 'Referral Program', leads: 198, conversions: 76, rate: 38.4 },
  { source: 'Content Marketing', leads: 167, conversions: 52, rate: 31.1 },
];

export function LeadConversions() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-slate-900 mb-2">Lead Conversions</h1>
          <p className="text-slate-600">Monitor your lead journey and conversion metrics</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Overall Conversion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-1">34.8%</div>
            <p className="text-slate-600">From lead to customer</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-1">2,840</div>
            <p className="text-slate-600">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-1">234</div>
            <p className="text-slate-600">New customers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Avg. Time to Convert</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-1">18 days</div>
            <p className="text-slate-600">3 days faster</p>
          </CardContent>
        </Card>
      </div>

      {/* Funnel Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelData.map((item, index) => {
                const percentage = index === 0 ? 100 : (item.value / funnelData[0].value) * 100;
                
                return (
                  <div key={item.stage}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-900">{item.stage}</span>
                      <span className="text-slate-600">{item.value.toLocaleString()}</span>
                    </div>
                    <div className="relative h-12 bg-slate-100 rounded-lg overflow-hidden">
                      <div
                        className="h-full flex items-center justify-center transition-all"
                        style={{ width: `${percentage}%`, backgroundColor: item.fill }}
                      >
                        <span className="text-white">{percentage.toFixed(1)}%</span>
                      </div>
                    </div>
                    {index < funnelData.length - 1 && (
                      <div className="flex items-center justify-center my-2">
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Rates by Stage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {conversionRates.map((item) => (
                <div key={item.stage}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-600">{item.stage}</span>
                    <span className="text-slate-900">{item.rate}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Trend */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Weekly Conversion Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Bar dataKey="conversions" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Converting Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Top Converting Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-600">Source</th>
                  <th className="text-right py-3 px-4 text-slate-600">Leads</th>
                  <th className="text-right py-3 px-4 text-slate-600">Conversions</th>
                  <th className="text-right py-3 px-4 text-slate-600">Rate</th>
                  <th className="text-right py-3 px-4 text-slate-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {topSources.map((source) => (
                  <tr key={source.source} className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer">
                    <td className="py-4 px-4 text-slate-900">{source.source}</td>
                    <td className="py-4 px-4 text-right text-slate-900">{source.leads}</td>
                    <td className="py-4 px-4 text-right text-slate-900">{source.conversions}</td>
                    <td className="py-4 px-4 text-right text-slate-900">{source.rate}%</td>
                    <td className="py-4 px-4 text-right">
                      <Badge variant={source.rate > 35 ? 'default' : 'secondary'}>
                        {source.rate > 35 ? 'High' : 'Medium'}
                      </Badge>
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
