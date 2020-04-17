import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Products from '../components/products'
import Product from '../components/product'
import Basket from '../components/basket'
import Menu from '../components/menu'
import { AddProduct, DeleteProduct, UpCountProduct, DownCountProduct } from '../actions/index'

import './style/App.css'

const products = require('../store/products.json')
const categories = require('../store/categories.json')

let App = props => {
    const { store, addProduct, deleteProduct, upCountProduct, downCountProduct } = props
    const [id, setId] = useState(0)

    return (
        <div className='main-container'>
            <Switch>
                <Route path='/products' render={() => {
                    return (
                        <div className='product-container'>
                            <Product id={id} products={products}
                                addProduct={addProduct}
                                deleteProduct={deleteProduct}
                                store={store} />
                        </div>
                    )
                }} />
                <Route path='/basket' render={() => {
                    return (
                        <div className='basket-container'>
                            <Basket products={products}
                                addProduct={addProduct}
                                deleteProduct={deleteProduct}
                                upCountProduct={upCountProduct}
                                downCountProduct={downCountProduct}
                                store={store} />
                        </div>
                    )
                }} />
                <Route path='/' render={() => {
                    return (
                        <React.Fragment>
                            <div className='menu-container'>
                                <Menu categories={categories} />
                            </div>
                            <div className='products-container'>
                                <Products products={products} setId={setId} categories={categories} />
                            </div>
                        </React.Fragment>
                    )
                }} />
            </Switch>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        store
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (id, count) => dispatch(AddProduct(id, count)),
        deleteProduct: id => dispatch(DeleteProduct(id)),
        upCountProduct: id => dispatch(UpCountProduct(id)),
        downCountProduct: id => dispatch(DownCountProduct(id))
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
