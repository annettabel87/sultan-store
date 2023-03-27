import { FC, useEffect } from "react";
import { FilterButtonsBlock } from "../components/FilterButtonsBlock/FilterButtonsBlock";
import { SortBlock } from "../components/SortBlock/SortBlock";
import { SideBar } from "../components/SideBar/SideBar";
import { fetchProducts } from "../Redux/actionCreators";
import { useAppDispatch } from "../hooks/hooks";
import { CardsBlock } from "../components/CardsBlock/CardsBlock";
import { DATA_URL } from "../common/helpers";
import style from "./CatalogPage.module.scss";

export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({url: DATA_URL}));
  }, []);

  return (
    <div className={style.catalogPage}>
      <div className={style.head}>
        <h1 className={style.catalogTitle}>Косметика и гигиена</h1>
        <SortBlock />
      </div>
      <FilterButtonsBlock />
      <div className={style.contentBlock}>
        <SideBar />
        <CardsBlock />
      </div>
      
    </div>
  );
};
