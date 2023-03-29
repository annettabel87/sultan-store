import { FC } from "react";
import style from "./Basket.module.scss"
import { IBasketItem } from "../../Redux/basketReducer";

export interface IBasketProps {
    products:IBasketItem[] | [],
    totalPrice: number
}
export const Basket: FC<IBasketProps> = ({products, totalPrice}) => {
    if(!products.length) {
        return (
            <div className={style.basketBlock}>корзина пустая</div>
        )
    }
    const elements = products.map(item => <div>{item.title}</div>)
    return (
        <div className={style.basketBlock}>{elements}</div>
    )
}