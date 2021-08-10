import { ADD_ITEM } from '../types';

export const addItem = formData => ({
  type: ADD_ITEM,
  payload: formData,
});
