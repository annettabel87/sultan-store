import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { IProduct } from "../../Redux/catalogReducer";
import style from "./CardsBlock.module.scss";

export const CardsBlock: FC = () => {
  const products = useAppSelector(store => store.catalogReducer.products) as IProduct[];
  return (
    <div className={style.block}>
      {products.map(product => <img src={product.urlImg} key={product.id} alt="product"/>)}
    </div>
  );
};
