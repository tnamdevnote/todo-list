export interface Todo {
  id: string;
  label: string;
  completed: boolean;
}

export type Filter = 'All' | 'Active' | 'Completed';