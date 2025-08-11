import React from 'react';
import { useTodos } from '../hooks/useTodos';

const filters = [
  { label: 'Todas', value: 'all' },
  { label: 'Concluídas', value: 'completed' },
  { label: 'Pendentes', value: 'pending' },
];

function TodoFilter() {
  const { filter, setFilter } = useTodos();

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          style={{
            padding: '6px 16px',
            background: filter === f.value ? '#1976d2ff' : '#eeeeee91',
               color: filter === f.value ? '#fff' : '#000000ff',
            border: '1px solid #000',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: filter === f.value ? 'bold' : 'normal',
            opacity: filter === f.value ? 1 : 0.6, // Opacidade customizável
            transition: 'opacity 0.2s',
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default React.memo(TodoFilter);
