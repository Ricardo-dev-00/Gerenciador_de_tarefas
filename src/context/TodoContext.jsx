import React, { createContext, useContext, useReducer, useMemo, useEffect } from 'react';

const TodoContext = createContext();

const initialState = {
  todos: [],
  filter: 'all', // 'all' | 'completed' | 'pending'
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.text, completed: false },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}


export function TodoProvider({ children }) {
  // Carregar do localStorage ao iniciar
  const getInitialState = () => {
    try {
      const data = localStorage.getItem('todos-app');
      if (data) return JSON.parse(data);
    } catch {}
    return initialState;
  };

  const [state, dispatch] = useReducer(todoReducer, getInitialState());

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('todos-app', JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
