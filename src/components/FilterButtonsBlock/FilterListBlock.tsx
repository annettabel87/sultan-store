import { FC, useEffect, useState } from "react";
import { DATA_URL, FILTERS, FILTERSNAME } from "../../common/helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { catalogSlice } from "../../Redux/catalogReducer";
import style from "./FilterListBlock.module.scss";
import { fetchProducts } from "../../Redux/actionCreators";

export const FilterListBlock: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FILTERSNAME | "">("");

  const filterValue = useAppSelector((state) => state.catalogReducer.filterByGroup);
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
    dispatch(fetchProducts({url: DATA_URL}));
  }, [setSelectedFilter, selectedFilter, dispatch, SET_FILTER]);

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
