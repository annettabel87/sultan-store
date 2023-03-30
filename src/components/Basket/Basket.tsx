import { FC, useState } from "react";
import { CLEAR_BASKET, IBasketItem } from "../../Redux/basketReducer";
import { BasketCard } from "../BasketCard/BasketCard";
import { useAppDispatch } from "../../hooks/hooks";
import { CheckoutBlock } from "../CheckoutBlock/CheckoutBlock";
import Modal from "../Modal/Modal";
import style from "./Basket.module.scss";

export interface IBasketProps {
    products: IBasketItem[] | [],
    totalPrice: number
}
export const Basket: FC<IBasketProps> = ({ products, totalPrice }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const onClose = () => {
        setIsOpen(false);
    }

    const checkout = () => {
        dispatch(CLEAR_BASKET());
        setIsOpen(false);
    }

    if (!products.length) {
        return (
            <div className={style.basketBlock}>корзина пустая</div>
        )
    }

    const elements = products.map(item => <><BasketCard item={item} key={item.id} /><div className={style.separator}></div></>)

    return (
        <div className={style.basket}>
            <div className={style.basketBlock}>{elements}</div>
            <div className={style.priceBlock}>
                <button className={style.btnCheck} onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                }}>Оформить заказ
                </button>
                <p className={style.price}>{totalPrice} ₸</p>
            </div>
            <Modal onClose={onClose} open={isOpen}>
                <CheckoutBlock onClose={checkout} />
            </Modal>
        </div>
    )
}