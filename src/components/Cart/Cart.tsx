import React from 'react';
import './Cart.scss';
import emptyCart from "../../assets/images/empty-bookshelf.svg";
import removeItem from "../../assets/images/close.svg";
import {Book} from "../../types/types";
import {CartProps} from "./CartTypes";

const Cart: React.FC<CartProps> = ({
    removeBookFromCart,
    totalPrice,
    booksInCart
}) => {
    return (
        <div className="cart">
            <h2 className="cart__title">My Bookshelf</h2>
            {booksInCart.length === 0
                ?   <div>
                        <img className="cart__empty" src={emptyCart} alt="emptyCart"/>
                        <h2 className="cart__title--center">Is empty</h2>
                    </div>
                :   <div className="cart__wrp">
                        {booksInCart.map((book : Book) =>
                            <div key={book.id}>
                                <div className="cart__item" >
                                    <div className="cart__wrapper">
                                        <div className="cart__cover">
                                            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="cover" />
                                        </div>
                                        <div>
                                            <h4>{book.volumeInfo.title}</h4>
                                            <p>{`${book.volumeInfo.authors}`}</p>
                                            <h4>{book.saleInfo.listPrice.amount}  ₪</h4>
                                        </div>
                                    </div>
                                    <div className="cart__remove" onClick={() => {
                                        removeBookFromCart(book.id, book.saleInfo.listPrice.amount)}}
                                    >
                                        <img src={removeItem} alt="removeItem" />
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )}
                        <div className="cart__price">
                            <h3>Total:</h3>
                            <h2>{`⠀${totalPrice}`} ₪</h2>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Cart;