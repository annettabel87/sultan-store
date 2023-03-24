import { FC } from "react";
import { FILTERS } from "../../common/helpers";
import style from "./FilterButtonsBlock.module.scss";

export const FilterButtonsBlock: FC = () => {
  return (
    <div className={style.filtersWrapp}>
      {FILTERS.map((btnFilter) => {
        return (
          <button key={btnFilter.name} className={style.button}>
            {btnFilter.title}
          </button>
        );
      })}
    </div>
  );
};
