import { FC, useState } from "react";
import { FILTERS, FILTERSNAME } from "../../common/helpers";
import { useAppDispatch } from "../../hooks/hooks";
import { IProduct, catalogSlice } from "../../Redux/catalogReducer";
import style from "./CreateProductBlock.module.scss";
import close from "../../assets/icon/close.svg";

export interface ICreateBlockProps {
  onClose: () => void;
}
export const CreateProductBlock: FC<ICreateBlockProps> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");
  const [urlImg, setUrlImg] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [sizeType, setSizeType] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [barcode, setBarcode] = useState<number>(0);
  const [manufacturer, setManufacturer] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [group, setGroup] = useState<FILTERSNAME[]>();

  const dispatch = useAppDispatch();
  const { ADD_NEW_PRODUCT } = catalogSlice.actions;

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedOptions = [];
    for (let opt of options) {
      if (opt.selected) {
        selectedOptions.push(opt.value as FILTERSNAME)
      }
    }
    setGroup(selectedOptions)
  }
  const clearForm = () => {
    setTitle("");
    setUrlImg("");
    setDescription("");
    setSizeType("");
    setSize("");
    setBarcode(0);
    setManufacturer("");
    setBrand("");
    setPrice(0);
    setGroup([]);
  }

  const submitAuthData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      urlImg,
      description,
      sizeType,
      size,
      barcode,
      manufacturer,
      brand,
      price,
      group
    } as unknown as IProduct;
    dispatch(ADD_NEW_PRODUCT(newProduct));
    clearForm();
  }

  const options = FILTERS.map(item => <option key={item.name} value={item.name}>{item.title}</option>);

  return (

    <div className={style.overlay} onClick={onClose}>
      <div
        className={style.createBlock}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={style.close} onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <div className={style.loginBlock}>

          <form className={style.form} onSubmit={e => submitAuthData(e)}>
            <label className={style.label}>
              Название:
              <input className={style.input}
                type="text"
                name="title"
                id="title"
                placeholder="Введите название товара"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required />
            </label>
            <label className={style.label}>
              Описание:
              <input className={style.input}
                type="text"
                name="description"
                id="description"
                placeholder="Введите описание"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required />
            </label>
            <label className={style.label}>
              Ссылка на изображение:
              <input className={style.input}
                type="text"
                name="urlImg"
                id="urlImg"
                placeholder="Ссылка на изображение"
                value={urlImg}
                onChange={e => setUrlImg(e.target.value)}
                required />
            </label>
            <label className={style.label}>
              <select className={style.select}
                value={sizeType}
                onChange={(e) => setSizeType(e.currentTarget.value)}              >
                <option value="volume">Обьем</option>
                <option value="weight">Масса</option>
              </select>
            </label>
            <label className={style.label}>
              Объем или вес:
              <input className={style.input}
                type="text"
                name="size"
                id="size"
                placeholder="Введите объем или вес"
                value={size}
                onChange={e => setSize(e.target.value)}
                required />
            </label>
            <label className={style.label}>
              Штрихкод:
              <input className={style.input}
                type="number"
                name="barcode"
                id="barcode"
                placeholder="Введите штрихкод"
                value={barcode}
                onChange={e => setBarcode(+e.target.value)}
                required />
            </label>
            <label className={style.label}>
              Производитель:
              <input className={style.input}
                type="text"
                name="manufacturer"
                id="manufacturer"
                placeholder="Введите производителя"
                value={manufacturer}
                onChange={e => setManufacturer(e.target.value)}
                required />
            </label>
            <label className={style.label}>
              Бренд:
              <input className={style.input}
                type="text"
                name="brand"
                id="brand"
                placeholder="Введите название бренда"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                required />
            </label>
            <label className={style.label}>
              Цена:
              <input className={style.input}
                type="number"
                name="price"
                id="price"
                placeholder="Введите цену"
                value={price}
                onChange={e => setPrice(+e.target.value)}
                required />
            </label>
            <label className={style.label}>
              <select className={style.select}
                value={group}
                multiple
                onChange={(e) => handleChangeSelect}>
                {options}
              </select>
            </label>
            <button className={style.btn} type="submit">Добавить</button>
          </form>
        </div>
      </div>
    </div>
  )
}