// import { filterItem } from '../actions/filter';
import { FILTER_ITEM } from '../types';

const initialState = '';
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ITEM:
      //     return contacts.filter((obj) => {
      //   return obj.name.toLowerCase().includes(filter.toLowerCase().trim());
      // });
      console.log(state);
      return action.payload;
    // return action.payload;
    // return state.filter(item => item.str !== action.payload);
    default:
      return state;
  }
};
export default filterReducer;
