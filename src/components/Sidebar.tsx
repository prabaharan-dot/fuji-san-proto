import {
  LayoutDashboard,
  Target,
  TrendingUp,
  Sparkles,
  Settings,
  HelpCircle,
  Plug,
} from "lucide-react";
import { ViewType } from "../App";

interface SidebarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export function Sidebar({
  currentView,
  onNavigate,
}: SidebarProps) {
  const navItems = [
    {
      id: "dashboard" as ViewType,
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "revenue" as ViewType,
      label: "Revenue Goals",
      icon: Target,
    },
    {
      id: "leads" as ViewType,
      label: "Lead Conversions",
      icon: TrendingUp,
    },
    {
      id: "campaigns" as ViewType,
      label: "AI Campaigns",
      icon: Sparkles,
    },
    {
      id: "integrations" as ViewType,
      label: "Integrations",
      icon: Plug,
    },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069"
            alt="RevenueTrack Logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="text-slate-900">Fujisan AI</span>
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