import { useReducer } from 'react';
import uuid from 'react-uuid';
import style from './TodoList.module.css';
import TodoForm from '../TodoForm/TodoForm';
import NavMenu from '../NavMenu/NavMenu';
import todoReducer from '../../reducer/todoReducer';
import TodoItem from '../TodoItem/TodoItem';
import { text } from 'node:stream/consumers';

export default function TodoList() {
  const [todoList, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo = (text: string) => {
    dispatch({
      type: 'ADD_TODO',
      todo: {
        id: uuid(),
        label: text,
        status: 'active',
      },
    });
  };

  console.log(todoList);
  return (
    <section className={style.todoList}>
      <NavMenu />
      <ul className="todo__list">
        {todoList?.map(({ id, label, status }) => (
          <TodoItem key={id} label={label} status={status} />
        ))}
      </ul>
      <TodoForm onAddTodo={handleAddTodo} />
    </section>
  );
}
