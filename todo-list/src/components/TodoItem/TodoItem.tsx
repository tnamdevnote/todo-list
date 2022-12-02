import React, { useState } from 'react';
import { Todo } from '../../types/types';

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
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleInputChange}
        />
        {todo.label}
      </label>
      <button onClick={() => onDelete(todo.id)}>delete</button>
    </li>
  );
}
