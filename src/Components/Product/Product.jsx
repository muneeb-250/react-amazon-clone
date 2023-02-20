import React from 'react'
import "./index.css"
import { useStateValue } from '../../Context/StateProvider'
const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, title, image, price, rating
            }
        })
    }
    return (
        <div className="product">
            <p>{title}</p>
            <div className="product__info">
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => <p>⭐</p>)}
                </div>
            </div>
            <img src={image} alt="prod" className="product__image" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product