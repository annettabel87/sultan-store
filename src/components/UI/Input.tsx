import { FC } from "react";
import style from "./Input.module.scss";

interface IInputProps {
  placeholder: string;
  type: string;
  iconSrc?: string;
  width: string;
  name: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<IInputProps> = ({
  placeholder = "",
  type = "text",
  iconSrc,
  width,
  name,
  value,
  onChange
}) => {
  return (
    <div className={style.inputBlock} style={{ width: `${width}px` }}>
      <input
       className={style.input}
       type={type}
       placeholder={placeholder}
       name={name}
       value={value}
       onChange={onChange}
       />
      <button className={style.btn}>
        <img src={iconSrc} alt="" />
      </button>
    </div>
  );
};
