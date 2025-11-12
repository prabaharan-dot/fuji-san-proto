import { LayoutDashboard, Target, TrendingUp, Sparkles, Settings, HelpCircle, Plug, ShieldCheck, User, Bot, Award } from 'lucide-react';
import { ViewType, UserRole } from '../App';
import { Badge } from './ui/badge';

interface SidebarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  userRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export function Sidebar({ currentView, onNavigate, userRole, onRoleChange }: SidebarProps) {
  const adminNavItems = [
    { id: 'dashboard' as ViewType, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'revenue' as ViewType, label: 'Revenue Goals', icon: Target },
    { id: 'leads' as ViewType, label: 'Lead Conversions', icon: TrendingUp },
    { id: 'campaigns' as ViewType, label: 'AI Campaigns', icon: Sparkles },
    { id: 'integrations' as ViewType, label: 'Integrations', icon: Plug },
    { id: 'ai-assistant' as ViewType, label: 'AI Assistant', icon: Bot },
    { id: 'badges' as ViewType, label: 'Badges & Awards', icon: Award },
  ];

  const userNavItems = [
    { id: 'dashboard' as ViewType, label: 'My Dashboard', icon: LayoutDashboard },
    { id: 'revenue' as ViewType, label: 'My Goals', icon: Target },
    { id: 'leads' as ViewType, label: 'My Leads', icon: TrendingUp },
    { id: 'campaigns' as ViewType, label: 'My Campaigns', icon: Sparkles },
    { id: 'ai-agents' as ViewType, label: 'AI Agents', icon: Bot },
  ];

  const navItems = userRole === 'admin' ? adminNavItems : userNavItems;

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069"
            alt="RevenueTrack Logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="text-slate-900">Fujisan AI - Proto</span>
        </div>
      </div>

      {/* View Switcher */}
      <div className="p-4 border-b border-slate-200">
        <div className="bg-slate-100 rounded-lg p-1 flex gap-1">
          <button
            onClick={() => {
              onRoleChange('admin');
              onNavigate('dashboard');
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md transition-all ${
              userRole === 'admin'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Admin</span>
          </button>
          <button
            onClick={() => {
              onRoleChange('user');
              onNavigate('dashboard');
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md transition-all ${
              userRole === 'user'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>User</span>
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span>Help</span>
        </button>
      </div>
    </aside>
  );
}