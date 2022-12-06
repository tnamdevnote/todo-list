import { createContext } from 'react';
import { DarkModeType } from '../types/types';

export const DarkModeContext = createContext<DarkModeType | null>(null);
