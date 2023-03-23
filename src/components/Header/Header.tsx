import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ButtonBig } from "../UI/ButtonBig";
import { Input } from "../UI/Input";
import { ROUTE } from "../../common/helpers";

import style from "./Header.module.scss";
import logo from "../../assets/icon/logo.svg";
import search from "../../assets/icon/search.svg";
import searchMb from "../../assets/icon/search-mb.svg";
import catalogIcon from "../../assets/icon/catalog.svg";
import catalogIconMb from "../../assets/icon/catalog-mb.svg";
import downloadIcon from "../../assets/icon/download.svg";
import phoneImg from "../../assets/img/contacts.png";
import basket from "../../assets/icon/basket.svg";

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.head}>
        <div className={style.headWrapper}>
          <address className={style.addressBlock}>
            <div className={style.address}>
              <p className={style.textBold}>
                г. Кокчетав, ул. Ж. Ташенова 129Б
              </p>
              <p className={style.text}>(Рынок Восточный)</p>
            </div>
            <div className={style.mailBlock}>
              <a href="mailto:ops.sultan@mail.ru">
                <p className={style.textBold}>ops.sultan@mail.ru</p>
                <p className={style.text}>На связи в любое время</p>
              </a>
            </div>
          </address>
          <nav className={style.navigation}>
            <ul className={style.navigationList}>
              <li className={style.navigationItem}>О компании</li>
              <li className={style.navigationItem}>Доставка и оплата</li>
              <li className={style.navigationItem}>Возврат</li>
              <li className={style.navigationItem}>Контакты</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.bodyWrapper}>
          <button className={style.burgerMenu}></button>
          <div className={style.firstColumn}>
            <NavLink to={ROUTE.CATALOG} className={style.logo}>
              <img src={logo} alt="logo" className={style.logoImg} />
            </NavLink>
            <ButtonBig text={"Каталог"} iconSrc={catalogIcon} />
            <Input
              placeholder={"Поиск..."}
              type={"text"}
              iconSrc={search}
              width="263"
            />
          </div>
          <div className={style.secondColumn}>
            <div className={style.phoneBlock}>
              <div className={style.phoneText}>
                <p className={style.textBold}>+7 (777) 490-00-91</p>
                <p className={style.textMiddle}>время работы: 9:00-20:00</p>
                <a href="tel:+77774900091" className={style.textSmall}>
                  Заказать звонок
                </a>
              </div>
              <img src={phoneImg} alt="phone" />
            </div>
            <ButtonBig text={"Прайс-лист"} iconSrc={downloadIcon} />
            <div className={style.basketBlock}>
              <span className={style.count}>3</span>
              <NavLink to={ROUTE.BASKET} className={style.basketBtn}>
                <img src={basket} alt="basket" />
              </NavLink>
              <div className={style.basketText}>
                <p className={style.textBlock}>Корзина</p>
                <p className={style.textBold}>
                  <span className={style.basketPrice}>1234</span> ₸
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.mobileBlock}>
        <button className={style.mobileBtn}>
          <img src={catalogIconMb} alt="catalog" />
          <span className={style.mobileText}>Каталог</span>
        </button>
        <button className={style.mobileBtn}>
          <img src={searchMb} alt="search" />
          <span className={style.mobileText}>Поиск</span>
        </button>
      </div>
    </header>
  );
};