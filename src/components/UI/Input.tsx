import { FC } from "react";
import style from "./Input.module.scss";

interface IInputProps {
  placeholder: string;
  type: string;
  iconSrc?: string;
  width: string;
}

export const Input: FC<IInputProps> = ({
  placeholder = "",
  type = "text",
  iconSrc,
  width,
}) => {
  return (
    <div className={style.inputBlock} style={{ width: `${width}px` }}>
      <input className={style.input} type={type} placeholder={placeholder} />
      <button className={style.btn}>
        <img src={iconSrc} alt="" />
      </button>
    </div>
  );
};
