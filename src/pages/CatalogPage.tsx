import { FC, useEffect } from "react";
import { FilterButtonsBlock } from "../components/FilterButtonsBlock/FilterButtonsBlock";
import { SortBlock } from "../components/SortBlock/SortBlock";
import { SideBar } from "../components/SideBar/SideBar";
import { fetchProducts } from "../Redux/actionCreators";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { CardsBlock } from "../components/CardsBlock/CardsBlock";
import { DATA_URL, SORTNAMES } from "../common/helpers";
import { catalogSlice } from "../Redux/catalogReducer";
import style from "./CatalogPage.module.scss";

export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const sortValue = useAppSelector((state) => state.catalogReducer.sortValue);

  const { SET_SORTVALUE } = catalogSlice.actions;

  const setSortValue = (value: SORTNAMES) => {
    dispatch(SET_SORTVALUE(value));
  }
  useEffect(() => {
    dispatch(fetchProducts({ url: DATA_URL }));
  }, []);

  useEffect(() => {
    dispatch(fetchProducts({ url: DATA_URL }));
  }, [sortValue]);

  return (
    <div className={style.catalogPage}>
      <div className={style.head}>
        <h1 className={style.catalogTitle}>Косметика и гигиена</h1>
        <SortBlock sortValue={sortValue} stSortValue={setSortValue} />
      </div>
      <FilterButtonsBlock />
      <div className={style.contentBlock}>
        <SideBar />
        <CardsBlock />
      </div>
    </div>
  );
};
