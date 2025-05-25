import { configureStore } from "@reduxjs/toolkit";
// import { createReducerManager } from "./createReducerManager";
import { rootReducer } from "./rootReducer";

// const staticReducers = {};

// const reducerManager = createReducerManager(staticReducers);

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
}) as any;

// type ExtendedStore = typeof store & {
//   reducerManager: ReturnType<typeof createReducerManager>;
// };

// const typedStore: ExtendedStore = store as ExtendedStore;
// typedStore.reducerManager = reducerManager;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
