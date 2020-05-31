import React from "react";
import "./ItemBook.scss"
import {ItemBookProps} from "./ItemBookTypes";

const ItemBook: React.FC<ItemBookProps> = ({
    book,
    addBookToCart,
    removeBookFromCart,
    isInCart
}) => {
    return (
        <div className="book__item">
            <div>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="cover" />
            </div>
            <div className="book__info">
                <div>
                    <h3>{book.volumeInfo.title}</h3>
                    {book.volumeInfo.authors.map((author : string, index : number) => {
                        return <p key={index}>{author}</p>
                    })}
                </div>
                <div className="book__buy">
                    <h3>{Math.ceil(book.saleInfo.listPrice.amount)} ₪</h3>
                    <div>
                    {isInCart
                        ?   <button className="book__remove" onClick={() => {
                                removeBookFromCart(book.id, book.saleInfo.listPrice.amount)
                            }}
                            >Remove</button>
                        :   <button onClick={() => {
                                addBookToCart(book)
                            }}
                            >Put</button>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemBook;