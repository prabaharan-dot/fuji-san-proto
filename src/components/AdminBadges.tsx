import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Award, Plus, Trophy, Star, Zap, Target, TrendingUp, Crown, Medal, Sparkles, Users, DollarSign, Calendar, Edit, Trash2, Copy } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';

const existingBadges = [
  {
    id: 1,
    name: 'First Sale',
    description: 'Close your first deal',
    icon: 'Trophy',
    color: 'from-blue-500 to-cyan-500',
    tier: 'bronze',
    points: 50,
    unlocked: 24,
    total: 35,
    criteria: [
      { type: 'deals_closed', operator: 'equals', value: 1 }
    ],
    active: true,
  },
  {
    id: 2,
    name: 'Revenue Milestone',
    description: 'Generate $50K in revenue',
    icon: 'DollarSign',
    color: 'from-green-500 to-emerald-500',
    tier: 'silver',
    points: 200,
    unlocked: 18,
    total: 35,
    criteria: [
      { type: 'revenue_generated', operator: 'greater_than', value: 50000 }
    ],
    active: true,
  },
  {
    id: 3,
    name: 'Speed Demon',
    description: 'Close 5 deals in one week',
    icon: 'Zap',
    color: 'from-amber-500 to-orange-500',
    tier: 'gold',
    points: 300,
    unlocked: 8,
    total: 35,
    criteria: [
      { type: 'deals_closed', operator: 'greater_than', value: 5, timeframe: '1_week' }
    ],
    active: true,
  },
  {
    id: 4,
    name: 'Top Performer',
    description: 'Rank #1 on leaderboard',
    icon: 'Crown',
    color: 'from-purple-500 to-pink-500',
    tier: 'platinum',
    points: 500,
    unlocked: 3,
    total: 35,
    criteria: [
      { type: 'leaderboard_rank', operator: 'equals', value: 1 }
    ],
    active: true,
  },
  {
    id: 5,
    name: 'Conversion Master',
    description: 'Achieve 80% conversion rate',
    icon: 'Target',
    color: 'from-red-500 to-rose-500',
    tier: 'gold',
    points: 350,
    unlocked: 5,
    total: 35,
    criteria: [
      { type: 'conversion_rate', operator: 'greater_than', value: 80, minimum_leads: 20 }
    ],
    active: true,
  },
  {
    id: 6,
    name: 'Team Player',
    description: 'Assist 10 team members',
    icon: 'Users',
    color: 'from-indigo-500 to-blue-500',
    tier: 'silver',
    points: 150,
    unlocked: 12,
    total: 35,
    criteria: [
      { type: 'team_assists', operator: 'greater_than', value: 10 }
    ],
    active: true,
  },
];

const iconOptions = [
  { value: 'Trophy', label: 'Trophy', icon: Trophy },
  { value: 'Star', label: 'Star', icon: Star },
  { value: 'Crown', label: 'Crown', icon: Crown },
  { value: 'Medal', label: 'Medal', icon: Medal },
  { value: 'Zap', label: 'Lightning', icon: Zap },
  { value: 'Target', label: 'Target', icon: Target },
  { value: 'TrendingUp', label: 'Trending', icon: TrendingUp },
  { value: 'DollarSign', label: 'Dollar', icon: DollarSign },
  { value: 'Users', label: 'Users', icon: Users },
  { value: 'Sparkles', label: 'Sparkles', icon: Sparkles },
];

const colorOptions = [
  { value: 'from-blue-500 to-cyan-500', label: 'Blue', preview: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
  { value: 'from-green-500 to-emerald-500', label: 'Green', preview: 'bg-gradient-to-br from-green-500 to-emerald-500' },
  { value: 'from-amber-500 to-orange-500', label: 'Orange', preview: 'bg-gradient-to-br from-amber-500 to-orange-500' },
  { value: 'from-purple-500 to-pink-500', label: 'Purple', preview: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { value: 'from-red-500 to-rose-500', label: 'Red', preview: 'bg-gradient-to-br from-red-500 to-rose-500' },
  { value: 'from-indigo-500 to-blue-500', label: 'Indigo', preview: 'bg-gradient-to-br from-indigo-500 to-blue-500' },
];

const criteriaTypes = [
  { value: 'deals_closed', label: 'Deals Closed' },
  { value: 'revenue_generated', label: 'Revenue Generated' },
  { value: 'conversion_rate', label: 'Conversion Rate %' },
  { value: 'leads_contacted', label: 'Leads Contacted' },
  { value: 'meetings_scheduled', label: 'Meetings Scheduled' },
  { value: 'leaderboard_rank', label: 'Leaderboard Rank' },
  { value: 'team_assists', label: 'Team Assists' },
  { value: 'consecutive_days', label: 'Consecutive Active Days' },
];

const operatorOptions = [
  { value: 'equals', label: 'Equals' },
  { value: 'greater_than', label: 'Greater Than' },
  { value: 'less_than', label: 'Less Than' },
];

const timeframeOptions = [
  { value: 'all_time', label: 'All Time' },
  { value: '1_day', label: '1 Day' },
  { value: '1_week', label: '1 Week' },
  { value: '1_month', label: '1 Month' },
  { value: '1_quarter', label: '1 Quarter' },
];

function getIconComponent(iconName: string) {
  const icons: { [key: string]: any } = {
    Trophy, Star, Crown, Medal, Zap, Target, TrendingUp, DollarSign, Users, Sparkles
  };
  return icons[iconName] || Award;
}

export function AdminBadges() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('all');
  const [badgeName, setBadgeName] = useState('');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('Trophy');
  const [selectedColor, setSelectedColor] = useState('from-blue-500 to-cyan-500');
  const [badgeTier, setBadgeTier] = useState('bronze');
  const [badgePoints, setBadgePoints] = useState('50');

  const totalBadges = existingBadges.length;
  const totalUnlocks = existingBadges.reduce((sum, badge) => sum + badge.unlocked, 0);
  const activeBadges = existingBadges.filter(b => b.active).length;

  const filteredBadges = selectedTier === 'all' 
    ? existingBadges 
    : existingBadges.filter(b => b.tier === selectedTier);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-slate-900 mb-2">Badges & Awards</h1>
          <p className="text-slate-600">Create and manage achievement badges to motivate your team</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Badge
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Badge</DialogTitle>
              <DialogDescription>
                Design a custom achievement badge with unlock criteria
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="design" className="mt-4">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="criteria">Criteria</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>

              <TabsContent value="design" className="space-y-4 mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="badge-name">Badge Name</Label>
                    <Input 
                      id="badge-name" 
                      placeholder="e.g., Sales Champion"
                      value={badgeName}
                      onChange={(e) => setBadgeName(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="badge-description">Description</Label>
                    <Textarea 
                      id="badge-description" 
                      placeholder="What does this badge represent?"
                      value={badgeDescription}
                      onChange={(e) => setBadgeDescription(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Badge Icon</Label>
                      <Select value={selectedIcon} onValueChange={setSelectedIcon}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {iconOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                              <SelectItem key={option.value} value={option.value}>
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4" />
                                  {option.label}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Badge Color</Label>
                      <Select value={selectedColor} onValueChange={setSelectedColor}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {colorOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded ${option.preview}`} />
                                {option.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Tier</Label>
                      <Select value={badgeTier} onValueChange={setBadgeTier}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bronze">Bronze</SelectItem>
                          <SelectItem value="silver">Silver</SelectItem>
                          <SelectItem value="gold">Gold</SelectItem>
                          <SelectItem value="platinum">Platinum</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="badge-points">Points Value</Label>
                      <Input 
                        id="badge-points" 
                        type="number" 
                        placeholder="50"
                        value={badgePoints}
                        onChange={(e) => setBadgePoints(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="criteria" className="space-y-4 mt-4">
                <div className="space-y-4">
                  <div>
                    <Label>Unlock Criteria</Label>
                    <p className="text-sm text-slate-600 mb-3">
                      Define the conditions required to earn this badge
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label>Metric</Label>
                        <Select defaultValue="deals_closed">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {criteriaTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Condition</Label>
                        <Select defaultValue="greater_than">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {operatorOptions.map((op) => (
                              <SelectItem key={op.value} value={op.value}>
                                {op.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Value</Label>
                        <Input type="number" placeholder="0" />
                      </div>
                    </div>

                    <div>
                      <Label>Timeframe</Label>
                      <Select defaultValue="all_time">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {timeframeOptions.map((tf) => (
                            <SelectItem key={tf.value} value={tf.value}>
                              {tf.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Condition
                  </Button>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-900">Multiple Conditions</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Add multiple conditions that must all be met (AND logic) for the badge to unlock
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="preview" className="mt-4">
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <div className="inline-flex flex-col items-center">
                      <div className={`w-24 h-24 bg-gradient-to-br ${selectedColor} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                        {(() => {
                          const Icon = getIconComponent(selectedIcon);
                          return <Icon className="w-12 h-12 text-white" />;
                        })()}
                      </div>
                      <h3 className="text-slate-900 mb-2">
                        {badgeName || 'Badge Name'}
                      </h3>
                      <p className="text-slate-600 mb-3">
                        {badgeDescription || 'Badge description will appear here'}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge className="capitalize">{badgeTier}</Badge>
                        <Badge variant="outline">{badgePoints} Points</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg">
                    <h4 className="text-slate-900 mb-3">How it looks:</h4>
                    
                    {/* Card View */}
                    <div className="p-4 bg-slate-50 rounded-lg mb-3">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${selectedColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                          {(() => {
                            const Icon = getIconComponent(selectedIcon);
                            return <Icon className="w-8 h-8 text-white" />;
                          })()}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-slate-900 mb-1">
                            {badgeName || 'Badge Name'}
                          </h4>
                          <p className="text-slate-600 text-sm">
                            {badgeDescription || 'Badge description'}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs capitalize">{badgeTier}</Badge>
                            <span className="text-xs text-slate-500">{badgePoints} pts</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Small View */}
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 bg-gradient-to-br ${selectedColor} rounded-full flex items-center justify-center`}>
                        {(() => {
                          const Icon = getIconComponent(selectedIcon);
                          return <Icon className="w-5 h-5 text-white" />;
                        })()}
                      </div>
                      <span className="text-sm text-slate-900">{badgeName || 'Badge Name'}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => setIsCreateDialogOpen(false)}>
                      Create Badge
                    </Button>
                    <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Total Badges</CardTitle>
            <Award className="w-5 h-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{totalBadges}</div>
            <p className="text-slate-600">{activeBadges} active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Total Unlocks</CardTitle>
            <Trophy className="w-5 h-5 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{totalUnlocks}</div>
            <p className="text-slate-600">By all team members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Avg Per User</CardTitle>
            <Star className="w-5 h-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{(totalUnlocks / 35).toFixed(1)}</div>
            <p className="text-slate-600">Badges earned</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Most Popular</CardTitle>
            <Sparkles className="w-5 h-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">First Sale</div>
            <p className="text-slate-600">24 unlocks</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <Tabs value={selectedTier} onValueChange={setSelectedTier}>
          <TabsList>
            <TabsTrigger value="all">All Badges</TabsTrigger>
            <TabsTrigger value="bronze">Bronze</TabsTrigger>
            <TabsTrigger value="silver">Silver</TabsTrigger>
            <TabsTrigger value="gold">Gold</TabsTrigger>
            <TabsTrigger value="platinum">Platinum</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBadges.map((badge) => {
          const Icon = getIconComponent(badge.icon);
          const unlockPercentage = (badge.unlocked / badge.total) * 100;

          return (
            <Card key={badge.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-slate-900">{badge.name}</h3>
                    <Badge className="capitalize text-xs">{badge.tier}</Badge>
                  </div>
                  <p className="text-slate-600 mb-3">{badge.description}</p>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{badge.points} Points</Badge>
                    {badge.active ? (
                      <Badge variant="outline" className="border-green-500 text-green-700">Active</Badge>
                    ) : (
                      <Badge variant="outline" className="border-slate-300 text-slate-500">Inactive</Badge>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-600">Unlock Progress</span>
                    <span className="text-slate-900">
                      {badge.unlocked}/{badge.total} users
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${badge.color}`}
                      style={{ width: `${unlockPercentage}%` }}
                    />
                  </div>
                  <p className="text-slate-500 text-sm mt-2">
                    {unlockPercentage.toFixed(0)}% of team earned this badge
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-slate-600 text-sm mb-2">Unlock Criteria:</p>
                  {badge.criteria.map((criterion, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Target className="w-3 h-3 text-blue-600" />
                      <span className="text-slate-900">
                        {criterion.type.replace('_', ' ')} {criterion.operator.replace('_', ' ')} {criterion.value}
                        {criterion.timeframe && ` (${criterion.timeframe.replace('_', ' ')})`}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Badge Templates */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Start Templates</CardTitle>
          <p className="text-slate-600">Pre-configured badge templates for common achievements</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Rising Star', icon: Star, color: 'from-yellow-500 to-amber-500', desc: 'First month milestones' },
              { name: 'Century Club', icon: Trophy, color: 'from-blue-500 to-cyan-500', desc: '100 deals closed' },
              { name: 'Mentor', icon: Users, color: 'from-green-500 to-emerald-500', desc: 'Help 5 teammates' },
              { name: 'Consistency King', icon: Calendar, color: 'from-purple-500 to-pink-500', desc: '30 day streak' },
            ].map((template) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.name}
                  className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${template.color} rounded-full flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-slate-900 mb-1">{template.name}</h4>
                  <p className="text-slate-600 text-sm mb-3">{template.desc}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
