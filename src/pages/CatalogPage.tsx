import { FC, useCallback, useEffect } from "react";
import { FilterButtonsBlock } from "../components/FilterButtonsBlock/FilterButtonsBlock";
import { SortBlock } from "../components/SortBlock/SortBlock";
import { SideBar } from "../components/SideBar/SideBar";
import { fetchProducts } from "../Redux/actionCreators";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { CardsBlock } from "../components/CardsBlock/CardsBlock";
import { SORTNAMES, DATA_URL } from "../common/constants";
import { catalogSlice } from "../Redux/catalogReducer";
import style from "./CatalogPage.module.scss";


export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const {sortValue, products, currentPage, totalCount, countPerPage, isLoading, error} = useAppSelector((state) => state.catalogReducer);
  const { SET_SORTVALUE, SET_CURRENT_PAGE } = catalogSlice.actions;

  const setSortValue = useCallback((value: SORTNAMES) => {
    dispatch(SET_SORTVALUE(value));
  },
    [SET_SORTVALUE, dispatch]
  )
 const onSetPage = (page: number) => {
      dispatch(SET_CURRENT_PAGE(page))
   }

  useEffect(() => {
    dispatch(fetchProducts({ url: DATA_URL }));
  }, [sortValue, currentPage]);

  return (
    <div className={style.catalogPage} data-testid="catalogPage">
      <div className={style.head}>
        <h1 className={style.catalogTitle}>Косметика и гигиена</h1>
        <SortBlock sortValue={sortValue} setSortValue={setSortValue} />
      </div>
      <FilterButtonsBlock />
      <div className={style.contentBlock}>
        <SideBar />
        <CardsBlock products={products} currentPage={currentPage}
         totalCount={totalCount} countPerPage={countPerPage}
         isLoading={isLoading} error={error}
          onSetPage={onSetPage} />
      </div>
    </div>
  );
};
