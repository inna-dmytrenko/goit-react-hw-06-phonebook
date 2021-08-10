import { combineReducers } from 'redux';
import filterReducer from './filter';
import itemsReducer from './phoneBook';

export const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
