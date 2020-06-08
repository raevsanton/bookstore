import React from 'react';
import "./BookPage.scss";
import { Book } from '../../types/types';
import {BookPageProps} from "./BookPageTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const BookPage: React.FC<BookPageProps> = props => {

    let {addBookToCart,removeBookFromCart,match, data, booksInCart} = props;

    let book = data.find((p : Book) => p.id === match.params.id);
    let isInCart=!!booksInCart.find((item: Book) =>
        item.id === book.id
    )
    let subtitle = book.volumeInfo.subtitle === undefined ? null : `«${book.volumeInfo.subtitle}»`;
    console.log(match)
    return (
      <div className="bookpage">
        <img className="bookpage__cover" src={book.volumeInfo.imageLinks.smallThumbnail} alt="cover-book"/>
        <div className="bookpage__info">
            <div className="bookpage__authors">
                {book.volumeInfo.authors.map((author : string, index : number) => {
                    return <span key={index}>{author}</span>
                })}
            </div>
            <h1 className="bookpage__title">{book.volumeInfo.title}</h1>
            <p className="bookpage__subtitle">{subtitle}</p>
            <p className="bookpage__description">{book.volumeInfo.description}</p>
            <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview<FontAwesomeIcon icon={faExternalLinkAlt} size="1x" color="#808080"/></a>
            <div className="bookpage__price">
                <h1>{Math.ceil(book.saleInfo.listPrice.amount)}</h1>
                <h3>{book.saleInfo.listPrice.currencyCode}</h3>
                {isInCart
                    ?   <button className="book__remove" onClick={() => {
                            removeBookFromCart(book.id, book.saleInfo.listPrice.amount)
                        }}
                        >Remove</button>
                    :   <button onClick={() => {
                            addBookToCart(book)
                        }}
                        >Add</button>
                }
            </div>
        </div>
      </div>
    );
};

export default BookPage;