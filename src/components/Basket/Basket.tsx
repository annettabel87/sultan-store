import { FC } from "react";
import style from "./Basket.module.scss"
import { IBasketItem } from "../../Redux/basketReducer";
import { BasketCard } from "../BasketCard/BasketCard";

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
    const elements = products.map(item => <BasketCard item={item} key={item.id}/>)
    return (
        <div className={style.basket}>
            <div className={style.basketBlock}>{elements}</div>
            <div className={style.separator}></div>
            <div className={style.price}>
                {totalPrice} ₸
            </div>
        </div>
        
    )
}