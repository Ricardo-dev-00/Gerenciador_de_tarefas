import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  return (
    <TodoProvider>
      <div style={{  padding: 32, borderRadius: 8, minWidth: 350 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 34 , }}>Gerenciador de Tarefas</h1>
        <TodoInput />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
