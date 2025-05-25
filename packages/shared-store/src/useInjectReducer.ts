// shared-store/useInjectReducer.ts
import { Reducer } from "@reduxjs/toolkit";
import { store } from "./store";
import { useEffect } from "react";

export function useInjectReducer<Key extends keyof any, State = any>(
  key: Key,
  reducer: Reducer<State>
) {
  useEffect(() => {
    if (!store.reducerManager.getReducerMap()[key]) {
      store.reducerManager.add(key as string, reducer);
    }
  }, [key, reducer]);
}
