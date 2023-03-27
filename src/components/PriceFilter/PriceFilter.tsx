import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { catalogSlice } from "../../Redux/catalogReducer";
import style from "./PriceFilter.module.scss";

export const PriceFilter: FC = () => {
  const { minmax_price_data } = useAppSelector((state) => state.catalogReducer);
  const dispatch = useAppDispatch();
  const { SET_MINPRICE, SET_MAXPRICE } = catalogSlice.actions;

  const [minValue, setMinValue] = useState<number>(minmax_price_data.min);
  const [maxValue, setMaxValue] = useState<number>(minmax_price_data.max);

  useEffect(() => {
    setMinValue(minmax_price_data.min);
    setMaxValue(minmax_price_data.max);
  }, [minmax_price_data]);

  useEffect(() => {
    dispatch(SET_MINPRICE(minValue));
  }, [minValue]);

  useEffect(() => {
    dispatch(SET_MAXPRICE(maxValue));
  }, [ maxValue]);

  return (
    <div className={style.block}>
      <label className={style.label}>Цена ₸</label>
      <div className={style.inputWrapper}>
        <input
          className={style.input}
          type="text"
          name="min"
          value={minValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            !isNaN(+e.target.value) && setMinValue(+e.target.value)
          }
        />
        <span> - </span>
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
    </div>
  );
};
