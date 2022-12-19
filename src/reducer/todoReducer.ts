import { Todo } from '../types/types';

type Action =
  | { type: 'ADD_TODO'; todo: Todo }
  | { type: 'TOGGLE_TODO'; id: string; completed: boolean }
  | { type: 'DELETE_TODO'; id: string };

export default function todoReducer(state: Todo[] = [], action: Action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, label, completed } = action.todo;
      const todoList = [...state, { id, label, completed }];
      localStorage.setItem('todo', JSON.stringify(todoList));

      return todoList;
    }
    case 'TOGGLE_TODO': {
      const todoList = [...state].map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: action.completed,
          };
        }

        return todo;
      });

      localStorage.setItem('todo', JSON.stringify(todoList));
      return todoList;
    }
    case 'DELETE_TODO': {
      const todoList = [...state].filter((todo) => todo.id !== action.id);
      localStorage.setItem('todo', JSON.stringify(todoList));

      return todoList;
    }
  }
}
