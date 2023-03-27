import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { catalogSlice } from "../../Redux/catalogReducer";
import style from "./PriceFilter.module.scss";

export const PriceFilter: FC = () => {
  const { minPrice, maxPrice } = useAppSelector(
    (state) => state.catalogReducer
  );
  const dispatch = useAppDispatch();
  const { SET_MINPRICE, SET_MAXPRICE } = catalogSlice.actions;

  const [minValue, setMinValue] = useState<number>(minPrice);
  const [maxValue, setMaxValue] = useState<number>(maxPrice);

  useEffect(() => {
    setMinValue(minPrice);
    setMaxValue(maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    dispatch(SET_MINPRICE(minValue));
    dispatch(SET_MAXPRICE(maxValue));
  }, [minValue, maxValue]);

  return (
    <div className={style.block}>
      <label className={style.label}>Цена ₸</label>
      <input
        className={style.input}
        type="text"
        name="min"
        value={minValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          !isNaN(+e.target.value) && setMinValue(+e.target.value)
        }
      />
      <span>-</span>
      <input
        className={style.input}
        type="text"
        name="max"
        value={maxValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          !isNaN(+e.target.value) && setMaxValue(+e.target.value)
        }
      />
    </div>
  );
};
