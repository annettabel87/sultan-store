import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IProduct, catalogSlice } from "../../Redux/catalogReducer";
import { Pagination } from "../Pagination/Pagination";
import { fetchProducts } from "../../Redux/actionCreators";
import { DATA_URL } from "../../common/constants";
import { CardForAdmin } from "../CardForAdmin/CardForAdmin";
import style from "./ProductsBlock.module.scss";
import { CreateProductBlock } from "../CreateProductBlock/CreateProductBlock";
import { countStartEndToPagination } from "../../common/helpers";


export const ProductsBlock: FC = () => {
  const { products, currentPage, totalCount, countPerPage } = useAppSelector(store => store.catalogReducer);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<number>(-1);

  const { SET_CURRENT_PAGE, UPDATE_PRODUCT } = catalogSlice.actions;
  const dispatch = useAppDispatch();

   const {start,end} = countStartEndToPagination(currentPage,countPerPage)

  const onSetPage = (page: number) => {
    dispatch(SET_CURRENT_PAGE(page))
  }

  useEffect(() => {
    dispatch(fetchProducts({ url: DATA_URL }))
  }, [currentPage]);

  const getUpdateId = (id: number) => {
    setEditId(id);
    setIsEdit(true);
  }

  const updateProduct = (product: IProduct) => {
    dispatch(UPDATE_PRODUCT(product));
    setIsEdit(false)
  }

  let cards;

  if (!isEdit) {
    cards = products.slice(start, end).map(product => <CardForAdmin product={product} handler={getUpdateId} key={product.id} />)
  } else {
    const data = products.filter(item => item.id === editId)[0];
    cards = <CreateProductBlock data={data} onClose={() => setIsEdit(false)} btnText={"Обновить"}
      handler={updateProduct} />
  }

  return (
    <div className={style.cardBlock}>
      <div className={style.block}>
        {cards}
      </div>
      <Pagination currentPage={currentPage} countPerPage={countPerPage} totalCountItems={totalCount} onSetPage={onSetPage} />
    </div>
  );
};
