import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { ADD_FILTERED_MANUFACTURER, REMOVE_FILTERED_MANUFACTURER } from "../../Redux/catalogReducer";
import style from "./SearchBlock.module.scss";
import { Input } from "../UI/Input";
import search from "../../assets/icon/search.svg";

export interface ISearchBlockProps {
  manufacturers: string[];
}

export const SearchBlock: FC<ISearchBlockProps> = ({ manufacturers }) => {
  const dispatch = useAppDispatch();
  const [searchData, setSearchData] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [filteredManufacturers, setFilteredManufacturers] =
    useState(manufacturers);

  useEffect(() => {
    const filteredData = manufacturers.filter((item) =>
      item.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
    );
    setFilteredManufacturers(filteredData);
  }, [manufacturers, searchData, setSearchData]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (e.target.checked) {
      dispatch(ADD_FILTERED_MANUFACTURER(name.toLocaleLowerCase()))
    } else {
      dispatch(REMOVE_FILTERED_MANUFACTURER(name.toLocaleLowerCase()))
    }
  }
  return (
    <div className={style.block}>
      <label className={style.label}>Производитель</label>
      <Input placeholder={"Поиск..."}
        type={"text"} width={"238"}
        name={"manufacturer"}
        value={searchData}
        iconSrc={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchData(e.target.value)}
      />
      <div className={style.manufacturesBlock}>
        {!showMore ? (
          <>
            {filteredManufacturers.slice(0, 4).map((manufacturer, index) => {
              return (
                <div key={index}>
                  <input className={style.input}
                    type="checkbox"
                    name={manufacturer}
                    id={manufacturer}
                    value={manufacturer}
                    onChange={(e) => onChangeHandler(e, manufacturer)}
                  />
                  <span>{manufacturer}</span>
                </div>
              );
            })}
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              Show more
            </button>
          </>
        ) : (
          filteredManufacturers.map((manufacturer, index) => {
            return (
              <div key={manufacturer}>
                <input
                  type="checkbox"
                  name={manufacturer}
                  id={manufacturer}
                  value={manufacturer}
                  onChange={(e) => onChangeHandler(e, manufacturer)}
                />
                <span>{manufacturer}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
