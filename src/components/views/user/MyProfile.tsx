import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Progress } from '../../ui/progress';
import { Avatar, AvatarFallback } from '../../ui/avatar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Edit2, Settings, Star, Award, Zap, Eye, DollarSign, CheckCircle2, TrendingUp, Trophy, Users, Clock } from 'lucide-react';

export default function MyProfile() {
  const user = {
    name: 'Sarah Jones',
    role: 'Senior Sales Rep',
    team: 'Enterprise Sales Team',
    status: 'Platinum Closer',
    level: 12,
    xp: 2750,
    xpToNext: 450,
    goalPct: 78,
    revenueClosed: 245000,
    dealsWon: 23,
    conversionRate: 0.37,
    points: 3200,
  };

  const badges = [
    { id: 1, name: 'Gold Closer', emoji: '🥇', desc: 'Closed $100K+ this month' },
    { id: 2, name: 'Hustler', emoji: '⚡', desc: '50 calls in a week' },
    { id: 3, name: 'Consistency Pro', emoji: '🔥', desc: 'Hit weekly goals 4 weeks straight' },
  ];

  const timelineData = [
    { week: 'W1', revenue: 40000, deals: 5, points: 600 },
    { week: 'W2', revenue: 52000, deals: 6, points: 720 },
    { week: 'W3', revenue: 61000, deals: 7, points: 840 },
    { week: 'W4', revenue: 42000, deals: 5, points: 540 },
  ];

  const aiInsights = [
    'Your follow-up rate dropped 8% this week — consider re-engaging cold leads.',
    "You're 3 deals away from beating your Q3 record.",
    'Clients in the SaaS vertical convert 40% faster for you — prioritize them.',
  ];

  const topLeads = [
    { id: 'acme', name: 'Acme Corp', prob: 87 },
    { id: 'nimbus', name: 'Nimbus Tech', prob: 75 },
    { id: 'zephyr', name: 'Zephyr Ltd.', prob: 68 },
  ];

  const activities = [
    'Closed deal with Acme Corp. +300 XP 💰',
    'Unlocked Gold Closer badge 🥇',
    "Joined 'Q4 Sprint Challenge' 🏁",
    'Reached Level 12 ⚡️',
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 flex items-center justify-between gap-6" style={{backgroundImage: 'linear-gradient(90deg, rgba(99,102,241,0.06), rgba(14,165,233,0.03))'}}>
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14 ring-2 ring-amber-200">
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">SJ</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-lg font-semibold text-slate-900">Hi {user.name}, here’s your performance snapshot for Q4 2025</div>
            <div className="text-sm text-slate-600">{user.name} — {user.role} • {user.team}</div>
            <div className="mt-2 flex items-center gap-2">
              <Badge className="bg-amber-100 text-amber-700">🏅 {user.status}</Badge>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Active streak: <strong>4w</strong></span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm"><Edit2 className="w-4 h-4 mr-2"/>Edit Profile</Button>
          <Button variant="outline" size="sm"><Settings className="w-4 h-4 mr-2"/>Settings</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Personal Summary */}
        <div className="space-y-4 lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-slate-900">Performance</CardTitle>
                      <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">Q4 Target</span>
                    </div>
                    <div className="text-xs text-slate-500">Goal completion & key metrics</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span>Team: {user.team.split(' ')[0]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Streak: 4w</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                {/* simple circular progress */}
                <div className="w-28 h-28 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="w-24 h-24">
                    <path className="text-slate-100" d="M18 2a16 16 0 1 0 0 32 16 16 0 1 0 0-32" fill="none" stroke="rgba(226,232,240,1)" strokeWidth="4" />
                    <path
                      d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="4"
                      strokeDasharray={`${user.goalPct}, 100`} 
                      strokeLinecap="round"
                    />
                    <text x="18" y="20" textAnchor="middle" fontSize="6" className="fill-slate-900">{user.goalPct}%</text>
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="text-slate-900 font-semibold">78% of quarterly target</div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-600">
                    <div>
                      <div className="flex items-center gap-2 text-slate-900 font-medium"><DollarSign className="w-4 h-4 text-green-600"/>${user.revenueClosed.toLocaleString()}</div>
                      <div className="text-xs text-slate-500">Revenue Closed</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-900 font-medium"><CheckCircle2 className="w-4 h-4 text-blue-600"/>{user.dealsWon}</div>
                      <div className="text-xs text-slate-500">Deals Won</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-900 font-medium"><TrendingUp className="w-4 h-4 text-rose-500"/>{Math.round(user.conversionRate * 100)}%</div>
                      <div className="text-xs text-slate-500">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-900 font-medium"><Star className="w-4 h-4 text-amber-500"/>{user.points.toLocaleString()} XP</div>
                      <div className="text-xs text-slate-500">Points Earned</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {badges.map((b) => (
                  <div key={b.id} className="p-3 bg-white border border-slate-100 rounded-lg text-center shadow-sm hover:shadow-md transition" title={b.desc}>
                    <div className="text-2xl">{b.emoji}</div>
                    <div className="text-sm font-medium mt-2">{b.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{b.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="ghost" size="sm"><Eye className="w-4 h-4 mr-2"/>Show All</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>XP & Level Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-600 mb-2">Level {user.level} → Level {user.level + 1} in {user.xpToNext} XP</div>
              <Progress value={Math.round((user.xp / (user.xp + user.xpToNext)) * 100)} />
              <div className="mt-3 text-sm text-slate-600">Next reward preview: <span className="font-medium text-slate-900">Unlock ‘Titan Seller’ badge next level</span></div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: Insights & Growth */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ width: '100%', height: 240 }}>
                <ResponsiveContainer>
                  <LineChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="deals" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {aiInsights.map((i) => (
                  <div key={i} className="p-3 bg-gradient-to-r from-slate-50 to-amber-50 rounded-lg flex items-start gap-3">
                    <Zap className="w-5 h-5 text-amber-500 mt-1" />
                    <div>
                      <div className="text-sm text-slate-900">{i}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top 3 Leads to Focus On</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topLeads.map((l) => (
                  <div key={l.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-600">{l.name.split(' ')[0][0]}</div>
                      <div>
                        <div className="font-medium text-slate-900">{l.name}</div>
                        <div className="text-sm text-slate-600">{l.prob}% win probability</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">🔍 View Lead in CRM</Button>
                      <span className={`text-xs px-2 py-1 rounded ${l.prob > 80 ? 'bg-green-50 text-green-700' : l.prob > 70 ? 'bg-amber-50 text-amber-700' : 'bg-slate-50 text-slate-700'}`}>{l.prob}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activities.map((a, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white">{idx + 1}</div>
                    <div>
                      <div className="text-sm text-slate-900">{a}</div>
                      <div className="text-xs text-slate-500">just now</div>
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
