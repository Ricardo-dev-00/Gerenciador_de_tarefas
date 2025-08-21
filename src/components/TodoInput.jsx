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

  const [isFocused, setIsFocused] = useState(false);
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa..."
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          flex: 1,
          padding: 8,
          border: 'none',
          outline: 'none',
          boxShadow: isFocused ? '0 0 0 2px #1976d2' : 'none',
          borderRadius: 4
        }}
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
