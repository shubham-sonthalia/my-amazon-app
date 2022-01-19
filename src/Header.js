import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
    return (
      <div className="header">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="header_logo"
          />
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon"></SearchIcon>
        </div>
        <div className="header_nav">
          <Link to = {!user && '/login'}>
            <div onClick = {handleAuthentication} 
            className="header_option">
              <span className="header_LineOne">Hello {user? auth.currentUser.email : "Guest"}</span>
              <span className="header_LineTwo">
                {user ? "Sign out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header_LineOne">Returns</span>
            <span className="header_LineTwo">& Orders</span>
          </div>
          <div className="header_option">
            <span className="header_LineOne">Your</span>
            <span className="header_LineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_basket">
              <ShoppingBasketIcon></ShoppingBasketIcon>
              <span className="header_LineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Header
