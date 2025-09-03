import { createContext } from 'react';
import type { IState } from '../types/interfaces';
import { initialState } from './initialState';

export const ShopContext = createContext<IState>(initialState);
