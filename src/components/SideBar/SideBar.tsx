import { FC } from "react";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { SearchBlock } from "../SearchBlock/SearchBlock";
import { fetchProducts } from "../../Redux/actionCreators";
import { DATA_URL } from "../../common/helpers";
import { CLEAR_FILTERS } from "../../Redux/catalogReducer";
import { FilterListBlock } from "../FilterButtonsBlock/FilterListBlock";
import { ButtonBig } from "../UI/ButtonBig";
import basket from "../../assets/icon/clearBasket.svg";
import airWick from "../../assets/img/airW.png";
import masterFresh from "../../assets/img/masterF.png";
import sibiar from "../../assets/img/sibiar.png";
import cotton from "../../assets/img/cotton.png";
import camay from "../../assets/img/camay.png";
import style from "./SideBar.module.scss";

export const SideBar: FC = () => {
  const { allManufactures } = useAppSelector((state) => state.catalogReducer);
  const dispatch = useAppDispatch();

  const filterHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchProducts({ url: DATA_URL }));
  };

  const clearSearchData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    dispatch(CLEAR_FILTERS())
    dispatch(fetchProducts({ url: DATA_URL }));
  }

  return (
    <div className={style.sidebar}>
      <h3 className={style.title}>подбор по параметрам</h3>
      <form className={style.form} onSubmit={filterHandler} onReset={clearSearchData} id="filter">
        <PriceFilter />
        <SearchBlock manufacturers={allManufactures} />
        <div className={style.btnBlock}>
          <ButtonBig text={"Показать"} />
          <button className={style.resetBtn} type="reset" id="reset-button" name="reset-button"><img src={basket} alt="basket" /></button>
        </div>
      </form>
      <FilterListBlock />
      <span className={style.separator}></span>
      <div className={style.brandBlock}>
        <h3 className={style.title}>Бренды</h3>
        <div className={style.brandWrapp}>
          <div className={style.brandCard}>
            <img src={airWick} alt="brand airWick" />
          </div>
          <div className={style.brandCard}>
            <img src={masterFresh} alt="brand masterFresh" />
          </div>
          <div className={style.brandCard}>
            <img src={sibiar} alt="brand sibiar" />
          </div>
          <div className={style.brandCard}>
            <img src={cotton} alt="brand cotton" />
          </div>
          <div className={style.brandCard}>
            <img src={camay} alt="brand camay" />
          </div>
        </div>
        <button className={style.btn}>
          Показать все
        </button>
      </div>
    </div>
  );
};
