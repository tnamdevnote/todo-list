import { createContext, useContext, useState } from 'react';
import { DarkModeType } from '../types/types';

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | null>(null);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('The context must be used inside the App component');
  }

  return context;
}
