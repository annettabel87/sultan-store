import { FC, useState } from "react";
import clearBasket from "../assets/icon/clearBasket.svg"
import style from "./AdminPage.module.scss";
import { useAppDispatch } from "../hooks/hooks";
import { catalogSlice } from "../Redux/catalogReducer";
import Modal from "../components/Modal/Modal";
import { CreateProductBlock } from "../components/CreateProductBlock/CreateProductBlock";

export const AdminPage: FC = () => {
    const dispatch = useAppDispatch();
    const {CLEAR_STATE} = catalogSlice.actions;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const clearStorage = ()  =>  {
        dispatch(CLEAR_STATE());
    }

    const addProduct = ()  =>  {
        setIsOpen(false);
    }

    return (
        <div className={style.adminBlock}>
            <button className={style.clearBtn} onClick={clearStorage}>
                <img src={clearBasket} alt="garbage basket" />
            </button>
            <button className={style.clearBtn} onClick={() => setIsOpen(true)}>
                +
            </button>
            <Modal  open={isOpen} onClose={addProduct}>
                <CreateProductBlock onClose={addProduct}/>
            </Modal>
        </div>
    )
}