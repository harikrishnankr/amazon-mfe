import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { rootReducer, store } from "@amazon-mfe/shared-store";
import { Provider } from "react-redux";
import { _initialize, shellSlice } from "./shellSlice";
import { WithSlice } from "@reduxjs/toolkit";

const injectedShellSlice = shellSlice.injectInto(rootReducer);

declare module "@amazon-mfe/shared-store" {
  export interface LazyLoadedSlices extends WithSlice<typeof shellSlice> {}
}

// This is needed without this initial state wont be populated
store.dispatch(_initialize());

export default injectedShellSlice.reducer;

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
