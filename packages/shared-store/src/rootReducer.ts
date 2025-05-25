import { combineSlices } from "@reduxjs/toolkit";

declare module './rootReducer' {
  export interface LazyLoadedSlices {}
}

// Start with no initial slices, or just global ones if you have them.
// If you have absolutely no initial slices, you can pass nothing or an empty object.
export const rootReducer = combineSlices();
