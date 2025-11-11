import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import AdminView, { AdminViewType } from './components/AdminView';
import UserView, { UserViewType } from './components/UserView';

export type AppView = AdminViewType | UserViewType;

export default function App() {
  const [role, setRole] = useState<'admin' | 'user'>('admin');
  const [adminView, setAdminView] = useState<AdminViewType>('dashboard');
  const [userView, setUserView] = useState<UserViewType>('dashboard');

  const handleNavigate = (view: AppView) => {
    if (role === 'admin') setAdminView(view as AdminViewType);
    else setUserView(view as UserViewType);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar
        currentView={role === 'admin' ? adminView : userView}
        onNavigate={handleNavigate}
        role={role}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setRole(role === 'admin' ? 'user' : 'admin')}
            className="px-3 py-1 rounded bg-slate-200"
          >
            Switch to {role === 'admin' ? 'User' : 'Admin'} view
          </button>
        </div>

        {role === 'admin' ? (
          <AdminView currentView={adminView} onNavigate={setAdminView} />
        ) : (
          <UserView currentView={userView} onNavigate={setUserView} />
        )}
      </main>
    </div>
  );
}