import { FC, useEffect, useState } from "react";
import { FILTERS, FILTERSNAME } from "../../common/helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { catalogSlice } from "../../Redux/catalogReducer";
import style from "./FilterButtonsBlock.module.scss";

export const FilterButtonsBlock: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FILTERSNAME | "">("");

  const filterValue = useAppSelector((state) => state.catalogReducer.filter);
  const dispatch = useAppDispatch();
  const { SET_FILTER } = catalogSlice.actions;

  const setFilterHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    const { name } = e.target.dataset;

    if (name) {
      setSelectedFilter((prev) =>
        prev === name ? prev : (name as FILTERSNAME)
      );
    }
  };

  useEffect(() => {
    dispatch(SET_FILTER(selectedFilter));
  }, [setSelectedFilter, selectedFilter]);

  return (
    <div className={style.filtersWrapp} onClickCapture={setFilterHandler}>
      {FILTERS.map((btnFilter) => {
        return (
          <button
            key={btnFilter.name}
            className={`${style.button} ${
              btnFilter.name === filterValue ? style.active : ""
            }`}
            data-name={btnFilter.name}
          >
            {btnFilter.title}
          </button>
        );
      })}
    </div>
  );
};
