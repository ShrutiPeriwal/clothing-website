import { useContext } from 'react';
import { CartContext } from '../../contexts/card.context';
import './checkOut.scss';

const CheckOut = () => {
    const { cartItems } = useContext(CartContext);

  return (
    <div>
    <h1>Check Out</h1>
    <div>
        {
            cartItems.map((cartItem) => {
                const { id, name, quantity} = cartItem;
                return (
                <div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                </div> 
                );
            })
        }
    </div>
    </div>
  )
}

export default CheckOut;