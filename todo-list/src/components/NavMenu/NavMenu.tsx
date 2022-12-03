import { Filter } from '../../types/types';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import styles from './NavMenu.module.css';
interface NavMenuProps {
  filters: Filter[];
  activeFilter: Filter;
  onChange: React.Dispatch<React.SetStateAction<Filter>>;
}
export default function NavMenu({ filters, activeFilter, onChange }: NavMenuProps) {
  return (
    <header className={styles.header}>
      <button className={styles.toggle} type="button">
        <WbSunnyIcon />
      </button>
      <ul className={styles.menu}>
        {filters.map((filter) => {
          return (
            <li className={styles.menuItem} key={filter}>
              <button
                className={`${styles.menuButton} ${filter === activeFilter ? styles.active : ''}`}
                type="button"
                onClick={() => onChange(filter)}
              >
                {filter}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
