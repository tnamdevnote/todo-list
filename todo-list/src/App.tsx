import { useState } from 'react';
import styles from './App.module.css';
import NavMenu from './components/NavMenu/NavMenu';
import TodoList from './components/TodoList/TodoList';
import { DarkModeContext } from './context/DarkModeContext';
import { DarkModeType, Filter } from './types/types';

const filters: Filter[] = ['All', 'Active', 'Completed'];

function App() {
  const [theme, setTheme] = useState<DarkModeType>('light');
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  console.log(theme);
  return (
    <DarkModeContext.Provider value={theme}>
      <div className={styles.appWrapper}>
        <section className={`${styles.todoApp} ${theme === 'dark' ? styles.dark : styles.light}`}>
          <NavMenu
            filters={filters}
            activeFilter={activeFilter}
            onToggleDark={setTheme}
            onChange={setActiveFilter}
          />
          <hr />
          <TodoList filter={activeFilter} />
        </section>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
