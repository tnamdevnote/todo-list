import { useState } from 'react';
import styles from './App.module.css';
import NavMenu from './components/NavMenu/NavMenu';
import TodoList from './components/TodoList/TodoList';
import { DarkModeType, Filter } from './types/types';
import { useDarkModeContext } from './context/DarkModeContext';

const filters: Filter[] = ['All', 'Active', 'Completed'];

function App() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const { darkMode } = useDarkModeContext();

  return (
    <div className={styles.appWrapper}>
      <section className={`${styles.todoApp} ${darkMode && styles.dark}`}>
        <NavMenu filters={filters} activeFilter={activeFilter} onChange={setActiveFilter} />
        <hr />
        <TodoList filter={activeFilter} />
      </section>
    </div>
  );
}

export default App;
