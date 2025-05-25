import { configureStore } from '@reduxjs/toolkit';
import { createReducerManager } from './createReducerManager';

const staticReducers = {};

const reducerManager = createReducerManager(staticReducers);

export const store = configureStore({
  reducer: reducerManager.reduce,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
}) as any;

store.reducerManager = reducerManager;
