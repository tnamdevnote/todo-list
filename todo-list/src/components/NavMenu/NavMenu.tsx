import styles from './NavMenu.module.css';
export default function NavMenu() {
  return (
    <>
      <nav className={styles.nav}>
        <button className="nav__toggle-dark">Toggle</button>
        <div className="nav__menu">
          <a href="#">All</a>
          <a href="#">Active</a>
          <a href="#">Completed</a>
        </div>
      </nav>
      <hr />
    </>
  );
}
