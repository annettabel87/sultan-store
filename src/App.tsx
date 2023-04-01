import React, { Suspense, useEffect } from "react";
import Preloader from "./common/Preloader/Preloader";
import { Header } from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import style from "./App.module.scss";
import { AppRouter } from "./components/AppRouter";
import  { IUser, authSlice } from "./Redux/authReducer";
import { useAppDispatch } from "./hooks/hooks";
import { DATA_URL, LOCAL_STORAGE_KEYS } from "./common/constants";
import { fetchProducts } from "./Redux/actionCreators";
import { Footer } from "./components/Footer/Footer";

function App() {
  const dispatch = useAppDispatch();
  const {SET_AUTH, SET_USER} = authSlice.actions;

  useEffect(() => {
    dispatch(fetchProducts({ url: DATA_URL }));
  }, []);

  useEffect(() => {
    if(localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH)) {
      dispatch(SET_USER({username: localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH || "") }as IUser));
      dispatch(SET_AUTH(true));
    }
  }, [])


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
      <Footer/>
    </div>
  );
}

export default App;
