import { ReducerAction } from 'react';
import { Todo } from '../types/types';

const INITIAL_STATE: Todo[] = [];

export default function todoReducer(
  state = INITIAL_STATE,
  action: { type: string; todo: Todo }
) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, label, status } = action.todo;
      return [...state, { id, label, status }];
    }
  }
}
