import { FC } from "react";
import { IProduct } from "../../Redux/catalogReducer";
import { Pagination } from "../Pagination/Pagination";
import { Card } from "../Card/Card";
import style from "./CardsBlock.module.scss";
import { countStartEndToPagination } from "../../common/helpers";
import Preloader from "../../common/Preloader/Preloader";

export interface ICardBlockProps {
  products: IProduct[],
  currentPage: number,
  totalCount: number,
  countPerPage: number,
  isLoading: boolean,
  error: string,
  onSetPage: (page: number) => void
}
export const CardsBlock: FC<ICardBlockProps> = ({ products, currentPage, totalCount, countPerPage, isLoading, error, onSetPage }) => {

  const { start, end } = countStartEndToPagination(currentPage, countPerPage)

  if (isLoading) {
    return (
      <Preloader />
    )
  }

  if (error) {
    return (
      <div className={style.error}>Загрузка...</div>
    )
  }
  return (
    <div className={style.cardBlock} data-testid="cards">
      <div className={style.block}>
        {products.slice(start, end).map(product => <Card {...product} key={product.id} />)}
      </div>
      <Pagination currentPage={currentPage} countPerPage={countPerPage} totalCountItems={totalCount} onSetPage={onSetPage} />
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
      </p>
    </div>
  );
};
