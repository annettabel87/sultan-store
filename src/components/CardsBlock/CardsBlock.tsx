import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { catalogSlice } from "../../Redux/catalogReducer";
import style from "./CardsBlock.module.scss";
import { Pagination } from "../Pagination/Pagination";
import { fetchProducts } from "../../Redux/actionCreators";
import { DATA_URL } from "../../common/helpers";

export const CardsBlock: FC = () => {
  const { products, currentPage, totalCount, countPerPage } = useAppSelector(store => store.catalogReducer);

  const { SET_CURRENT_PAGE } = catalogSlice.actions;
  const dispatch = useAppDispatch();

  const onSetPage = (page: number) => {
    dispatch(SET_CURRENT_PAGE(page))
  }

  useEffect(() => {
    dispatch(fetchProducts({ url: DATA_URL }))
  }, [currentPage]);

  return (
    <div className={style.block}>
      {products.map(product => <img src={product.urlImg} key={product.id} alt="product" />)}
      <Pagination currentPage={currentPage} countPerPage={countPerPage} totalCountItems={totalCount} onSetPage={onSetPage} />
    </div>
  );
};
