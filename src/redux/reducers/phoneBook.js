import { ADD_ITEM, DELETE_ITEM } from '../types';

const initialState = [
  { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
  { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
  { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
  { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
];
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      // return action.payload;
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
export default itemsReducer;
