import { Outlet , Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.style.scss';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { CartContext } from '../../contexts/card.context';

const Navigation = () => {
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link classname='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;