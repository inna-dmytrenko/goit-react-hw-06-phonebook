import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterItem: (state, action) => action.payload,
  },
});
export const { filterItem } = filterSlice.actions;
export default filterSlice.reducer;
