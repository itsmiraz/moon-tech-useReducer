import { actionTypes } from "./actionTypes";

export const initalState = {

    loading: false,
    products: [],
    error: false,
    cart: [],
    whishlist: []

};

export const productReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                ...state,
                error: false,
                loading: true,
            };
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false
            };
        case actionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,

                error: true
            };
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case actionTypes.ADD_TO_WHISHLIST:
            return {
                ...state,
                whishlist: [...state.whishlist, action.payload]
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((obj) => obj._id !== action.payload)

            }

        default:
            return state
    }

}