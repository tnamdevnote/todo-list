import styles from './App.module.css';
import NavMenu from './components/NavMenu/NavMenu';

function App() {
  return (
    <div className={styles.appWrapper}>
      <section className={styles.app}>
        <NavMenu></NavMenu>
      </section>
    </div>
  );
}

export default App;
