import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Avatar, AvatarFallback } from '../../ui/avatar';
import {
  Trophy,
  Star,
  ArrowUpRight,
  Zap,
  TrendingUp,
  Clock,
  Bolt,
  Award,
  DollarSign,
} from 'lucide-react';

interface Props {
  onNavigate?: (view: any) => void;
}

export function Dashboard({ onNavigate }: Props) {
  const user = {
    name: 'Sarah',
    rank: 4,
    team: 'Enterprise Sales',
    points: 2480,
    nextRankPointsDelta: 2, // deals away simulated
    xpProgress: 64, // percent
  };

  const quickStats = {
    dealsWon: 3,
    revenueClosed: 12400,
    pointsEarned: 320,
    badges: 2,
  };

  const targets = [
    { id: 'calls', label: 'Calls made', value: 42, target: 60 },
    { id: 'revenue', label: 'Revenue closed', value: 12400, target: 15000 },
    { id: 'conversion', label: 'Conversion rate', value: 0.32, target: 0.4 },
  ];

  const aiForecast = "You're on track to hit 92% of your Q4 goal.";

  const leaderboardSnapshot = {
    yourRank: 4,
    nextRival: 'David',
    deltaToPass: 2,
  };

  const challenges = [
    { id: 1, text: 'Close 3 deals before Friday to earn the Hustler Badge 🏅', due: 'Fri' },
  ];

  const recommendations = [
    'Focus on Acme Corp — engagement score is rising.',
    'Follow up with Zephyr Ltd; 80% chance to convert.',
  ];

  const activities = [
    { id: 1, text: 'Emma just hit Platinum Closer 🥇', time: '2h' },
    { id: 2, text: 'Your deal with Nimbus was marked WON. +200 points!', time: '3h' },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg border border-slate-200">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                {user.name.split(' ').map((n) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-slate-900 font-semibold">Morning, {user.name}! You’re crushing it 🚀</div>
              <div className="text-sm text-slate-600">Rank #{user.rank} in your team</div>
            </div>
          </div>

          <div className="w-80">
            <div className="text-sm text-slate-600 mb-2">Points</div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <Progress value={user.xpProgress} />
              </div>
              <div className="text-slate-900 font-medium">{user.points} XP</div>
            </div>
            <div className="text-xs text-slate-500 mt-1">{user.xpProgress}% to next level</div>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-amber-50 flex items-center justify-center text-amber-600">
                <Trophy className="w-5 h-5" />
              </div>
              <CardTitle className="text-slate-600">Deals Won (this week)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-slate-900">{quickStats.dealsWon}</div>
            <div className="text-sm text-slate-600">Wins so far</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-green-50 flex items-center justify-center text-green-600">
                <DollarSign className="w-5 h-5" />
              </div>
              <CardTitle className="text-slate-600">Revenue Closed</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-slate-900">${quickStats.revenueClosed.toLocaleString()}</div>
            <div className="text-sm text-slate-600">This week</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                <Star className="w-5 h-5" />
              </div>
              <CardTitle className="text-slate-600">Points Earned</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-slate-900">{quickStats.pointsEarned}</div>
            <div className="text-sm text-slate-600">Since Monday</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-purple-50 flex items-center justify-center text-purple-600">
                <Award className="w-5 h-5" />
              </div>
              <CardTitle className="text-slate-600">Badges</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge className="bg-amber-100 text-amber-700">Hustler</Badge>
              <Badge className="bg-blue-100 text-blue-700">First Win</Badge>
            </div>
            <div className="text-sm text-slate-600 mt-2">{quickStats.badges} unlocked</div>
          </CardContent>
        </Card>
      </div>

      {/* Body grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Targets & AI forecast */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Targets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {targets.map((t) => {
                  const percent = t.id === 'conversion' ? Math.round((t.value / t.target) * 100) : Math.round((t.value / t.target) * 100);
                  return (
                    <div key={t.id} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-slate-900 font-medium">{t.label}</div>
                        <div className="text-sm text-slate-600">{t.id === 'conversion' ? `${(t.value * 100).toFixed(1)}%` : `${t.value.toLocaleString()} / ${t.target.toLocaleString()}`}</div>
                      </div>
                      <Progress value={Math.min(100, percent)} />
                    </div>
                  );
                })}

                <div className="mt-4 text-sm text-slate-600">AI forecast: <span className="font-medium text-slate-900">{aiForecast}</span></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Leaderboard Snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-slate-900 font-semibold">Rank #{leaderboardSnapshot.yourRank}</div>
                  <div className="text-sm text-slate-600">You’re {leaderboardSnapshot.deltaToPass} deals away from passing {leaderboardSnapshot.nextRival}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => onNavigate?.('leaderboard')}>
                    View leaderboard
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-slate-700">
                {challenges.map((c) => (
                  <li key={c.id} className="mb-2">
                    <div className="flex items-center justify-between">
                      <div>{c.text}</div>
                      <div className="text-sm text-slate-500">Due {c.due}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right column: AI recommendations & activity feed */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                {recommendations.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-amber-500 mt-1" />
                    <div>
                      <div className="text-sm">{r}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activities.map((a) => (
                  <div key={a.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">{a.text.split(' ')[0][0]}</div>
                    <div>
                      <div className="text-sm text-slate-900">{a.text}</div>
                      <div className="text-xs text-slate-500">{a.time} ago</div>
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
