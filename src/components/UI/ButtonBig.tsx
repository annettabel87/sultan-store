import { FC } from "react";
import style from "./ButtonBig.module.scss";

interface IButtonProps {
  text: string;
  iconSrc?: string;
}

export const ButtonBig: FC<IButtonProps> = ({ text = "", iconSrc = "" }) => {
  return (
    <button className={style.btn}>
      {text}
      <img src={iconSrc} alt="" className={style.icon} />
    </button>
  );
};
