import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('phoneBook/addItem');
export const deleteItem = createAction('phoneBook/deleteItem');
export const filterItem = createAction('phoneBook/filterItem');
