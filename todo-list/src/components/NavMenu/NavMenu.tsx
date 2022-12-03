import { Filter } from '../../types/types';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import styles from './NavMenu.module.css';
interface NavMenuProps {
  filters: Filter[];
  onChange: React.Dispatch<React.SetStateAction<Filter>>;
}
export default function NavMenu({ filters, onChange }: NavMenuProps) {
  return (
    <header className={styles.header}>
      <button className={styles.toggleDark}>
        <WbSunnyIcon />
      </button>
      <ul className={styles.menu}>
        {filters.map((filter) => {
          return (
            <li key={filter}>
              <button
                className={styles.menuButton}
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
