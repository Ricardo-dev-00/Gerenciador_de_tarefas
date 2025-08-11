import React from 'react';
import { useTodos } from '../hooks/useTodos';

function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodos();

  if (todos.length === 0) {
    return <p style={{ color: '#888' }}>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
