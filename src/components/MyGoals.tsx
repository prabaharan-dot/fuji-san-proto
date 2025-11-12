import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Target, TrendingUp, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const progressData = [
  { week: 'Week 1', target: 5000, actual: 4800 },
  { week: 'Week 2', target: 10000, actual: 11200 },
  { week: 'Week 3', target: 15000, actual: 14900 },
  { week: 'Week 4', target: 20000, actual: 21800 },
];

const myGoals = [
  {
    id: 1,
    name: 'Monthly Revenue Target',
    category: 'Revenue',
    current: 89400,
    target: 95000,
    unit: '$',
    deadline: '2025-11-30',
    status: 'on-track',
    priority: 'high',
  },
  {
    id: 2,
    name: 'Lead Conversions',
    category: 'Performance',
    current: 68,
    target: 70,
    unit: '',
    deadline: '2025-11-30',
    status: 'on-track',
    priority: 'high',
  },
  {
    id: 3,
    name: 'New Leads Generated',
    category: 'Pipeline',
    current: 156,
    target: 150,
    unit: '',
    deadline: '2025-11-30',
    status: 'completed',
    priority: 'medium',
  },
  {
    id: 4,
    name: 'Quarterly Revenue',
    category: 'Revenue',
    current: 246000,
    target: 275000,
    unit: '$',
    deadline: '2025-12-31',
    status: 'on-track',
    priority: 'high',
  },
  {
    id: 5,
    name: 'Customer Retention Rate',
    category: 'Performance',
    current: 87,
    target: 90,
    unit: '%',
    deadline: '2025-12-31',
    status: 'at-risk',
    priority: 'medium',
  },
];

const achievements = [
  { id: 1, title: 'Top Performer', description: 'Ranked #1 in your team', icon: '🏆', date: 'Nov 2025' },
  { id: 2, title: 'Revenue Champion', description: 'Exceeded monthly target 3 months in a row', icon: '💰', date: 'Oct 2025' },
  { id: 3, title: 'Lead Generator', description: 'Generated 150+ leads in a month', icon: '⭐', date: 'Nov 2025' },
];

export function MyGoals() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-slate-900 mb-2">My Goals</h1>
          <p className="text-slate-600">Track your personal targets and achievements</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Active Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-2">4 Goals</div>
            <p className="text-slate-600">1 completed this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-2">88%</div>
            <Progress value={88} className="mb-2" />
            <p className="text-slate-600">On track to meet targets</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Points Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-2">2,850 Points</div>
            <p className="text-slate-600">Rank #2 overall</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Monthly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-slate-600">Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-400 rounded-full" />
              <span className="text-slate-600">Target</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Goals List */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>My Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {myGoals.map((goal) => {
              const progress = (goal.current / goal.target) * 100;
              const daysUntilDeadline = Math.ceil(
                (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
              );

              return (
                <div
                  key={goal.id}
                  className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-slate-900">{goal.name}</h3>
                        <Badge variant="outline">{goal.category}</Badge>
                        <Badge
                          variant={
                            goal.status === 'completed'
                              ? 'default'
                              : goal.status === 'on-track'
                              ? 'secondary'
                              : 'destructive'
                          }
                        >
                          {goal.status === 'completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                          {goal.status === 'at-risk' && <Clock className="w-3 h-3 mr-1" />}
                          {goal.status === 'completed'
                            ? 'Completed'
                            : goal.status === 'on-track'
                            ? 'On Track'
                            : 'At Risk'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-slate-600">
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {goal.unit}{goal.current.toLocaleString()} / {goal.unit}{goal.target.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {daysUntilDeadline > 0 ? `${daysUntilDeadline} days left` : 'Deadline passed'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Progress value={Math.min(progress, 100)} className="mb-2" />
                  <div className="flex items-center justify-between text-slate-600">
                    <span>{Math.round(progress)}% complete</span>
                    {progress < 100 && (
                      <span>
                        {goal.unit}{(goal.target - goal.current).toLocaleString()} to go
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-slate-900 mb-1">{achievement.title}</h3>
                <p className="text-slate-600 mb-2">{achievement.description}</p>
                <p className="text-slate-500">{achievement.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
