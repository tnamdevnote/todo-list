import React, { useState } from 'react';

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
    onAddTodo(formData);
    setFormData('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo here"
        value={formData}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
