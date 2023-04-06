import { FC } from "react";
import style from "./ButtonBig.module.scss";

interface IButtonProps {
  text: string;
  iconSrc?: string;
  testId?: string
}

export const ButtonBig: FC<IButtonProps> = ({ text = "", iconSrc = "", testId }) => {
  return (
    <button className={style.btn} data-testid={testId}>
      {text}
      <img src={iconSrc} alt="" className={style.icon} />
    </button>
  );
};
