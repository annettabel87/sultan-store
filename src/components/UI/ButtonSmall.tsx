import { FC } from "react";
import style from "./ButtonSmall.module.scss";

interface IButtonProps {
  text: string;
  iconSrc?: string;
  handler?: () => void;
}

export const ButtonSmall: FC<IButtonProps> = ({ text = "", iconSrc = "", handler }) => {
  return (
    <button className={style.btn} onClick={handler}>
      {text}
      <img src={iconSrc} alt="" className={style.icon} />
    </button>
  );
};
