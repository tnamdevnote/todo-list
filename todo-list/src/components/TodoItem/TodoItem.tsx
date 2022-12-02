import { Todo } from '../../types/types';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li>
      {todo.label}
      <button onClick={() => onDelete(todo.id)}>delete</button>
    </li>
  );
}
