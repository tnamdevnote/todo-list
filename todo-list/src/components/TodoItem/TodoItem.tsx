import styles from './TodoItem.module.css';
import { Todo } from '../../types/types';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(todo.id, e.target.checked);
  };

  return (
    <li className={styles.todoItem}>
      <label className={styles.todoLabel} htmlFor={todo.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={todo.label}
          checked={todo.completed}
          onChange={handleInputChange}
        />
        {todo.label}
      </label>
      <button className={styles.delete} onClick={() => onDelete(todo.id)}>
        <DeleteIcon />
      </button>
    </li>
  );
}
