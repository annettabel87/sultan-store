import { FC } from "react";
import { Basket } from "../components/Basket/Basket";
import { useAppSelector } from "../hooks/hooks";
import style from "./BasketPage.module.scss";


export const BasketPage: FC = () => {
    const {basket, totalPrice} = useAppSelector(state => state.basketReducer)
    return (
        <div data-testid="basketPage">
            <h1 className={style.title}>Корзина</h1>
            <div className={style.separator}></div>
            <Basket products={basket} totalPrice={totalPrice}/>
        </div>
    )
}