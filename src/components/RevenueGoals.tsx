import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Plus, TrendingUp, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const monthlyData = [
  { month: 'Jan', actual: 45000, goal: 50000, forecast: 46000 },
  { month: 'Feb', actual: 52000, goal: 55000, forecast: 53000 },
  { month: 'Mar', actual: 48000, goal: 55000, forecast: 51000 },
  { month: 'Apr', actual: 61000, goal: 60000, forecast: 62000 },
  { month: 'May', actual: 68000, goal: 65000, forecast: 69000 },
  { month: 'Jun', actual: 72000, goal: 70000, forecast: 73000 },
  { month: 'Jul', actual: 0, goal: 75000, forecast: 76000 },
  { month: 'Aug', actual: 0, goal: 80000, forecast: 82000 },
];

const goals = [
  { id: 1, name: 'Q2 Revenue Target', current: 181000, target: 210000, deadline: '2025-06-30', status: 'on-track' },
  { id: 2, name: 'Annual Recurring Revenue', current: 520000, target: 750000, deadline: '2025-12-31', status: 'on-track' },
  { id: 3, name: 'New Customer Revenue', current: 84000, target: 120000, deadline: '2025-09-30', status: 'at-risk' },
];

export function RevenueGoals() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-slate-900 mb-2">Revenue Goals</h1>
          <p className="text-slate-600">Track and manage your revenue targets</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Goal
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Current Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-2">$72,000</div>
            <Progress value={103} className="mb-2" />
            <p className="text-slate-600">103% of $70,000 goal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Quarter Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-2">$181,000</div>
            <Progress value={86} className="mb-2" />
            <p className="text-slate-600">86% of $210,000 goal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Year to Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-2">$346,000</div>
            <Progress value={69} className="mb-2" />
            <p className="text-slate-600">69% of $500,000 goal</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Trend Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Revenue Trend & Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Area type="monotone" dataKey="goal" stroke="#94a3b8" fill="#f1f5f9" strokeWidth={2} />
              <Area type="monotone" dataKey="forecast" stroke="#a855f7" fill="#f3e8ff" strokeWidth={2} strokeDasharray="5 5" />
              <Area type="monotone" dataKey="actual" stroke="#3b82f6" fill="#dbeafe" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-slate-600">Actual Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-400 rounded-full" />
              <span className="text-slate-600">Goal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <span className="text-slate-600">AI Forecast</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Active Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {goals.map((goal) => {
              const progress = (goal.current / goal.target) * 100;
              
              return (
                <div key={goal.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-slate-900 mb-1">{goal.name}</h3>
                      <div className="flex items-center gap-4 text-slate-600">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(goal.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full ${
                        goal.status === 'on-track'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {goal.status === 'on-track' ? 'On Track' : 'At Risk'}
                    </span>
                  </div>
                  <Progress value={progress} className="mb-2" />
                  <p className="text-slate-600">{Math.round(progress)}% complete</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
