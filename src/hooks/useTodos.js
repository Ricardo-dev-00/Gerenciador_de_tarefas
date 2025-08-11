import { useTodoContext } from '../context/TodoContext';
import { useMemo } from 'react';

export function useTodos() {
  const { state, dispatch } = useTodoContext();

  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      case 'pending':
        return state.todos.filter(todo => !todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  return {
    todos: filteredTodos,
    addTodo: text => dispatch({ type: 'ADD_TODO', text }),
    toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id }),
    removeTodo: id => dispatch({ type: 'REMOVE_TODO', id }),
    setFilter: filter => dispatch({ type: 'SET_FILTER', filter }),
    filter: state.filter,
  };
}
