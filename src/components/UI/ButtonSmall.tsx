import { FC } from "react";
import style from "./ButtonSmall.module.scss";

interface IButtonProps {
  text: string;
  iconSrc?: string;
}

export const ButtonSmall: FC<IButtonProps> = ({ text = "", iconSrc = "" }) => {
  return (
    <button className={style.btn}>
      {text}
      <img src={iconSrc} alt="" className={style.icon} />
    </button>
  );
};
