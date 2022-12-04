export interface Todo {
  id: string;
  label: string;
  completed: boolean;
}

export type DarkModeType = 'light' | 'dark';
export type Filter = 'All' | 'Active' | 'Completed';