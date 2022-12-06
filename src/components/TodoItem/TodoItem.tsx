import styles from './TodoItem.module.css';
import { Todo } from '../../types/types';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const theme = useContext(DarkModeContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(todo.id, e.target.checked);
  };

  return (
    <li className={styles.todoItem}>
      <label
        className={`${styles.todoLabel} ${theme === 'dark' ? styles.dark : styles.light}`}
        htmlFor={todo.label}
      >
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
