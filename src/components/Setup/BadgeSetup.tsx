import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Textarea } from '../ui/textarea';

type BadgeDefinition = {
  id: string;
  name: string;
  description?: string;
  criteria: string; // simple expression or description for now
};

const initialBadges: BadgeDefinition[] = [
  { id: 'first-win', name: 'First Win', description: 'Awarded when employee closes their first deal', criteria: 'conversions >= 1 && previousConversions === 0' },
  { id: 'deal-closer', name: 'Deal Closer', description: 'High conversion rate this month', criteria: 'monthlyConversionRate >= 35' },
  { id: 'pipeline-builder', name: 'Pipeline Builder', description: 'Generates high number of qualified leads', criteria: 'qualifiedLeads >= 50' },
];

export function BadgeSetup() {
  const [badges, setBadges] = useState<BadgeDefinition[]>(initialBadges);
  const [editing, setEditing] = useState<BadgeDefinition | null>(null);

  function startCreate() {
    setEditing({ id: `badge-${Date.now()}`, name: '', description: '', criteria: '' });
  }

  function startEdit(b: BadgeDefinition) {
    setEditing({ ...b });
  }

  function save() {
    if (!editing) return;
    setBadges((prev) => {
      const exists = prev.find((p) => p.id === editing.id);
      if (exists) {
        return prev.map((p) => (p.id === editing.id ? editing : p));
      }
      return [...prev, editing];
    });
    setEditing(null);
  }

  function remove(id: string) {
    setBadges((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-slate-900 mb-2">Setup — Badges</h1>
          <p className="text-slate-600">Configure badges and criteria used to award employees</p>
        </div>
        <div>
          <Button onClick={startCreate}>New Badge</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {badges.map((b) => (
          <Card key={b.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle>{b.name}</CardTitle>
                <p className="text-slate-600 text-sm">{b.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => startEdit(b)}>Edit</Button>
                <Button variant="ghost" size="sm" onClick={() => remove(b.id)}>Delete</Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Criteria:</p>
              <pre className="bg-slate-100 p-2 rounded mt-2 text-sm">{b.criteria}</pre>
            </CardContent>
          </Card>
        ))}
      </div>

      {editing && (
        <Card>
          <CardHeader>
            <CardTitle>{badges.find((x) => x.id === editing.id) ? 'Edit Badge' : 'New Badge'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <Input value={editing.name} onChange={(e: any) => setEditing({ ...editing, name: e.target.value })} placeholder="Badge name" />
              <Textarea value={editing.description} onChange={(e: any) => setEditing({ ...editing, description: e.target.value })} placeholder="Short description" />
              <Textarea value={editing.criteria} onChange={(e: any) => setEditing({ ...editing, criteria: e.target.value })} placeholder="Criteria expression (e.g. conversions >= 1)" />
              <div className="flex gap-2">
                <Button onClick={save}>Save</Button>
                <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
