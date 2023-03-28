import { FC, useEffect } from "react"
import { FullCard } from "../components/FullCard/FullCard"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { fetchFullProduct } from "../Redux/actionCreators"


export const CardPage: FC = () => {
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => state.catalogReducer.selectedCard)

    const { cardId } = useParams();
    useEffect(() => {
        if (cardId) {
            dispatch(fetchFullProduct({ id: +cardId }))
        }

    }, [])

    return (
        <div>
            <FullCard product={product}/>
        </div>
    )
}