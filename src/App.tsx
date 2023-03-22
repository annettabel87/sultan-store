import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.module.scss";
import Preloader from "./common/Preloader/Preloader";
import { ROUTE } from "./common/routers";
import { BasketPage } from "./pages/BasketPage";
import { CardPage } from "./pages/CardPage";
import { CatalogPage } from "./pages/CatalogPage";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path={ROUTE.CATALOG} element={<CatalogPage />} />
          <Route path={ROUTE.CARD} element={<CardPage />} />
          <Route path={ROUTE.BASKET} element={<BasketPage />} />
          <Route path={ROUTE.ALL} element={<Navigate to="/catalog" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
