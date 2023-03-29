import { FC } from "react"
import { Basket } from "../components/Basket/Basket"
import { useAppSelector } from "../hooks/hooks"


export const BasketPage: FC = () => {
    const {basket, totalPrice} = useAppSelector(state => state.basketReducer)
    return (
        <div>
            <Basket products={basket} totalPrice={totalPrice}/>
        </div>
    )
}