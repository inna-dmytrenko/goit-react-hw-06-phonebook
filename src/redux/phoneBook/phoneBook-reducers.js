import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  addItem,
  deleteItem,
  filterItem,
} from '../phoneBook/phoneBook-actions';

const initialState = [
  { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
  { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
  { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
  { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
];
const items = createReducer(initialState, {
  [addItem]: (state, action) => [...state, action.payload],
  [deleteItem]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});
const filter = createReducer('', {
  [filterItem]: (_, action) => action.payload,
});

export const rootReducer = combineReducers({ items, filter });
