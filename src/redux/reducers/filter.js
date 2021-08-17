import { FILTER_ITEM } from '../types';
import itemsReducer from './phoneBook';

const initialState = '';
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ITEM:
      console.log(state);
      return [...state, action.payload];
    default:
      return state;
  }
};
export default filterReducer;
