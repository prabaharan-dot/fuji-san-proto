import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Switch } from '../../ui/switch';
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
		features: [
			'Contacts sync',
			'Deal pipeline',
			'Activity tracking',
			'Custom fields',
		],
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
		features: [
			'Lead management',
			'Account sync',
			'Sales pipeline',
			'Reports',
		],
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
		features: [
			'Lead & opportunity sync',
			'Custom objects',
			'Advanced reporting',
			'Workflow automation',
		],
		dataPoints: null,
	},
];

export default function Integrations() {
	return (
		<div className="p-8">
			<div className="flex items-center justify-between mb-8">
				<div>
					<h1 className="text-slate-900 mb-2">Integrations</h1>
					<p className="text-slate-600">Connect your favorite tools</p>
				</div>
				<div>
					<Button>New Integration</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{integrations.map((i) => (
					<Card key={i.id} className="p-4">
						<CardHeader className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl">
									{i.logo}
								</div>
								<div>
									<div className="flex items-center gap-2">
										<div className="text-slate-900 font-medium">{i.name}</div>
										{i.status === 'connected' && (
											<CheckCircle2 className="w-4 h-4 text-green-500" />
										)}
									</div>
									<div className="text-slate-600 text-sm">
										{i.description}
									</div>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Button variant="ghost">Settings</Button>
								<Button variant="outline">Disconnect</Button>
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex items-center justify-between">
								<div>
									<div className="text-slate-900 font-medium">Last sync</div>
									<div className="text-slate-600 text-sm">
										{i.lastSync ?? 'Never'}
									</div>
								</div>
								<div>
									<div className="text-slate-900 font-medium">Data points</div>
									<div className="text-slate-600 text-sm">
										{i.dataPoints ? Object.keys(i.dataPoints).length : 0}
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
