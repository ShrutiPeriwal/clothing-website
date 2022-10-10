import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/user.context';
import {BrowserRouter} from 'react-router-dom';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/card.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
        <CategoriesProvider>
        <CartProvider>
            <App />
        </CartProvider>
        </CategoriesProvider>
        </UserProvider>
    </BrowserRouter>
);