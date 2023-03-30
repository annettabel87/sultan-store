import { FC, useEffect, useState } from "react";
import { IBasketItem, REMOVE_ITEM, ADD_ONE_ITEM } from "../../Redux/basketReducer";
import { useAppDispatch } from "../../hooks/hooks";
import weight from "../../assets/icon/weight.svg";
import volume from "../../assets/icon/volume.svg";
import basketBtn from "../../assets/icon/clearBasket.svg";
import style from "./BasketCard.module.scss";

export interface IBasketCardProps {
    item: IBasketItem
}
export const BasketCard: FC<IBasketCardProps> = ({ item }) => {
    const { id, urlImg, title, sizeType, price, description, size, quantity } = item;

    const [countProduct, setCountProduct] = useState<number>(quantity);

    const dispatch = useAppDispatch();

    const decrementCountProduct = () => {
        if (countProduct > 0) {
            setCountProduct(count => count - 1);
        }
    }

    const incrementCountProduct = () => {
        setCountProduct(count => count + 1)
    }

    useEffect(() => {
        const item: IBasketItem = {
            id,
            urlImg,
            title,
            sizeType,
            size,
            description,
            price,
            quantity: countProduct
        }

        dispatch(ADD_ONE_ITEM(item))
    }, [countProduct])

    const removeItem = () => {
        setCountProduct(0);
        dispatch(REMOVE_ITEM(id))
    }

    return (
        <div className={style.card}>
            <div className={style.aboutBlock}>
                <img className={style.img} src={urlImg} alt="product" />
                <div className={style.description}>
                    <p className={style.volumeBlock}>
                        <img src={sizeType === "weight" ? weight : volume} alt="icon" />
                        <span className={style.smallText}>{size}</span>
                    </p>
                    <div className={style.aboutText}>
                        <h2 className={style.title}>{title}</h2>
                        <p className={style.smallText}>{description}</p>
                    </div>
                </div>
            </div>
            <div className={style.buyBlock}>
                <div className={style.separator}></div>
                <div className={style.amountBlock}>
                    <button className={style.amountBtn} onClick={decrementCountProduct}>-</button>
                    <span className={style.amount}>{countProduct}</span>
                    <button className={style.amountBtn} onClick={incrementCountProduct}>+</button>
                </div>
                <div className={style.separator}></div>
                <p className={style.price}>{price}₸</p>
                <button className={style.removeBtn} onClick={removeItem}><img src={basketBtn} alt="delete" /></button>
            </div>
        </div>
    )
}