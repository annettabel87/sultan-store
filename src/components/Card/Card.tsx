import { FC } from "react";
import { IProduct } from "../../Redux/catalogReducer";
import { ButtonSmall } from "../UI/ButtonSmall";
import { ADD_ITEM, IBasketItem } from "../../Redux/basketReducer";
import { useAppDispatch } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import weight from "../../assets/icon/weight.svg";
import volume from "../../assets/icon/volume.svg";
import basketBtn from "../../assets/icon/basketBtn.svg";
import style from "./Card.module.scss";


export const Card: FC<IProduct> = ({ id, urlImg, title, barcode, manufacturer, brand, price, size, sizeType, description }) => {
    const dispatch = useAppDispatch();

    const addToBasket = () => {
        const  item: IBasketItem = {
            id,
            urlImg,
            title,
            sizeType,
            size,
            description,
            price,
            quantity: 1
        }
        dispatch(ADD_ITEM(item))
   }

    return (
         <div className={style.card} data-id={id} data-testid="card">
            <Link to={`/catalog/card/${id}`}>
            <img src={urlImg} alt="product" className={style.img} />
            <div className={style.volume}>
                <img src={sizeType === "weight" ? weight : volume} alt="icon" />
                <span className={style.smallText}>{size}</span>
            </div>
            <h3 className={style.title}>{title}</h3>
            <div className={style.description}>
                <div className={style.subDescription}>
                    <p className={style.text}>Штрихкод:</p>
                    <p className={style.boldText}>{barcode}</p>
                </div>
                <div className={style.subDescription}>
                    <p className={style.text}>Производитель:</p>
                    <p className={style.boldText}>{manufacturer}</p>
                </div>
                <div className={style.subDescription}>
                    <p className={style.text}>Бренд:</p>
                    <p className={style.boldText}>{brand}</p>
                </div>
            </div>
            </Link>
            <div className={style.priceBlock}>
                <p className={style.price}>{price} ₸</p>
                <ButtonSmall text={"в корзину"} iconSrc={basketBtn} handler={addToBasket}/>
            </div>
        </div>
    )
}