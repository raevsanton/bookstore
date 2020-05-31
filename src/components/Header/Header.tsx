import React from 'react';
import './Header.scss';
import Popup from "reactjs-popup";
import Cart from "../../containers/Cart";
import shopCart from "../../assets/images/business.svg";
import logo from "../../assets/images/logo.svg";
import {HeaderProps} from "./HeaderTypes";

const Header: React.FC<HeaderProps> = (props) => {
    const { totalPrice, booksInCart } = props;
    return (
        <header>
            <a href="/">
                <img src={logo} alt="logo"/>
            </a>
            <div className="header__wrp">
                <h2>{Math.ceil(totalPrice)} ₪</h2>
                <Popup
                    trigger={
                        <div className="header__cart">
                            <img src={shopCart} alt="cart"/>
                            <div className="header__count">
                                <span>{booksInCart.length}</span>
                            </div>
                        </div>
                    }
                    modal
                    closeOnDocumentClick
                >
                <Cart />
                </Popup>
            </div>
        </header>
    );
};

export default Header;