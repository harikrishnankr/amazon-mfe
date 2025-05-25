import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
// import { Provider } from "react-redux";
// import { store } from "@amazon-mfe/shared-store";

const ProductsList = lazy(() => import("product/ProductList"));

export function App() {
  return (
    <>
      {/* <Provider store={store}> */}
        <Header />
        <main className="flex-1 px-2 py-2">
          <Suspense fallback={<>Loading...</>}>
            <ProductsList />
          </Suspense>
        </main>
      {/* </Provider> */}
    </>
  );
}
