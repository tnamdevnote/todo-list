import { useReducer } from 'react';
import uuid from 'react-uuid';
import styles from './TodoList.module.css';
import TodoForm from '../TodoForm/TodoForm';
import todoReducer from '../../reducer/todoReducer';
import TodoItem from '../TodoItem/TodoItem';
import { Filter, Todo } from '../../types/types';

interface TodoListProps {
  filter: 'All' | 'Active' | 'Completed';
}

export default function TodoList({ filter }: TodoListProps) {
  const [todoList, dispatch] = useReducer(todoReducer, getStoredTodoList());

  const handleAddTodo = (text: string) => {
    dispatch({
      type: 'ADD_TODO',
      todo: {
        id: uuid(),
        label: text,
        completed: false,
      },
    });
  };

  const handleToggleTodo = (id: string, completed: boolean) => {
    dispatch({
      type: 'TOGGLE_TODO',
      id,
      completed,
    });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({
      type: 'DELETE_TODO',
      id,
    });
  };

  const filteredList = getFilteredTodoList(todoList, filter);
  return (
    <>
      <ul className={styles.todoList}>
        {filteredList?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
      <TodoForm onAddTodo={handleAddTodo} />
    </>
  );
}

function getStoredTodoList() {
  const reference = localStorage.getItem('todo');
  if (reference) return JSON.parse(reference);
  return [];
}

function getFilteredTodoList(todoList: Todo[], filter: Filter) {
  if (filter === 'All') {
    return todoList;
  }
  if (filter === 'Active') {
    return todoList.filter((todo) => todo.completed === false);
  }
  if (filter === 'Completed') {
    return todoList.filter((todo) => todo.completed === true);
  }
}
