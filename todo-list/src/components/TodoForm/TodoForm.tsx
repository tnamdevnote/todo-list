import React, { useState } from 'react';

export default function TodoForm() {
  const [formData, setFormData] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
