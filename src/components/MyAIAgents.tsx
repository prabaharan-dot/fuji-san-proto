import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Progress } from './ui/progress';
import { Bot, Plus, Settings, Zap, TrendingUp, Mail, Calendar, MessageSquare, Users, Play, Pause, MoreVertical } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const myAgents = [
  {
    id: 1,
    name: 'Lead Follow-up Assistant',
    description: 'Automatically follows up with leads who haven\'t responded in 3 days',
    template: 'Lead Nurturing',
    status: 'active',
    tasksCompleted: 234,
    tasksThisWeek: 42,
    timeSaved: '12.5 hours',
    performance: 94,
    lastRun: '2 hours ago',
    triggers: ['No response for 3 days', 'Lead status changed'],
    actions: ['Send follow-up email', 'Schedule call', 'Update CRM'],
  },
  {
    id: 2,
    name: 'Meeting Scheduler',
    description: 'Schedules and confirms meetings with qualified leads',
    template: 'Meeting Automation',
    status: 'active',
    tasksCompleted: 156,
    tasksThisWeek: 28,
    timeSaved: '8.2 hours',
    performance: 89,
    lastRun: '1 hour ago',
    triggers: ['Lead qualified', 'Demo requested'],
    actions: ['Check calendar', 'Send meeting invite', 'Send reminder'],
  },
  {
    id: 3,
    name: 'Lead Qualifier',
    description: 'Analyzes and scores new leads based on engagement and fit',
    template: 'Lead Qualification',
    status: 'active',
    tasksCompleted: 312,
    tasksThisWeek: 67,
    timeSaved: '15.8 hours',
    performance: 96,
    lastRun: '30 minutes ago',
    triggers: ['New lead created', 'Lead profile updated'],
    actions: ['Score lead', 'Categorize', 'Assign priority'],
  },
  {
    id: 4,
    name: 'Social Media Engager',
    description: 'Monitors and engages with prospects on LinkedIn',
    template: 'Social Selling',
    status: 'paused',
    tasksCompleted: 89,
    tasksThisWeek: 0,
    timeSaved: '4.5 hours',
    performance: 78,
    lastRun: '2 days ago',
    triggers: ['Prospect posts', 'Connection accepted'],
    actions: ['Like post', 'Comment', 'Send message'],
  },
];

const agentTemplates = [
  {
    id: 1,
    name: 'Lead Follow-up',
    description: 'Automatically follow up with unresponsive leads',
    icon: Mail,
    category: 'Lead Nurturing',
    popularity: 'Most Popular',
    features: ['Customizable timing', 'Smart messaging', 'Multi-channel'],
  },
  {
    id: 2,
    name: 'Meeting Scheduler',
    description: 'Handle meeting requests and calendar management',
    icon: Calendar,
    category: 'Productivity',
    popularity: 'Popular',
    features: ['Calendar sync', 'Automated reminders', 'Timezone handling'],
  },
  {
    id: 3,
    name: 'Lead Qualifier',
    description: 'Score and categorize leads automatically',
    icon: Users,
    category: 'Lead Management',
    popularity: 'Trending',
    features: ['AI scoring', 'Custom criteria', 'Auto-assignment'],
  },
  {
    id: 4,
    name: 'Email Outreach',
    description: 'Personalized email campaigns at scale',
    icon: MessageSquare,
    category: 'Outreach',
    popularity: 'New',
    features: ['Personalization', 'A/B testing', 'Performance tracking'],
  },
  {
    id: 5,
    name: 'Data Enrichment',
    description: 'Automatically enrich lead data from public sources',
    icon: Zap,
    category: 'Data Management',
    popularity: 'Popular',
    features: ['Company data', 'Contact info', 'Social profiles'],
  },
  {
    id: 6,
    name: 'Task Automation',
    description: 'Automate repetitive CRM tasks and data entry',
    icon: Bot,
    category: 'Productivity',
    popularity: 'Most Popular',
    features: ['CRM updates', 'Status changes', 'Field population'],
  },
];

export function MyAIAgents() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const activeAgents = myAgents.filter(agent => agent.status === 'active').length;
  const totalTasksCompleted = myAgents.reduce((sum, agent) => sum + agent.tasksCompleted, 0);
  const totalTimeSaved = myAgents.reduce((sum, agent) => sum + parseFloat(agent.timeSaved), 0);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-slate-900 mb-2">AI Agents</h1>
          <p className="text-slate-600">Automate your workflow with intelligent AI assistants</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Agent
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New AI Agent</DialogTitle>
              <DialogDescription>
                Choose a template to get started or build a custom agent from scratch
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="templates" className="mt-4">
              <TabsList>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="custom">Custom Agent</TabsTrigger>
              </TabsList>
              <TabsContent value="templates" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  {agentTemplates.map((template) => {
                    const Icon = template.icon;
                    return (
                      <Card key={template.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-slate-900">{template.name}</h3>
                                <Badge variant="outline">{template.popularity}</Badge>
                              </div>
                              <p className="text-slate-600 mb-3">{template.description}</p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {template.features.map((feature) => (
                                  <span
                                    key={feature}
                                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                              <Button size="sm" className="w-full">Use Template</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="custom" className="space-y-4 mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="agent-name">Agent Name</Label>
                    <Input id="agent-name" placeholder="e.g., My Custom Lead Assistant" />
                  </div>
                  <div>
                    <Label htmlFor="agent-description">Description</Label>
                    <Input id="agent-description" placeholder="What does this agent do?" />
                  </div>
                  <div>
                    <Label>Triggers (When should this agent run?)</Label>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg">
                        <Switch />
                        <span className="text-slate-900">New lead created</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg">
                        <Switch />
                        <span className="text-slate-900">Lead status changed</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg">
                        <Switch />
                        <span className="text-slate-900">No activity for X days</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label>Actions (What should the agent do?)</Label>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg">
                        <Switch />
                        <span className="text-slate-900">Send email</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg">
                        <Switch />
                        <span className="text-slate-900">Update CRM field</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg">
                        <Switch />
                        <span className="text-slate-900">Create task</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">Create Custom Agent</Button>
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
            <CardTitle className="text-slate-600">Active Agents</CardTitle>
            <Bot className="w-5 h-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{activeAgents}</div>
            <p className="text-slate-600">Out of {myAgents.length} total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Tasks Completed</CardTitle>
            <Zap className="w-5 h-5 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{totalTasksCompleted}</div>
            <p className="text-slate-600">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Time Saved</CardTitle>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{totalTimeSaved.toFixed(1)} hours</div>
            <p className="text-slate-600">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-slate-600">Avg Performance</CardTitle>
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">
              {Math.round(myAgents.reduce((sum, a) => sum + a.performance, 0) / myAgents.length)}%
            </div>
            <p className="text-slate-600">Success rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Agents */}
      <div className="mb-8">
        <h2 className="text-slate-900 mb-4">My Agents</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {myAgents.map((agent) => (
            <Card key={agent.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-slate-900">{agent.name}</h3>
                        <Badge variant={agent.status === 'active' ? 'default' : 'secondary'}>
                          {agent.status}
                        </Badge>
                      </div>
                      <p className="text-slate-600 mb-3">{agent.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-slate-900">{agent.tasksThisWeek}</div>
                          <p className="text-slate-600">This week</p>
                        </div>
                        <div>
                          <div className="text-slate-900">{agent.tasksCompleted}</div>
                          <p className="text-slate-600">Total tasks</p>
                        </div>
                        <div>
                          <div className="text-slate-900">{agent.timeSaved}</div>
                          <p className="text-slate-600">Time saved</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      {agent.status === 'active' ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-600">Performance</span>
                    <span className="text-slate-900">{agent.performance}%</span>
                  </div>
                  <Progress value={agent.performance} />
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-600 mb-2">Triggers</p>
                      <div className="space-y-1">
                        {agent.triggers.slice(0, 2).map((trigger) => (
                          <p key={trigger} className="text-slate-900 text-sm">• {trigger}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-600 mb-2">Actions</p>
                      <div className="space-y-1">
                        {agent.actions.slice(0, 2).map((action) => (
                          <p key={action} className="text-slate-900 text-sm">• {action}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-500 mt-3">Last run: {agent.lastRun}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Agent Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Available Templates</CardTitle>
          <p className="text-slate-600">Quick-start templates to automate common tasks</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agentTemplates.slice(0, 3).map((template) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.id}
                  className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-slate-900">{template.name}</h3>
                      <Badge variant="outline" className="mt-1">{template.category}</Badge>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3">{template.description}</p>
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
