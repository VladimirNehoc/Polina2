import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style/product.css'

const Product = props => {
    const { products, store, addProduct, deleteProduct } = props
    const id = String(window.location.pathname.match(/products\/\d{1,}/)).match(/\d{1,}/)[0]
    const product = products.filter(product => (product.id + '' === id) ? true : false)[0]
    const [count, setCount] = useState(1)


    return (
        <React.Fragment>
            <div className='product__image-container'>
                <img className='product__image-container_image'
                    src={window.location.origin + '/' + product.image} alt={product.name} />
            </div>
            <div className='product__title-container'>
                <div className='product__name-container'>
                    <h2 className='product__title-container_name'>{product.name}</h2>
                    <p className='product__title-container_price'>{product.price + 'р'}</p>
                </div>
                <p className='product__description'>{product.description}</p>
            </div>
            <div className='buttons-container'>
                {
                    (store.find(el => (el.id === product.id) ? true : false)) ?
                        (
                            <React.Fragment>
                                <div className='basket-button' onClick={() => { deleteProduct(product.id); setCount(1) }}>Удалить из&nbsp;корзины</div>
                                <Link to='/basket'>
                                    <div className='basket-button'>Перейти в&nbsp;корзину</div>
                                </Link>
                            </React.Fragment>
                        ) :
                        (
                            <React.Fragment>
                                <div className='counter-container'>
                                    <span className='counter-container__down' onClick={() => setCount((count === 0) ? 0 : count - 1)}>-</span>
                                    <span className='counter-container__count'>{count}</span>
                                    <span className='counter-container__up' onClick={() => setCount((count === 9) ? 9 : count + 1)}>+</span>
                                </div>
                                <div className='basket-button' onClick={() => addProduct(product.id, count)}>Добавить в&nbsp;корзину</div>
                            </React.Fragment>
                        )
                }
            </div>
        </React.Fragment>

    )
}

export default Product