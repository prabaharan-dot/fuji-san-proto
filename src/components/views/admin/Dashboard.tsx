import BaseDashboard from '../shared/BaseDashboard';

interface Props {
  onNavigate?: (view: any) => void;
}

const noop = () => {};

export function Dashboard(props: Props) {
  const handler = props.onNavigate ?? noop;

  return (
    <div>
      <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Admin Dashboard</h2>
              <p className="text-sm text-slate-600">Admin overview and controls</p>
            </div>
          </div>
        </div>
      </div>

      {/* render the existing detailed dashboard underneath */}
      <BaseDashboard onNavigate={handler} />
    </div>
  );
}
