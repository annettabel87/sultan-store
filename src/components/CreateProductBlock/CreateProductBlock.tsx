import { FC, useState } from "react";
import { FILTERS, FILTERSNAME } from "../../common/helpers";
import { IProduct } from "../../Redux/catalogReducer";
import style from "./CreateProductBlock.module.scss";
import close from "../../assets/icon/close.svg";

export interface ICreateBlockProps {
  onClose: () => void;
  btnText: string,
  handler: (product: IProduct) => void,
  data?: IProduct
}
export const CreateProductBlock: FC<ICreateBlockProps> = ({ onClose, btnText, handler, data }) => {
  
  const [title, setTitle] = useState<string>(data?.title ?? "");
  const [urlImg, setUrlImg] = useState<string>(data?.urlImg  ?? "");
  const [description, setDescription] = useState<string>(data?.description ?? "");
  const [sizeType, setSizeType] = useState<string>(data?.sizeType ?? "");
  const [size, setSize] = useState<string>(data?.size ??  "");
  const [barcode, setBarcode] = useState<number>(data?.barcode  ?? 0);
  const [manufacturer, setManufacturer] = useState<string>(data?.manufacturer ?? "");
  const [brand, setBrand] = useState<string>(data?.brand ?? "");
  const [price, setPrice] = useState<number>(data?.price ?? 0);
  const [group, setGroup] = useState<FILTERSNAME[]>(data?.groups ?? []);

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

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = {
      id: data?.id ?? Date.now(),
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
    console.log(newProduct);
    
    handler(newProduct);
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

          <form className={style.form} onSubmit={e => submitHandler(e)}>
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
            <button className={style.btn} type="submit">{btnText}</button>
          </form>
        </div>
      </div>
    </div>
  )
}