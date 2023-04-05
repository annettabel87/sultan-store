import { FC } from "react";
import { Input } from "../UI/Input";
import { ButtonBig } from "../UI/ButtonBig";
import logo from "../../assets/icon/logo-white.svg";
import subscription from "../../assets/icon/subscription.svg";
import downloadIcon from "../../assets/icon/download.svg";
import whatsApp from "../../assets/icon/whatsApp.svg";
import telegram from "../../assets/icon/telegram.svg";
import visa from "../../assets/img/Visa.png";
import masterCard from "../../assets/img/masterCard.png";
import style from "./Footer.module.scss";


export const Footer: FC = () => {

    return (
        <footer className={style.footer} data-testid="footer">
            <div className={style.container}>
                <div className={style.about}>
                    <div className={style.logo}>
                        <img src={logo} alt="logo" className={style.logoImg} />
                    </div>
                    <p className={style.description}>
                        Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                    <form className={style.form}>
                        <label>
                        Подпишись на скидки и акции
                        </label>
                            <Input placeholder={"Введите ваш E-mail"}
                                type={"text"}
                                width={"282"}
                                name={"subscription"}
                                iconSrc={subscription}
                            />
                    </form>
                </div>
                <div className={style.nav}>
                    <div className={style.column}>
                        <h3 className={style.title}>
                            Меню сайта:
                        </h3>
                        <div className={style.links}>
                            <a href="#" className={style.navLink}>
                                О компании
                            </a>
                            <a href="#" className={style.navLink}>
                                Доставка и оплата
                            </a>
                            <a href="#" className={style.navLink}>
                                Возврат
                            </a>
                            <a href="#" className={style.navLink}>
                                Контакты
                            </a>
                        </div>


                    </div>
                    <div className={style.column}>
                        <h3 className={style.title}>
                            Категории:
                        </h3>
                        <div className={style.links}>
                            <a href="#" className={style.navLink}>
                                Бытовая химия
                            </a>
                            <a href="#" className={style.navLink}>
                                Косметика и гигиена
                            </a>
                            <a href="#" className={style.navLink}>
                                Товары для дома
                            </a>
                            <a href="#" className={style.navLink}>
                                Товары для детей и мам
                            </a>
                            <a href="#" className={style.navLink}>
                                Посуда
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.contacts}>
                    <div className={style.column}>
                        <h3 className={style.title}>
                            Скачать прайс-лист:
                        </h3>
                        <ButtonBig text={"Прайс-лист"} iconSrc={downloadIcon} />
                        <div className={style.messengers}>
                            <p className={style.text}>Связь в мессенджерах:</p>
                            <div className={style.messengersLink}>
                                <a href="#" className={style.linkWhatsApp}>
                                    <img src={whatsApp} alt="whatsApp" />
                                </a>
                                <a href="#" className={style.linkTelegram}>
                                    <img src={telegram} alt="telegram" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.column}>
                    <h3 className={style.title}>
                        Контакты
                    </h3>
                    <div className={style.phone}>
                        <a href="tel:+77774900091">+7 (777) 490-00-91</a>
                        <p className={style.textSmall}>время работы: 9:00-20:00</p>
                        <a className={style.smallestText} href="tel:+77774900091">Заказать звонок</a>
                    </div>
                    <div className={style.mail}>
                        <a href="mailto:opt.sultan@mail.ru">
                            opt.sultan@mail.ru
                        </a>
                        <p className={style.textSmall}>На связи в любое время</p>
                    </div>
                    <div className={style.payBlock}>
                        <img src={visa} alt="visa" />
                        <img src={masterCard} alt="masterCard" />
                    </div>
                </div>
                </div>
                
            </div>
        </footer>
    )
}