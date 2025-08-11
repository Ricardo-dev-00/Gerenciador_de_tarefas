import React, { useState, useCallback } from 'react';
import { useTodos } from '../hooks/useTodos';

function TodoInput() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleAdd = useCallback(() => {
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  }, [text, addTodo]);

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa..."
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        style={{ flex: 1, padding: 8 }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: '8px 16px',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background 0.2s',
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default React.memo(TodoInput);
