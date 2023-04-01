import { FC } from "react";
import { SORTNAMES, SORTSVALUES } from "../../common/constants";
import style from "./SortBlock.module.scss";

interface ISearchBlockProps {
  sortValue: "" | SORTNAMES,
  setSortValue: (value: SORTNAMES) => void,
}

export const SortBlock: FC<ISearchBlockProps> = ({ sortValue, setSortValue }) => {

  return (
    <form className={style.form}>
      <label className={style.label}>Сортировка:</label>
      <select
        name="sort"
        id="sort"
        className={style.select}
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value as SORTNAMES)}
      >
        {SORTSVALUES.map((sortName) => {
          return <option key={sortName.name} value={sortName.name}>{sortName.title}</option>;
        })}
      </select>
    </form>
  );
};
