import { FC } from "react";
import style from "./Card.module.scss";
import { IProduct } from "../../Redux/catalogReducer";
import weight from "../../assets/icon/weight.svg";
import volume from "../../assets/icon/volume.svg";
import basketBtn from "../../assets/icon/basketBtn.svg";
import { ButtonSmall } from "../UI/ButtonSmall";


export const Card: FC<IProduct> = ({ id, urlImg, title, barcode, manufacturer, brand, price, size, sizeType }) => {
    return (
        <div className={style.card} data-id={id}>
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
            <div className={style.priceBlock}>
                <p className={style.price}>{price} ₸</p>
                <ButtonSmall text={"в корзину"} iconSrc={basketBtn} />
            </div>
        </div>
    )
}