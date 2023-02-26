
export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return { ...state, products: action.payload };
        default:
            break;
    }
}

export default CartReducer