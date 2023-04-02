import { FC, useEffect } from "react";
import { FullCard } from "../components/FullCard/FullCard";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchFullProduct } from "../Redux/actionCreators"
import Preloader from "../common/Preloader/Preloader";
import style from "./CardPage.module.scss";


export const CardPage: FC = () => {
    const dispatch = useAppDispatch();
    const {selectedCard, isLoading, error} = useAppSelector(state => state.catalogReducer)

    const { cardId } = useParams();

    useEffect(() => {
        if (cardId) {
            dispatch(fetchFullProduct({ id: +cardId }))
        }
    }, [])

    if (isLoading) {
        return (
          <Preloader/>
        )
      }
    
    if(error) {
      return (
        <div className={style.error}>Загрузка...</div>
      )
    }
    return (
        <div>
            <FullCard product={selectedCard}/>
        </div>
    )
}