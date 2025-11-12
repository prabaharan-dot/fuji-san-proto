import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import { Search, Filter, Plus, Mail, Phone, Calendar, DollarSign } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { useState } from 'react';

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

export function MyLeads() {
	const [query, setQuery] = useState('');
	const [stageFilter, setStageFilter] = useState('all');

	const initials = (name: string) =>
		name
			.split(' ')
			.map((s) => s[0])
			.slice(0, 2)
			.join('')
			.toUpperCase();

	const statusClass = (status: string) => {
		switch (status) {
			case 'Converted':
				return 'bg-green-100 text-green-800';
			case 'Qualified':
				return 'bg-yellow-100 text-yellow-800';
			case 'In Progress':
				return 'bg-blue-100 text-blue-800';
			case 'New':
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};

	const stages = Array.from(new Set(myLeads.map((l) => l.stage)));

	const filtered = myLeads.filter((lead) => {
		const matchesQuery = [lead.company, lead.contact, lead.email, lead.phone]
			.join(' ')
			.toLowerCase()
			.includes(query.toLowerCase());
		const matchesStage = stageFilter === 'all' ? true : lead.stage === stageFilter;
		return matchesQuery && matchesStage;
	});

	return (
		<div className="p-8">
			<div className="flex items-center justify-between mb-6">
				<div>
					<h1 className="text-slate-900 mb-1 text-lg font-semibold">My Leads</h1>
					<p className="text-slate-600 text-sm">Card grid view — quick actions and badges.</p>
				</div>
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-2">
						<Input
							placeholder="Search leads by company, contact, email..."
							value={query}
							onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
							className="pl-10"
						/>
						<Search className="absolute ml-3 w-4 h-4 text-slate-400" />
					</div>
					<select
						value={stageFilter}
						onChange={(e) => setStageFilter(e.target.value)}
						className="rounded-md border px-3 py-2 text-sm bg-white"
					>
						<option value="all">All stages</option>
						{stages.map((s) => (
							<option key={s} value={s}>
								{s}
							</option>
						))}
					</select>
					<Button>
						<Plus className="w-4 h-4 mr-2" />
						Add Lead
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filtered.map((lead) => (
					<Card key={lead.id} className="shadow-sm hover:shadow-md transition-shadow">
						<CardContent className="p-4">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-600 text-white font-semibold">
										{initials(lead.company)}
									</div>
								</div>

								<div className="flex-1">
									<div className="flex items-start justify-between gap-4">
										<div>
											<h3 className="text-slate-900 font-medium">{lead.company}</h3>
											<p className="text-slate-600 text-sm">{lead.contact}</p>
										</div>
										<div className="text-right">
											<div className={`inline-flex items-center gap-2 px-2 py-1 rounded ${statusClass(lead.status)}`}>
												<span className="text-xs font-semibold">{lead.status}</span>
											</div>
										</div>
									</div>

									<div className="mt-3 flex items-center justify-between text-sm text-slate-600">
										<div className="space-y-1">
											<div className="flex items-center gap-2">
												<Mail className="w-4 h-4" />
												<span className="truncate max-w-[160px]">{lead.email}</span>
											</div>
											<div className="flex items-center gap-2">
												<Phone className="w-4 h-4" />
												<span>{lead.phone}</span>
											</div>
										</div>

										<div className="text-right">
											<div className="text-slate-900 font-semibold">${lead.value.toLocaleString()}</div>
											<div className="text-slate-500 text-xs mt-1">{lead.stage}</div>
											<div className="text-slate-400 text-xs mt-1 flex items-center gap-1 justify-end">
												<Calendar className="w-3 h-3" />
												{new Date(lead.lastContact).toLocaleDateString('en-US', {
													month: 'short',
													day: 'numeric',
												})}
											</div>
										</div>
									</div>

									<div className="mt-4 flex gap-2">
										<Button size="sm">Update</Button>
										<Button size="sm" variant="outline">
											Follow-up
										</Button>
										<Button size="sm" variant="ghost">
											Notes
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{filtered.length === 0 && (
				<div className="mt-10 text-center text-slate-500">No leads match your search.</div>
			)}
		</div>
	);
}
