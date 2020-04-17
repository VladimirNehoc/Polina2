import React from 'react'
import { Link } from 'react-router-dom'

import './style/menu.css'

const Menu = props => {
    const { categories } = props
    return (
        <React.Fragment>
            <Link to='/basket'>
                <div className='basket-button'>Перейти в&nbsp;корзину</div>
            </Link>
            <Link to='/' className='menu__category'>
                <span>Все гатегории</span>
            </Link>
            {
                categories.map(category => {
                    return (
                        <Link to={`/${category.en_name}`} className='menu__category' key={category.id}>
                            <span>{category.name}</span>
                        </Link>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Menu