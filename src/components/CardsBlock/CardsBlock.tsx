import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { catalogSlice } from "../../Redux/catalogReducer";
import { Pagination } from "../Pagination/Pagination";
import { fetchProducts } from "../../Redux/actionCreators";
import { DATA_URL } from "../../common/constants";
import { Card } from "../Card/Card";
import style from "./CardsBlock.module.scss";
import { countStartEndToPagination } from "../../common/helpers";

export const CardsBlock: FC = () => {
  const { products, currentPage, totalCount, countPerPage } = useAppSelector(store => store.catalogReducer);

  const { SET_CURRENT_PAGE } = catalogSlice.actions;
  const dispatch = useAppDispatch();

  const {start,end} = countStartEndToPagination(currentPage,countPerPage)

  const onSetPage = (page: number) => {
    dispatch(SET_CURRENT_PAGE(page))
  }

  useEffect(() => {
    dispatch(fetchProducts({ url: DATA_URL }))
  }, [currentPage]);

  return (
    <div className={style.cardBlock}>
      <div className={style.block}>
        {products.slice(start, end).map(product => <Card {...product} key={product.id} /> )}
      </div>
      <Pagination currentPage={currentPage} countPerPage={countPerPage} totalCountItems={totalCount} onSetPage={onSetPage} />
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
      </p>
    </div>

  );
};
