import React, { useEffect } from 'react';
import "./bookPage.scss";
import { Book } from '../../types/types';
import { BookPageProps } from "./BookPageTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { AppStateType } from '../../reducers';
import Preloader from "../Preloader/Preloader";

const BookPage: React.FC<BookPageProps> = ({
    addBookToCart,
    removeBookFromCart,
    getOneBookById, 
    match,
    booksInCart,
    loadingBooks,
    oneBook,
}) => {
    let isInCart=!!booksInCart.find((item: Book) =>
        item.id === oneBook.id
    );
    let darkMode = useSelector((state: AppStateType) => state.theme.darkMode);
    
    useEffect(() => {
        getOneBookById(match.params.id);
    }, [getOneBookById, match.params.id]);

    if (loadingBooks) {
        return <Preloader/>
    }

    return (
      <div className={`bookpage ${darkMode && "dark-background"}`}>
        <img className="bookpage__cover" src={oneBook.cover} alt="cover-book"/>
        <div className="bookpage__info">
            <div className="bookpage__authors">
                {oneBook.authors && oneBook.authors.map((author: string, index: number) => {
                    return <span key={index}>{author}</span>
                })}
            </div>
            <h1 className="bookpage__title">{oneBook.title}</h1>
            <p className="bookpage__subtitle">{`«${oneBook.subtitle}»`}</p>
            <p className="bookpage__description">{oneBook.description}</p>
            <a href={oneBook.link} target="_blank" rel="noopener noreferrer">Preview<FontAwesomeIcon icon={faExternalLinkAlt} size="1x" color="#808080"/></a>
            <div className={`bookpage__price ${darkMode && "dark-white"}`}>
                <h1>{Math.ceil(oneBook.price)}</h1>
                <h3>$</h3>
                {isInCart
                    ?   <button className="book__remove" onClick={() => {removeBookFromCart(oneBook.id, oneBook.price)}}>Remove</button>
                    :   <button onClick={() => {addBookToCart(oneBook);}}>Add</button>
                }
            </div>
        </div>
      </div>
    );
};

export default BookPage;
