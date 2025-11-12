import { Dashboard, MyProfile, Leaderboard, MyLeads } from './views/user';

export type UserViewType = 'dashboard' | 'profile' | 'leaderboard' | 'myleads';

interface UserViewProps {
  currentView: UserViewType;
  onNavigate: (v: UserViewType) => void;
}

export default function UserView({ currentView, onNavigate }: UserViewProps) {
  const render = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={onNavigate as any} />;
      case 'profile':
        return <MyProfile />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'myleads':
        return <MyLeads />
      default:
        return <Dashboard onNavigate={onNavigate as any} />;
    }
  };

  return <div className="p-6">{render()}</div>;
}
