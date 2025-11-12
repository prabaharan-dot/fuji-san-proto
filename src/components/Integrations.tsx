import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { CheckCircle2, Circle, RefreshCw, Settings, ExternalLink } from 'lucide-react';

const integrations = [
  {
    id: 1,
    name: 'HubSpot',
    description: 'Sync contacts, deals, and pipeline data automatically',
    logo: '🔶',
    category: 'CRM',
    status: 'connected',
    lastSync: '2 hours ago',
    features: ['Contacts sync', 'Deal pipeline', 'Activity tracking', 'Custom fields'],
    dataPoints: { contacts: 2840, deals: 156, activities: 1243 },
  },
  {
    id: 2,
    name: 'Zoho CRM',
    description: 'Import leads, accounts, and sales data seamlessly',
    logo: '🟡',
    category: 'CRM',
    status: 'connected',
    lastSync: '5 hours ago',
    features: ['Lead management', 'Account sync', 'Sales pipeline', 'Reports'],
    dataPoints: { leads: 1520, accounts: 342, opportunities: 89 },
  },
  {
    id: 3,
    name: 'Salesforce',
    description: 'Enterprise CRM integration with advanced analytics',
    logo: '☁️',
    category: 'CRM',
    status: 'disconnected',
    lastSync: null,
    features: ['Lead & opportunity sync', 'Custom objects', 'Advanced reporting', 'Workflow automation'],
    dataPoints: null,
  },
  {
    id: 4,
    name: 'Pipedrive',
    description: 'Sales-focused CRM with visual pipeline management',
    logo: '🟢',
    category: 'CRM',
    status: 'disconnected',
    lastSync: null,
    features: ['Pipeline sync', 'Deal tracking', 'Activity management', 'Email integration'],
    dataPoints: null,
  },
  {
    id: 5,
    name: 'Microsoft Dynamics 365',
    description: 'Enterprise resource planning and CRM platform',
    logo: '🔷',
    category: 'CRM',
    status: 'disconnected',
    lastSync: null,
    features: ['Customer insights', 'Sales automation', 'Marketing integration', 'Service management'],
    dataPoints: null,
  },
];

const syncSettings = [
  { id: 'auto-sync', label: 'Auto-sync every hour', enabled: true },
  { id: 'two-way', label: 'Enable two-way sync', enabled: true },
  { id: 'notifications', label: 'Sync notifications', enabled: false },
  { id: 'conflict-resolution', label: 'Auto-resolve conflicts', enabled: true },
];

export function Integrations() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-slate-900 mb-2">Integrations</h1>
        <p className="text-slate-600">Connect your CRM and sync your data automatically</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Connected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-1">2 Integrations</div>
            <p className="text-slate-600">HubSpot, Zoho CRM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Data Synced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900 mb-1">4,360 Records</div>
            <p className="text-slate-600">Last sync: 2 hours ago</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-600">Sync Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-slate-900">All systems operational</span>
            </div>
            <p className="text-slate-600">Next sync in 1 hour</p>
          </CardContent>
        </Card>
      </div>

      {/* Sync Settings */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sync Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {syncSettings.map((setting) => (
              <div key={setting.id} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-slate-900">{setting.label}</p>
                </div>
                <Switch defaultChecked={setting.enabled} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Integrations */}
      <div className="space-y-6">
        <h2 className="text-slate-900">Available Integrations</h2>
        
        {integrations.map((integration) => (
          <Card key={integration.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                {/* Logo */}
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                  {integration.logo}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-slate-900">{integration.name}</h3>
                        <Badge variant="outline">{integration.category}</Badge>
                        {integration.status === 'connected' ? (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Connected
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            <Circle className="w-3 h-3 mr-1" />
                            Not connected
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-600 mb-4">{integration.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-slate-600 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {integration.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Data Points (if connected) */}
                  {integration.status === 'connected' && integration.dataPoints && (
                    <div className="mb-4 p-4 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 mb-2">Synced Data:</p>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(integration.dataPoints).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-slate-900">{value.toLocaleString()}</div>
                            <p className="text-slate-600 capitalize">{key}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Last Sync */}
                  {integration.status === 'connected' && integration.lastSync && (
                    <p className="text-slate-600 mb-4">
                      Last synced: {integration.lastSync}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3">
                    {integration.status === 'connected' ? (
                      <>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Sync Now
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4 mr-2" />
                          Configure
                        </Button>
                        <Button variant="outline" size="sm">
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button size="sm">
                          Connect {integration.name}
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Section */}
      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <ExternalLink className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-slate-900 mb-2">Need help with integrations?</h3>
              <p className="text-slate-600 mb-4">
                Check our documentation for step-by-step guides on connecting your CRM and syncing data.
              </p>
              <Button variant="outline" size="sm">
                View Documentation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
