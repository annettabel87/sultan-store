import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import Preloader from "./common/Preloader/Preloader";
import { ROUTE } from "./common/helpers";
import { Header } from "./components/Header/Header";
import { BasketPage } from "./pages/BasketPage";
import { CardPage } from "./pages/CardPage";
import { CatalogPage } from "./pages/CatalogPage";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <Breadcrumbs />
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path={ROUTE.CATALOG} element={<CatalogPage />} />
              <Route path={ROUTE.CARD} element={<CardPage />} />
              <Route path={ROUTE.BASKET} element={<BasketPage />} />
              <Route
                path={ROUTE.ALL}
                element={<Navigate to={ROUTE.CATALOG} />}
              />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
