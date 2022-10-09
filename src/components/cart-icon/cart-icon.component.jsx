import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {CartContext} from '../../contexts/card.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext);
    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={toogleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItemCount}</span>
        </div>
    )
};

export default CartIcon;