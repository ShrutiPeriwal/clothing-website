import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocumnets } from '../utils/firebase/firebase.utils.js';
// import SHOP_DATA from '../shop.data.js';

export const ProductContext = createContext({
    products: [], 
});

export const ProductProvider = ({ children }) => {
    const [products] = useState([]);
    // useEffect(() => {
    //     addCollectionAndDocumnets('categories', SHOP_DATA)
    // }, []);
    const value = { products };
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}