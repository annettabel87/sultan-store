import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "./common/Preloader/Preloader";
import { ROUTE } from "./common/helpers";
import { Header } from "./components/Header/Header";
import { BasketPage } from "./pages/BasketPage";
import { CardPage } from "./pages/CardPage";
import { CatalogPage } from "./pages/CatalogPage";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import style from "./App.module.scss";
import { AdminPage } from "./pages/AdminPage";
import { AppRouter } from "./components/AppRouter";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <Breadcrumbs />
          <Suspense fallback={<Preloader />}>
            <AppRouter/>
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
