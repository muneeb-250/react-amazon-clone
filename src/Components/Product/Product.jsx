import React from 'react'
import "./index.css"
const Product = ({ id, title, image, price, rating }) => {
    return (
        <div className="product">
            <p>{title}</p>
            <div className="product__info">
                <p className="product__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => <p>⭐</p>)}
                </div>
            </div>
            <img src={image} alt="prod" className="product__image" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product