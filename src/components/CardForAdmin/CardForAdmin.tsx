import { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { IProduct, catalogSlice } from "../../Redux/catalogReducer";
import { ButtonSmall } from "../UI/ButtonSmall";
import close from "../../assets/icon/close.svg";
import weight from "../../assets/icon/weight.svg";
import volume from "../../assets/icon/volume.svg";
import style from "./CardForAdmin.module.scss";

export interface ICardForAdminProps {
    product: IProduct,
    handler: (id: number) => void
}

export const CardForAdmin: FC<ICardForAdminProps> = ({ product, handler }) => {
    const { id, urlImg, title, sizeType, manufacturer, price, barcode, brand, description, size, groups } = product;

    const dispatch = useAppDispatch();
    const { DELETE_PRODUCT } = catalogSlice.actions;

    const deleteProduct = () => {
        dispatch(DELETE_PRODUCT(id))
    }

    const groupElement = groups ? groups.map(item => <p key={item}>{item}</p>) : "";

    return (
        <div className={style.card}>
            <button className={style.close} onClick={deleteProduct}>
                <img src={close} alt="close" />
            </button>
            <img className={style.img} src={urlImg} alt="product" />
            <div className={style.description}>
                <h2 className={style.title}>{title}</h2>
                <div className={style.buyBlock}>
                    <p className={style.price}>{price}₸</p>
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
                        <p className={style.text}>Штрихкод:</p>
                        <p className={style.boldText}>{barcode}</p>
                    </div>
                    <div className={style.subDescription}>
                        <p className={style.text}>Описание:</p>
                        <p className={style.boldText}>{description} г</p>
                    </div>
                    <div className={style.subDescription}>
                        <img src={sizeType === "weight" ? weight : volume} alt="icon" />
                        <p className={style.boldText}>{size}</p>
                    </div>
                    <div className={style.subDescription}>
                        <p className={style.text}>Группы:</p>
                        <div className={style.boldText}>{groupElement}</div>
                    </div>
                </div>
            </div>
            <ButtonSmall text={"Редактировать"} handler={() => handler(id)} />
        </div>

    )
}