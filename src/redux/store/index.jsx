import { createStore } from '@reduxjs/toolkit';
import reducers from '../reducer/index';
//Logica
export const Store = createStore(reducers);
