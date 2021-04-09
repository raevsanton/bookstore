import React from 'react';
import './cart.scss';
import { Book } from "../../types/types";
import { CartProps } from "./CartTypes";
import emptyCart from "../../assets/images/empty-bookshelf.svg";
import removeItem from "../../assets/images/close.svg";

const Cart: React.FC<CartProps> = ({
    removeBookFromCart,
    totalPrice,
    booksInCart,
    darkMode,
}) => {
    return (
        <>
            <h1 className="main__title">Bookshelf</h1>
            <div className={`bookpage--cart ${darkMode && "dark-background"}`}>
                {booksInCart.length === 0
                    ?   <div className="cart__empty">
                            <img src={emptyCart} alt="emptyCart"/>
                            <h2 className="cart__title--center">Is empty</h2>
                        </div>
                    :   <div className="cart__wrp">
                            <div className="cart__total">
                                <h3 className={`${darkMode && "dark-white"}`}>Total:</h3>
                                <h2 className={`${darkMode && "dark-white"}`}>{`⠀${Math.ceil(totalPrice)}⠀`}</h2>
                                <h4>$</h4>
                            </div>
                            {booksInCart.map((book : Book) =>
                                <div key={book.id}>
                                    <hr />
                                    <div className="cart__item" >
                                        <div className="cart__wrapper">
                                            <div className="cart__cover">
                                                <img src={book.cover} alt="cover" />
                                            </div>
                                            <div>
                                                <h2 className="cart__title">{book.title}</h2>
                                                <div className="bookpage__authors">
                                                    {book.authors.map((author : string, index : number) => {
                                                        return <span key={index}>{author}</span>
                                                    })}
                                                </div>
                                                <div className={`bookpage__price ${darkMode && "dark-white"}`}>
                                                    <h2 className="cart__price">{Math.ceil(book.price)}</h2>
                                                    <h4 className={`cart__currency ${darkMode && "dark-white"}`}>$</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart__remove" onClick={() => {
                                            removeBookFromCart(book.id, book.price)}}
                                        >
                                            <img src={removeItem} alt="removeItem" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                }
            </div>
        </>
    );
};

export default Cart;