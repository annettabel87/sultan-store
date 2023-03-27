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
        <ButtonBig text={"Показать"}/>
          <button className={style.resetBtn} type="reset" id="reset-button" name="reset-button"><img src={basket} alt="basket" /></button>
        </div>
      </form>
      <FilterListBlock />
    </div>
  );
};
