import { useState } from 'react';
import styles from './App.module.css';
import NavMenu from './components/NavMenu/NavMenu';
import TodoList from './components/TodoList/TodoList';
import { Filter } from './types/types';

const filters: Filter[] = ['All', 'Active', 'Completed'];
function App() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className={styles.appWrapper}>
      <section className={styles.todoApp}>
        <NavMenu
          filters={filters}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />
        <hr />
        <TodoList filter={activeFilter} />
      </section>
    </div>
  );
}

export default App;
