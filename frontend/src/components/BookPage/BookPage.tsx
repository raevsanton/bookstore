import React from 'react';
import "./BookPage.scss";
import { Book } from '../../types/types';
import { BookPageProps } from "./BookPageTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { AppStateType } from '../../reducers';

const BookPage: React.FC<BookPageProps> = ({
    addBookToCart,
    removeBookFromCart,
    match, 
    data, 
    booksInCart
}) => {
    let book = data.find((book : Book) => book.id === match.params.id);
    console.log(match.params.id);
    
    let isInCart=!!booksInCart.find((item: Book) =>
        item.id === book.id
    )
    let subtitle = book.subtitle === undefined ? null : `«${book.subtitle}»`;
    let darkMode = useSelector((state: AppStateType) => state.theme.darkMode);
    console.log(data);
    
    return (
      <div className={`bookpage ${darkMode && "dark-background"}`}>
        {/* <img className="bookpage__cover" src={book.cover} alt="cover-book"/> */}
        <div className="bookpage__info">
            <div className="bookpage__authors">
                {book.authors.map((author : string, index : number) => {
                    return <span key={index}>{author}</span>
                })}
            </div>
            <h1 className="bookpage__title">{book.title}</h1>
            <p className="bookpage__subtitle">{book.subtitle}</p>
            <p className="bookpage__description">{book.description}</p>
            <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview<FontAwesomeIcon icon={faExternalLinkAlt} size="1x" color="#808080"/></a>
            <div className={`bookpage__price ${darkMode && "dark-white"}`}>
                <h1>{Math.ceil(book.price)}</h1>
                <h3>$</h3>
                {isInCart
                    ?   <button className="book__remove" onClick={() => {
                            removeBookFromCart(book.id, book.price)
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