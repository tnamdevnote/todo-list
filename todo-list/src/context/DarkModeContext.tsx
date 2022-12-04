import { createContext, useState } from 'react';
import { DarkModeType } from '../types/types';

export const DarkModeContext = createContext<DarkModeType | null>(null);
