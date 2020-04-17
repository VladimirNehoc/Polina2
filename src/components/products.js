import React from 'react'
import { Link } from 'react-router-dom'

import './style/products.css'

const Products = props => {
    const { products, setId, categories } = props;
    let selectCategory = null;
    if (window.location.pathname !== '/') {
        const category = window.location.pathname.match(/\w{1,}$/)[0]
        selectCategory = categories.find(el => (el.en_name === category)?true:false)
        selectCategory = (typeof selectCategory == typeof {})?selectCategory.id:null
    }

    return (
        <React.Fragment>
            {
                products.map(product => {
                    if (selectCategory !== null && selectCategory !== product.category) return null
                    else return (
                        <Link to={`/products/${product.id}`} key={product.id} onClick={() => {
                            setId(product.id)
                        }}>
                            <div className='article-container'>
                                <div className='article'>
                                    <div className='article__image-container'>
                                        <img className='article__image-container_image' src={product.image} alt={product.name}></img>
                                    </div>
                                    <div className='article__title-container'>
                                        <span className='article__title-container_name'>{product.name}</span>
                                        <span className='article__title-container_price'>{product.price}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Products;