// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import { rootReducer } from '../reducers';

// const store = createStore(rootReducer, devToolsEnhancer());

// export default store;

//----   slices
// import { configureStore } from '@reduxjs/toolkit';
// import items from '../slices/phoneBook';

// import filter from '../slices/filter';

// const rootReducer = {
//   items,
//   filter,

// };
// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });
// export default store;
// -----   slices end

///  --------   toolkit

import storage from 'reduxjs-toolkit-persist/lib/storage'; // defaults to localStorage for web

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from '../phoneBook/phoneBook-reducers';

const persistConfig = {
  key: 'items',
  storage,
};

const _persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: _persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export let persistor = persistStore(store);
