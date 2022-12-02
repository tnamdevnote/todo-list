import { ReducerAction } from 'react';
import { Todo } from '../types/types';

type Action =
  | { type: 'ADD_TODO'; todo: Todo }
  | { type: 'DELETE_TODO'; id: string };

export default function todoReducer(state: Todo[] = [], action: Action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, label, status } = action.todo;
      return [...state, { id, label, status }];
    }
    case 'DELETE_TODO': {
      return [...state].filter((todo) => todo.id !== action.id);
    }
  }
}
