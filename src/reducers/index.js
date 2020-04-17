const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                {
                    id: action.id,
                    count: action.count
                }
            ]

        case 'DELETE_PRODUCT':
            return state.filter(product => (product.id === action.id) ? false : true)

        case 'UP_COUNT_PRODUCT':
            return state.map(el => {
                if (el.id === action.id) {
                    el.count += 1
                }
                return el
            })

        case 'DOWN_COUNT_PRODUCT':
            return state.map(el => {
                if (el.id === action.id) {
                    el.count -= 1
                }
                return el
            })

        default:
            return state
    }
}

export default reducer