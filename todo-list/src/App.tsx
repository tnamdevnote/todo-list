import styles from './App.module.css';
import NavMenu from './components/NavMenu/NavMenu';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className={styles.appWrapper}>
      <TodoList />
    </div>
  );
}

export default App;
