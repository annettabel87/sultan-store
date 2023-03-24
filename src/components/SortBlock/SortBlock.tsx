import { FC } from "react";
import { SORTNAMES, SORTSVALUES } from "../../common/helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { catalogSlice } from "../../Redux/catalogReducer";
import style from "./SortBlock.module.scss";

export const SortBlock: FC = () => {
  const sortValue = useAppSelector((state) => state.catalogReducer.sortValue);
  const dispatch = useAppDispatch();
  const { SET_SORTVALUE } = catalogSlice.actions;

  return (
    <form className={style.form}>
      <label className={style.label}>Сортировка:</label>
      <select
        name="sort"
        id="sort"
        className={style.select}
        value={sortValue}
        onChange={(e) => dispatch(SET_SORTVALUE(e.target.value as SORTNAMES))}
      >
        {SORTSVALUES.map((sortName) => {
          return <option value={sortName.name}>{sortName.title}</option>;
        })}
      </select>
    </form>
  );
};
