import { FILTER_ITEM } from '../types';

const initialState = '';
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ITEM:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
export default filterReducer;
