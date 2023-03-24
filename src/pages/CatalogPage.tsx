import { FC } from "react";
import style from "./CatalogPage.module.scss";
import { FilterButtonsBlock } from "../components/FilterButtonsBlock/FilterButtonsBlock";
import { SortBlock } from "../components/SortBlock/SortBlock";

export const CatalogPage: FC = () => {
  return (
    <div className={style.catalogPage}>
      <div className={style.head}>
        <h1 className={style.catalogTitle}>Косметика и гигиена</h1>
        <SortBlock />
      </div>
      <FilterButtonsBlock />
    </div>
  );
};
