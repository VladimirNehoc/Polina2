const AddProduct = (id, count) => {
    return {
        type: 'ADD_PRODUCT',
        id,
        count
    }
}

const DeleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        id
    }
}

const UpCountProduct = (id) => {
    return {
        type: 'UP_COUNT_PRODUCT',
        id
    }
}

const DownCountProduct = (id) => {
    return {
        type: 'DOWN_COUNT_PRODUCT',
        id
    }
}

export { AddProduct, DeleteProduct, UpCountProduct, DownCountProduct }