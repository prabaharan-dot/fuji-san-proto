import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Progress } from '../../ui/progress';
import { Plus, TrendingUp, Calendar, Sparkles } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const monthlyData = [
	{ month: 'Jan', actual: 45000, goal: 50000, forecast: 46000 },
	{ month: 'Feb', actual: 52000, goal: 55000, forecast: 53000 },
	{ month: 'Mar', actual: 48000, goal: 55000, forecast: 51000 },
	{ month: 'Apr', actual: 61000, goal: 60000, forecast: 62000 },
	{ month: 'May', actual: 68000, goal: 65000, forecast: 69000 },
	{ month: 'Jun', actual: 72000, goal: 70000, forecast: 73000 },
	{ month: 'Jul', actual: 0, goal: 75000, forecast: 76000 },
	{ month: 'Aug', actual: 0, goal: 80000, forecast: 82000 },
];

const goals = [
	{ id: 1, name: 'Q2 Revenue Target', current: 181000, target: 210000, deadline: '2025-06-30', status: 'on-track' },
	{ id: 2, name: 'Annual Recurring Revenue', current: 520000, target: 750000, deadline: '2025-12-31', status: 'on-track' },
	{ id: 3, name: 'New Customer Revenue', current: 84000, target: 120000, deadline: '2025-09-30', status: 'at-risk' },
];

function computeInsights(goal: { current: number; target: number; deadline: string; status: string }) {
	const now = new Date();
	const deadline = new Date(goal.deadline);
	const msLeft = deadline.getTime() - now.getTime();
	const daysLeft = Math.max(0, Math.ceil(msLeft / (1000 * 60 * 60 * 24)));
	const remaining = Math.max(0, goal.target - goal.current);
	const monthsLeft = Math.max(1, Math.ceil(daysLeft / 30));
	const neededPerMonth = Math.ceil(remaining / monthsLeft);

	const atRiskItems: string[] = [];
	if (goal.status !== 'on-track') atRiskItems.push('Behind expected pace');
	if (remaining > goal.target * 0.2) atRiskItems.push('Large revenue gap remaining');
	if (daysLeft < 30) atRiskItems.push('Short time to deadline');

	const recommendations: string[] = [];
	recommendations.push(`Target additional ~$${neededPerMonth.toLocaleString()} / month`);
	recommendations.push('Prioritize high-converting campaigns and top sources');
	recommendations.push('Reassign top performers to high-value accounts');
	recommendations.push('Launch targeted AI campaigns for pipeline acceleration');

	return {
		daysLeft,
		remaining,
		neededPerMonth,
		atRiskItems,
		recommendations,
	};
}

export default function RevenueGoals() {
	const [openGoal, setOpenGoal] = useState<number | null>(null);

	return (
		<div className="p-8">
			<div className="flex items-center justify-between mb-8">
				<div>
					<h1 className="text-slate-900 mb-2">Revenue Goals</h1>
					<p className="text-slate-600">Track and manage your revenue targets</p>
				</div>
				<Button>
					<Plus className="w-4 h-4 mr-2" />
					New Goal
				</Button>
			</div>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<Card>
					<CardHeader>
						<CardTitle className="text-slate-600">Current Month</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-slate-900 mb-2">$72,000</div>
						<Progress value={103} className="mb-2" />
						<p className="text-slate-600">103% of $70,000 goal</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="text-slate-600">Quarter Progress</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-slate-900 mb-2">$181,000</div>
						<Progress value={86} className="mb-2" />
						<p className="text-slate-600">86% of $210,000 goal</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="text-slate-600">Year to Date</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-slate-900 mb-2">$346,000</div>
						<Progress value={69} className="mb-2" />
						<p className="text-slate-600">69% of $500,000 goal</p>
					</CardContent>
				</Card>
			</div>

			{/* Revenue Trend Chart */}
			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Revenue Trend & Forecast</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={300}>
						<AreaChart data={monthlyData}>
							<CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
							<XAxis dataKey="month" stroke="#64748b" />
							<YAxis stroke="#64748b" />
							<Tooltip />
							<Area type="monotone" dataKey="goal" stroke="#94a3b8" fill="#f1f5f9" strokeWidth={2} />
							<Area type="monotone" dataKey="forecast" stroke="#a855f7" fill="#f3e8ff" strokeWidth={2} strokeDasharray="5 5" />
							<Area type="monotone" dataKey="actual" stroke="#3b82f6" fill="#dbeafe" strokeWidth={2} />
						</AreaChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>

			{/* Active Goals */}
			<Card>
				<CardHeader>
					<CardTitle>Active Goals</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						{goals.map((goal) => {
							const progress = Math.round((goal.current / goal.target) * 100);
							return (
								<div key={goal.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
									<div className="flex items-start justify-between mb-3">
										<div>
											<h3 className="text-slate-900 mb-1">{goal.name}</h3>
											<div className="flex items-center gap-4 text-slate-600">
												<span className="flex items-center gap-1">
													<TrendingUp className="w-4 h-4" />
													${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
												</span>
												<span className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													{new Date(goal.deadline).toLocaleDateString()}
												</span>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Button variant="outline" size="sm" onClick={() => setOpenGoal(openGoal === goal.id ? null : goal.id)}>
												<Sparkles className="w-4 h-4 mr-2" />
												AI Insights
											</Button>
										</div>
									</div>

									{openGoal === goal.id && (
										(() => {
											const insights = computeInsights(goal);
											return (
												<div className="mb-4 p-4 bg-slate-50 rounded">
													<div className="mb-2">
														<strong className="text-slate-900">Overview</strong>
														<p className="text-slate-600 text-sm mt-1">{insights.daysLeft} days left • ${insights.remaining.toLocaleString()} remaining</p>
													</div>
													<div className="mb-2">
														<strong className="text-slate-900">At-risk items</strong>
														{insights.atRiskItems.length ? (
															<ul className="list-disc list-inside text-slate-600 text-sm mt-1">
																{insights.atRiskItems.map((it) => (
																	<li key={it}>{it}</li>
																))}
															</ul>
														) : (
															<p className="text-slate-600 text-sm mt-1">No immediate at-risk flags</p>
														)}
													</div>
													<div>
														<strong className="text-slate-900">Recommendations</strong>
														<ul className="list-disc list-inside text-slate-600 text-sm mt-1">
															{insights.recommendations.map((r) => (
																<li key={r}>{r}</li>
															))}
														</ul>
													</div>
												</div>
											);
										})()
									)}

									<Progress value={progress} className="mb-2" />
									<p className="text-slate-600">{progress}% complete</p>
								</div>
							);
						})}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}