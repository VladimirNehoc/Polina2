import React from 'react'

import './style/basket.css'

const Basket = props => {
    const { deleteProduct,
        upCountProduct,
        downCountProduct,
        store,
        products } = props
    return (
        <div className='lines-container'>
            {
                (store.length === 0) ? (
                    <div className='line'>
                        <span>КОРЗИНА ПУСТА</span>
                    </div>
                ) : (
                        store.map(el => {
                            for (let product of products) {
                                if (product.id === el.id) {
                                    return (
                                        <div className='line' key={product.id}>
                                            <div className='line__image-container'>
                                                <img className='line__image-container_image'
                                                    src={window.location.origin + '/' + product.image}
                                                    alt={product.name}></img>
                                            </div>
                                            <span className='line__name'>{product.name}</span>
                                            <div className='counter-price-container'>
                                                <div className='counter-container'>
                                                    <span className='counter-container__down' onClick={() => (el.count === 0) ? null : downCountProduct(el.id)}>-</span>
                                                    <span className='counter-container__count'>{el.count}</span>
                                                    <span className='counter-container__up' onClick={() => (el.count === 9) ? null : upCountProduct(el.id)}>+</span>
                                                </div>
                                            <span className='line__price'>{product.price}р | {product.price * el.count}р</span>
                                            </div>
                                            <span className='line__close' onClick={() => deleteProduct(product.id)}>x</span>
                                        </div>
                                    )
                                }
                            }
                            return (
                                <div className='line'>
                                    <h3>NOT FOUND PRODUCT WITH ID: {el.id}</h3>
                                </div>
                            )
                        }))
            }
        </div>
    )
}

export default Basket