import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { catalogSlice } from "../../Redux/catalogReducer";
import { Pagination } from "../Pagination/Pagination";
import { fetchProducts } from "../../Redux/actionCreators";
import { DATA_URL } from "../../common/helpers";
import { CardForAdmin } from "../CardForAdmin/CardForAdmin";
import style from "./ProductsBlock.module.scss";


export const ProductsBlock: FC = () => {
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
    <div className={style.cardBlock}>
      <div className={style.block}>
        {products.map(product => <CardForAdmin product={product} key={product.id} /> )}
      </div>
      <Pagination currentPage={currentPage} countPerPage={countPerPage} totalCountItems={totalCount} onSetPage={onSetPage} />
    </div>
  );
};
