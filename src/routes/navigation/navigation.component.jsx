import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom" 

import { UserContext } from "../../context/user.context"
import { CartContext } from "../../context/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg'
import CartIcon from "../../component/cart-icon/cart-icon.component"
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component"

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
  } from './navigation.styles';


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
      };

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Crwnlogo className='logo'/>
                </LogoContainer>
                <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;