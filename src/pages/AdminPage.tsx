import { FC } from "react";
import clearBasket from "../assets/icon/clearBasket.svg"
import style from "./AdminPage.module.scss";
import { useAppDispatch } from "../hooks/hooks";
import { catalogSlice } from "../Redux/catalogReducer";

export const AdminPage: FC = () => {
    const dispatch = useAppDispatch();
    const {CLEAR_STATE} = catalogSlice.actions;

    const clearStorage = ()  =>  {
        dispatch(CLEAR_STATE());
    }

    return (
        <div className={style.adminBlock}>
            <button className={style.clearBtn} onClick={clearStorage}>
                <img src={clearBasket} alt="garbage basket" />
            </button>
        </div>
    )
}