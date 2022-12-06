import React, { useState } from 'react';
import styles from '../TodoForm/TodoForm.module.css';
import AddIcon from '@mui/icons-material/Add';

interface TodoFormProp {
  onAddTodo: (text: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProp) {
  const [formData, setFormData] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.trim()) {
      onAddTodo(formData);
      setFormData('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add todo here"
        value={formData}
        onChange={handleChange}
      />
      <button className={styles.add} type="submit">
        <AddIcon className={styles.icon} />
      </button>
    </form>
  );
}
