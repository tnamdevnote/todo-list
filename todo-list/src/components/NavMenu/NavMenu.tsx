import { Filter } from '../../types/types';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import styles from './NavMenu.module.css';
interface NavMenuProps {
  filters: Filter[];
  onChange: React.Dispatch<React.SetStateAction<Filter>>;
}
export default function NavMenu({ filters, onChange }: NavMenuProps) {
  return (
    <header className={styles.nav}>
      <button className="nav__toggle-dark">
        <WbSunnyIcon />
      </button>
      <ul className="nav__menu">
        {filters.map((filter) => {
          return (
            <li key={filter}>
              <button type="button" onClick={() => onChange(filter)}>
                {filter}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
