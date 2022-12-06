import { useContext } from 'react';
import styles from './NavMenu.module.css';
import { DarkModeType, Filter } from '../../types/types';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkModeContext } from '../../context/DarkModeContext';

interface NavMenuProps {
  filters: Filter[];
  activeFilter: Filter;
  onToggleDark: React.Dispatch<React.SetStateAction<DarkModeType>>;
  onChange: React.Dispatch<React.SetStateAction<Filter>>;
}

export default function NavMenu({ filters, activeFilter, onToggleDark, onChange }: NavMenuProps) {
  const theme = useContext(DarkModeContext);
  const themeClass = theme === 'dark' ? styles.dark : styles.light;

  const handleToggle = () => {
    theme === 'light' ? onToggleDark('dark') : onToggleDark('light');
  };

  return (
    <header className={styles.header}>
      <button className={styles.toggle} type="button" onClick={handleToggle}>
        {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
      <ul className={styles.menu}>
        {filters.map((filter) => {
          return (
            <li className={styles.menuItem} key={filter}>
              <button
                className={`${styles.menuButton} ${
                  filter === activeFilter ? styles.active : ''
                } ${themeClass}`}
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
