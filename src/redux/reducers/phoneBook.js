import { ADD_ITEM } from '../types';

const initialState = [];
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default itemsReducer;
