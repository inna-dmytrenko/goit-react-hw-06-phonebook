import { ADD_ITEM, DELETE_ITEM } from '../types';
import { FILTER_ITEM } from '../types';

export const addItem = formData => ({
  type: ADD_ITEM,
  payload: formData,
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id,
});

export const filterItem = value => ({
  type: FILTER_ITEM,
  payload: value,
});
