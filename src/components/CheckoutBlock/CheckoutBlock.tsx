import { FC } from "react";
import close from "../../assets/icon/close.svg";
import checkoutLogo from "../../assets/icon/checkoutLogo.svg";
import style from "./CheckoutBlock.module.scss";

export interface ICheckoutProps {
  onClose: () => void;
}

export const CheckoutBlock: FC<ICheckoutProps> = ({ onClose }) => {
  return (
    <div className={style.overlay} onClick={onClose}>
      <div
        className={style.checkout}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={style.close} onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <img src={checkoutLogo} alt="logo" className={style.img} />
        <p className={style.title}>Спасибо за заказ</p>
        <p className={style.text}>Наш менеджер свяжется с вами в ближайшее время</p>
      </div>
    </div>
  );
}