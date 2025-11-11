import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import { Search, Filter, Plus, Mail, Phone, Calendar, DollarSign } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';

const myLeads = [
  {
    id: 1,
    company: 'Acme Corporation',
    contact: 'John Smith',
    email: 'john@acme.com',
    phone: '+1 234-567-8901',
    status: 'Converted',
    value: 12500,
    stage: 'Closed Won',
    lastContact: '2025-11-08',
    source: 'AI Campaign',
  },
  {
    id: 2,
    company: 'Tech Innovations Ltd',
    contact: 'Sarah Johnson',
    email: 'sarah@techinnovations.com',
    phone: '+1 234-567-8902',
    status: 'Qualified',
    value: 8900,
    stage: 'Proposal Sent',
    lastContact: '2025-11-09',
    source: 'Referral',
  },
  {
    id: 3,
    company: 'Global Solutions Inc',
    contact: 'Michael Chen',
    email: 'michael@globalsolutions.com',
    phone: '+1 234-567-8903',
    status: 'In Progress',
    value: 15200,
    stage: 'Demo Scheduled',
    lastContact: '2025-11-10',
    source: 'Organic',
  },
  {
    id: 4,
    company: 'Digital Dynamics',
    contact: 'Emily Rodriguez',
    email: 'emily@digitaldynamics.com',
    phone: '+1 234-567-8904',
    status: 'Converted',
    value: 9800,
    stage: 'Closed Won',
    lastContact: '2025-11-10',
    source: 'AI Campaign',
  },
  {
    id: 5,
    company: 'Future Systems',
    contact: 'David Park',
    email: 'david@futuresystems.com',
    phone: '+1 234-567-8905',
    status: 'Qualified',
    value: 11300,
    stage: 'Needs Analysis',
    lastContact: '2025-11-11',
    source: 'LinkedIn',
  },
  {
    id: 6,
    company: 'Smart Analytics Co',
    contact: 'Lisa Wong',
    email: 'lisa@smartanalytics.com',
    phone: '+1 234-567-8906',
    status: 'New',
    value: 7600,
    stage: 'Initial Contact',
    lastContact: '2025-11-11',
    source: 'AI Campaign',
  },
];

const conversionStats = {
  total: 156,
  converted: 68,
  qualified: 42,
  inProgress: 34,
  new: 12,
};

export function MyLeads() {
  const activeLeads = myLeads.filter(lead => lead.status !== 'Converted');
  const convertedLeads = myLeads.filter(lead => lead.status === 'Converted');

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-slate-900 mb-2">My Leads</h1>
          <p className="text-slate-600">Manage and track your sales pipeline</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{conversionStats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">Converted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{conversionStats.converted}</div>
            <p className="text-slate-600">43.6% rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">Qualified</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{conversionStats.qualified}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{conversionStats.inProgress}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-slate-600">New</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{conversionStats.new}</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search leads..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Leads Tabs */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active ({activeLeads.length})</TabsTrigger>
          <TabsTrigger value="converted">Converted ({convertedLeads.length})</TabsTrigger>
          <TabsTrigger value="all">All Leads ({myLeads.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeLeads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-slate-900">{lead.company}</h3>
                      <Badge
                        variant={
                          lead.status === 'Qualified'
                            ? 'default'
                            : lead.status === 'In Progress'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {lead.status}
                      </Badge>
                      <Badge variant="outline">{lead.stage}</Badge>
                    </div>
                    <p className="text-slate-600 mb-3">{lead.contact}</p>
                    <div className="flex items-center gap-6 text-slate-600">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {lead.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        ${lead.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-600 mb-2">Source: {lead.source}</p>
                    <p className="text-slate-500 flex items-center gap-1 justify-end">
                      <Calendar className="w-4 h-4" />
                      Last contact:{' '}
                      {new Date(lead.lastContact).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Update Status</Button>
                  <Button size="sm" variant="outline">
                    Schedule Follow-up
                  </Button>
                  <Button size="sm" variant="outline">
                    Add Note
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="converted" className="space-y-4">
          {convertedLeads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-slate-900">{lead.company}</h3>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        {lead.status}
                      </Badge>
                      <Badge variant="outline">{lead.stage}</Badge>
                    </div>
                    <p className="text-slate-600 mb-3">{lead.contact}</p>
                    <div className="flex items-center gap-6 text-slate-600">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        ${lead.value.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Closed: {new Date(lead.lastContact).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {myLeads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-slate-900">{lead.company}</h3>
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
                      <Badge variant="outline">{lead.stage}</Badge>
                    </div>
                    <p className="text-slate-600 mb-3">{lead.contact}</p>
                    <div className="flex items-center gap-6 text-slate-600">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {lead.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        ${lead.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-600 mb-2">Source: {lead.source}</p>
                    <p className="text-slate-500">
                      {new Date(lead.lastContact).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
