import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { RevenueGoals } from './components/RevenueGoals';
import { LeadConversions } from './components/LeadConversions';
import { AICampaigns } from './components/AICampaigns';
import { Integrations } from './components/Integrations';
import { UserDashboard } from './components/UserDashboard';
import { MyGoals } from './components/MyGoals';
import { MyLeads } from './components/MyLeads';
import { MyCampaigns } from './components/MyCampaigns';
import { MyAIAgents } from './components/MyAIAgents';
import { AdminAIAssistant } from './components/AdminAIAssistant';
import { AdminBadges } from './components/AdminBadges';

export type ViewType = 'dashboard' | 'revenue' | 'leads' | 'campaigns' | 'integrations' | 'ai-agents' | 'ai-assistant' | 'badges';
export type UserRole = 'admin' | 'user';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [userRole, setUserRole] = useState<UserRole>('admin');

  const renderView = () => {
    if (userRole === 'admin') {
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
        case 'ai-assistant':
          return <AdminAIAssistant />;
        case 'badges':
          return <AdminBadges />;
        default:
          return <Dashboard onNavigate={setCurrentView} />;
      }
    } else {
      // User view
      switch (currentView) {
        case 'dashboard':
          return <UserDashboard />;
        case 'revenue':
          return <MyGoals />;
        case 'leads':
          return <MyLeads />;
        case 'campaigns':
          return <MyCampaigns />;
        case 'ai-agents':
          return <MyAIAgents />;
        default:
          return <UserDashboard />;
      }
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar 
        currentView={currentView} 
        onNavigate={setCurrentView}
        userRole={userRole}
        onRoleChange={setUserRole}
      />
      <main className="flex-1 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
}