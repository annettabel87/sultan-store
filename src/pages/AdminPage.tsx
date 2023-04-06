import { FC, useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { IProduct, catalogSlice } from "../Redux/catalogReducer";
import { CreateProductBlock } from "../components/CreateProductBlock/CreateProductBlock";
import { ProductsBlock } from "../components/ProductsBlock/ProductsBlock";
import Modal from "../components/Modal/Modal";
import clearBasket from "../assets/icon/clearBasket.svg";
import edit from "../assets/icon/edit.svg";
import style from "./AdminPage.module.scss";

export const AdminPage: FC = () => {
    const dispatch = useAppDispatch();
    const { CLEAR_STATE, ADD_NEW_PRODUCT } = catalogSlice.actions;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clearStorage = () => {
        dispatch(CLEAR_STATE());
    }

    const addProduct = (product: IProduct) => {
        dispatch(ADD_NEW_PRODUCT(product))
    }

    return (
        <div className={style.adminBlock} data-testid="adminPage">
            <button className={style.clearBtn} onClick={clearStorage}>
                <img src={clearBasket} alt="garbage basket" />
            </button>
            <button className={style.clearBtn} onClick={() => setIsOpen(true)}>
            <img src={edit} alt="pen" />
            </button>
            <ProductsBlock />
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <CreateProductBlock onClose={() => setIsOpen(false)} btnText={"Добавить"} handler={addProduct} />
            </Modal>
        </div>
    )
}