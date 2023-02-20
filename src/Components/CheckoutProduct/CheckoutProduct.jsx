import React from 'react'
import './index.css'
import { useStateValue } from '../../Context/StateProvider'
const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img src={image} alt="product" className='checkoutProduct__image' />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_) => <p>⭐</p>)}
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;