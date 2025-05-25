import { lazy, Suspense, useEffect } from "react";
import { Header } from "./components/Header";

const ProductsList = lazy(() => import("product/ProductList"));

export function App() {
  return (
    <>
      <Header />
      <main className="flex-1 px-2 py-2">
        <Suspense fallback={<>Loading...</>}>
          <ProductsList />
        </Suspense>
      </main>
    </>
  );
}
