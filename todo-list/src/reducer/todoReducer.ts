import { Todo } from '../types/types';

type Action =
  | { type: 'ADD_TODO'; todo: Todo }
  | { type: 'TOGGLE_TODO'; id: string; completed: boolean }
  | { type: 'DELETE_TODO'; id: string };

export default function todoReducer(state: Todo[] = [], action: Action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, label, completed } = action.todo;
      return [...state, { id, label, completed }];
    }
    case 'TOGGLE_TODO': {
      return [...state].map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: action.completed,
          };
        }
        return todo;
      });
    }
    case 'DELETE_TODO': {
      return [...state].filter((todo) => todo.id !== action.id);
    }
  }
}
