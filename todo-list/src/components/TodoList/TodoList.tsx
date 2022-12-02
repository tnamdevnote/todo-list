import { useReducer } from 'react';
import style from './TodoList.module.css';
import TodoForm from '../TodoForm/TodoForm';
import NavMenu from '../NavMenu/NavMenu';
import todoReducer from '../../reducer/todoReducer';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
  const [todoList, dispatch] = useReducer(todoReducer, []);

  return (
    <section className={style.todoList}>
      <NavMenu />
      <ul className="todo__list">
        <TodoItem id="Todo" label="Todo" status="active" />
      </ul>
      <TodoForm />
    </section>
  );
}
