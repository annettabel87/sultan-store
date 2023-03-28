import { FC, useState } from "react";
import weight from "../../assets/icon/weight.svg";
import volume from "../../assets/icon/volume.svg";
import basketBtn from "../../assets/icon/basketBtn.svg";
import share from "../../assets/icon/share.svg";
import { IProduct } from "../../Redux/catalogReducer";
import { ButtonSmall } from "../UI/ButtonSmall";
import showBtn from "../../assets/icon/selectArrow.svg";
import unshowBtn from "../../assets/icon/unshowBtn.svg";
import style from "./FullCard.module.scss";

export interface IFullCardProps {
    product: IProduct
}
export const FullCard: FC<IFullCardProps> = ({ product }) => {
    const { id, urlImg, title, sizeType, manufacturer, price, barcode, brand, description, size } = product;
    const [visibilityAbout, setVisibilityAbout] = useState<boolean>(false);
    const [visibilityCharacteristics, setVisibilityCharacteristics] = useState<boolean>(false);
    const [countProduct, setCountProduct] = useState<number>(0);

    const toggleVisibilityAbout = () => {
        setVisibilityAbout(prev => !prev)
    }

    const toggleVisibilityCharacteristics = () => {
        setVisibilityCharacteristics(prev => !prev);
    }

    const decrementCountProduct = () => {
        if (countProduct > 0) {
            setCountProduct(count => count - 1)
        }
    }

    const incrementCountProduct = () => {
        setCountProduct(count => count + 1)
    }

    return (
        <div className={style.card}>
            <img className={style.img} src={urlImg} alt="product" />
            <div className={style.description}>
                <p className={style.greenText}>В наличии</p>
                <h2 className={style.title}>{title}</h2>
                <p className={style.volumeBlock}>
                    <img src={sizeType === "weight" ? weight : volume} alt="icon" />
                    <span className={style.smallText}>{size}</span>
                </p>
                <div className={style.buyBlock}>
                    <p className={style.price}>{price}₸</p>
                    <div className={style.amountBlock}>
                        <button className={style.amountBtn} onClick={decrementCountProduct}>-</button>
                        <span className={style.amount}>{countProduct}</span>
                        <button className={style.amountBtn} onClick={incrementCountProduct}>+</button>
                    </div>
                    <ButtonSmall text={"В корзину"} iconSrc={basketBtn} />
                </div>
                <div className={style.shareBlock}>
                    <button className={style.shareBtn}><img src={share} alt="share" /></button>
                    <p className={style.smallText}>При покупке от <span className={style.bold}>10 000 ₸</span> бесплатная доставка по Кокчетаву и области</p>
                    <button className={style.priceBtn}>Прайс-лист</button>
                </div>
                <div className={style.info}>
                    <div className={style.subDescription}>
                        <p className={style.text}>Производитель:</p>
                        <p className={style.boldText}>{manufacturer}</p>
                    </div>
                    <div className={style.subDescription}>
                        <p className={style.text}>Бренд:</p>
                        <p className={style.boldText}>{brand}</p>
                    </div>
                    <div className={style.subDescription}>
                        <p className={style.text}>Артикул:</p>
                        <p className={style.boldText}>123456</p>
                    </div>
                    <div className={style.subDescription}>
                        <p className={style.text}>Кол-во в коробке:</p>
                        <p className={style.boldText}>2</p>
                    </div>
                    <div className={style.subDescription}>
                        <p className={style.text}>Штрихкод:</p>
                        <p className={style.boldText}>{barcode}</p>
                    </div>
                    <div className={style.subDescription}>
                        <p className={style.text}>Размеры коробки(Д*Ш*В):</p>
                        <p className={style.boldText}>10х10х10</p>
                    </div>
                    <div className={style.subDescription}>
                        <p className={style.text}>Вес коробки:</p>
                        <p className={style.boldText}>1020 г</p>
                    </div>
                </div>
                <div className={style.about}>
                    <button className={style.aboutBtn} onClick={toggleVisibilityAbout}>
                        <span>Описание</span>
                        <img className={style.Arrow} src={visibilityAbout ? unshowBtn : showBtn} alt="arrow" />
                    </button>
                    {visibilityAbout && <p className={style.smallText}>{description}</p>}
                </div>
                <span className={style.separator}></span>
                <div className={style.characteristicsBlock}>
                    <button className={style.aboutBtn} onClick={toggleVisibilityCharacteristics}>
                        <span>Характеристики</span>
                        <img className={style.Arrow} src={visibilityCharacteristics ? unshowBtn : showBtn} alt="arrow" />
                    </button>
                    {visibilityCharacteristics && <div className={style.characteristics}>
                        <div className={style.subDescription}>
                            <p className={style.text}>Назначение:</p>
                            <p className={style.boldText}>{brand}</p>
                        </div>
                        <div className={style.subDescription}>
                            <p className={style.text}>Тип:</p>
                            <p className={style.boldText}>{brand}</p>
                        </div>
                        <div className={style.subDescription}>
                            <p className={style.text}>Производитель:</p>
                            <p className={style.boldText}>{manufacturer}</p>
                        </div>
                        <div className={style.subDescription}>
                            <p className={style.text}>Бренд:</p>
                            <p className={style.boldText}>{brand}</p>
                        </div>
                        <div className={style.subDescription}>
                            <p className={style.text}>Артикул:</p>
                            <p className={style.boldText}>123456</p>
                        </div>
                        <div className={style.subDescription}>
                            <p className={style.text}>Штрихкод:</p>
                            <p className={style.boldText}>{barcode}</p>
                        </div>
                        <div className={style.subDescription}>
                            <p className={style.text}>Вес:</p>
                            <p className={style.boldText}>{size}</p>
                        </div>
                        <div className={style.subDescription}>
                            <p className={style.text}>Объем:</p>
                            <p className={style.boldText}>{size}</p>
                        </div>
                        <div className={style.subDescription}>
                            <p className={style.text}>Кол-во в коробке:</p>
                            <p className={style.boldText}>{size}</p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}