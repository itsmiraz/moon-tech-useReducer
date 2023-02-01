import React, { createContext, useEffect, useReducer, } from 'react';
import { useContext } from 'react';
import { actionTypes } from '../State/ProductState/actionTypes';
import { initalState, productReducer } from '../State/ProductState/ProductReducer';


const PRODUCT_CONTEXT = createContext()

const PrductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initalState)

    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START });
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>
                dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data }
                ))
            .catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR });
            });
    }, [])

    console.log(state)
    const appData = {
        state,
        dispatch
    }

    return (
        <PRODUCT_CONTEXT.Provider value={appData}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};


export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context
}

export default PrductProvider;