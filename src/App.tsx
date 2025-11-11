import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { RevenueGoals } from './components/RevenueGoals';
import { LeadConversions } from './components/LeadConversions';
import { AICampaigns } from './components/AICampaigns';
import { Integrations } from './components/Integrations';

export type ViewType = 'dashboard' | 'revenue' | 'leads' | 'campaigns' | 'integrations';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} />;
      case 'revenue':
        return <RevenueGoals />;
      case 'leads':
        return <LeadConversions />;
      case 'campaigns':
        return <AICampaigns />;
      case 'integrations':
        return <Integrations />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
}