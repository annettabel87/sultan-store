import { FC } from "react";
import style from "./CatalogPage.module.scss";
import { FilterButtonsBlock } from "../components/FilterButtonsBlock/FilterButtonsBlock";


export const CatalogPage: FC = () => {
  return (
    <div className={style.catalogPage}>      
      <h1 className={style.catalogTitle}>Косметика и гигиена</h1>
      <FilterButtonsBlock/>
    </div>
  );
};
