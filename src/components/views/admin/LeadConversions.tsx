import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { ArrowRight, Download, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, FunnelChart, Funnel, Cell, LabelList } from 'recharts';

const funnelData = [
	{ stage: 'Visitors', value: 5420, fill: '#3b82f6' },
	{ stage: 'Leads', value: 2840, fill: '#6366f1' },
	{ stage: 'Qualified', value: 1520, fill: '#8b5cf6' },
	{ stage: 'Proposals', value: 680, fill: '#a855f7' },
	{ stage: 'Customers', value: 234, fill: '#c026d3' },
];

const conversionRates = [
	{ stage: 'Visitors → Leads', rate: 52.4 },
	{ stage: 'Leads → Qualified', rate: 53.5 },
	{ stage: 'Qualified → Proposals', rate: 44.7 },
	{ stage: 'Proposals → Customers', rate: 34.4 },
];

const weeklyData = [
	{ week: 'Week 1', conversions: 42 },
	{ week: 'Week 2', conversions: 55 },
	{ week: 'Week 3', conversions: 48 },
	{ week: 'Week 4', conversions: 67 },
];

const topSources = [
	{ source: 'AI Campaign - Tech Leaders', leads: 342, conversions: 128, rate: 37.4 },
	{ source: 'Organic Search', leads: 289, conversions: 94, rate: 32.5 },
	{ source: 'LinkedIn Ads', leads: 234, conversions: 81, rate: 34.6 },
	{ source: 'Referral Program', leads: 198, conversions: 76, rate: 38.4 },
	{ source: 'Content Marketing', leads: 167, conversions: 52, rate: 31.1 },
];

export default function LeadConversions() {
	return (
		<div className="p-8">
			<div className="flex items-center justify-between mb-8">
				<div>
					<h1 className="text-slate-900 mb-2">Lead Conversions</h1>
					<p className="text-slate-600">Monitor your lead journey and conversion metrics</p>
				</div>
				<div className="flex gap-3">
					<Button variant="outline">
						<Filter className="w-4 h-4 mr-2" />
						Filter
					</Button>
					<Button variant="outline">
						<Download className="w-4 h-4 mr-2" />
						Export
					</Button>
				</div>
			</div>

			{/* Key Metrics */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
				<Card>
					<CardHeader>
						<CardTitle className="text-slate-600">Overall Conversion</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-slate-900 mb-1">34.8%</div>
						<p className="text-slate-600">From lead to customer</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="text-slate-600">Total Leads</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-slate-900 mb-1">2,840</div>
						<p className="text-slate-600">This month</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="text-slate-600">Conversions</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-slate-900 mb-1">234</div>
						<p className="text-slate-600">New customers</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="text-slate-600">Avg. Time to Convert</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-slate-900 mb-1">18 days</div>
						<p className="text-slate-600">3 days faster</p>
					</CardContent>
				</Card>
			</div>

			{/* Funnel Visualization */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
				<Card>
					<CardHeader>
						<CardTitle>Conversion Funnel</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{funnelData.map((item, index) => {
								const percentage = index === 0 ? 100 : (item.value / funnelData[0].value) * 100;

								return (
									<div key={item.stage}>
										<div className="flex items-center justify-between mb-2">
											<span className="text-slate-900">{item.stage}</span>
											<span className="text-slate-600">{item.value.toLocaleString()}</span>
										</div>
										<div className="relative h-12 bg-slate-100 rounded-lg overflow-hidden">
											<div
												className="h-full flex items-center justify-center transition-all"
												style={{ width: `${percentage}%`, backgroundColor: item.fill }}
											>
												<span className="text-white">{percentage.toFixed(1)}%</span>
											</div>
										</div>
										{index < funnelData.length - 1 && (
											<div className="flex items-center justify-center my-2">
												<ArrowRight className="w-4 h-4 text-slate-400" />
											</div>
										)}
									</div>
								);
							})}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Conversion Rates</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{conversionRates.map((item) => (
								<div key={item.stage} className="flex items-center justify-between">
									<span className="text-slate-900">{item.stage}</span>
									<span className="text-slate-600">{item.rate}%</span>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Weekly Trends */}
			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Weekly Conversion Trends</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="week" />
							<YAxis />
							<Tooltip />
							<Bar dataKey="conversions" fill="#3b82f6">
								<LabelList dataKey="conversions" position="top" formatter={(value) => value.toString()} />
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>

			{/* Top Sources */}
			<Card>
				<CardHeader>
					<CardTitle>Top Conversion Sources</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{topSources.map((source) => (
							<div key={source.source} className="flex items-center justify-between">
								<div className="flex items-center">
									<Badge className="mr-3" variant="outline">
										{source.rate.toFixed(1)}%
									</Badge>
									<span className="text-slate-900">{source.source}</span>
								</div>
								<span className="text-slate-600">
									{source.conversions} conversions
								</span>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
