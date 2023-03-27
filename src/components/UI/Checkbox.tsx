import { FC } from "react";
import style from "./Checkbox.module.scss";

export interface ICheckboxProps {
    id: string,
    name: string,
    value: string
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void
}

export const Checkbox: FC<ICheckboxProps> = ({ name, id, value, onChangeHandler }) => {

    return (
        <div className={style.checkboxBlock}>
            <input className={style.input}
                type="checkbox"
                name={name}
                id={id}
                value={value}
                onChange={(e) => onChangeHandler(e, value)}
            />
            <span className={style.label}>{value}</span>
        </div>
    )
}