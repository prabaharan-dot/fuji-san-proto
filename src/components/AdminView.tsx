import { Dashboard, RevenueGoals, LeadConversions, AICampaigns, Integrations } from './views/admin';
import { BadgeSetup } from './Setup/BadgeSetup';

export type AdminViewType = 'dashboard' | 'revenue' | 'leads' | 'campaigns' | 'integrations' | 'setup';

interface AdminViewProps {
  currentView: AdminViewType;
  onNavigate: (v: AdminViewType) => void;
}

export default function AdminView({ currentView, onNavigate }: AdminViewProps) {
  const render = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={onNavigate} />;
      case 'revenue':
        return <RevenueGoals />;
      case 'leads':
        return <LeadConversions />;
      case 'campaigns':
        return <AICampaigns />;
      case 'integrations':
        return <Integrations />;
      case 'setup':
        return <BadgeSetup />;
      default:
        return <Dashboard onNavigate={onNavigate} />;
    }
  };

  return <div className="p-6">{render()}</div>;
}
