import { useState } from 'react';
import styles from './App.module.css';
import NavMenu from './components/NavMenu/NavMenu';
import TodoList from './components/TodoList/TodoList';
import { Filter } from './types/types';

const filters: Filter[] = ['All', 'Active', 'Completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  console.log(filter);
  return (
    <div className={styles.appWrapper}>
      <section className={styles.todoApp}>
        <NavMenu filters={filters} onChange={setFilter} />
        <hr />
        <TodoList filter={filter} />
      </section>
    </div>
  );
}

export default App;
