import { Todo } from '../../types/types';

interface TodoItemProps {
  label: string;
  status: 'active' | 'completed';
}

export default function TodoItem({ label, status }: TodoItemProps) {
  return <li>{label}</li>;
}
