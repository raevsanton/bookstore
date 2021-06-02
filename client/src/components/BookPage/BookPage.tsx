import React from 'react';
import "./bookPage.scss";
import { useParams } from "react-router-dom";
import { BookPageProps, MatchParamsBookPage } from "./BookPageTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Preloader from "../Preloader/Preloader";
import Modal from '../Modal/Modal';

const BookPage: React.FC<BookPageProps> = ({
    removeOneBook,
    getOneBook,
    darkMode,
    isLoading,
    isError,
    book,
}) => {
    const [modalActive, setModalActive] = React.useState<boolean>(false);
    const params = useParams<MatchParamsBookPage>();
    const bookId = params.id;

    React.useEffect(() => {
        getOneBook(bookId)
    },[bookId, getOneBook])

    if(!book) return null;

    return (
        <>
            <Modal modalActive={modalActive} setModalActive={setModalActive}>
                <h2>Are you want to remove this book?</h2>
                <br/>
                <button className="main__remove" onClick={() => removeOneBook(bookId)}>Yes</button>&ensp;
                <button onClick={() => setModalActive(false)}>No</button>
            </Modal>
            {isError && <h2 className="main__error">Failed to load books</h2>}
            {isLoading && <Preloader/>}
            <div className={`bookpage ${darkMode && "dark-background"}`}>
                <img className="bookpage__cover" src={book.cover} alt="cover-book"/>
                <div className="bookpage__info">
                    <div className="bookpage__authors">
                        {book.authors.map((author: string, index: number) => {
                            return <span key={index}>{author}</span>
                        })}
                    </div>
                    <h1 className="bookpage__title">{book.title}</h1>
                    <p className="bookpage__subtitle">{`«${book.subtitle}»`}</p>
                    <p className="bookpage__description">{book.description}</p>
                    <a href={book.link} target="_blank" rel="noopener noreferrer">Preview<FontAwesomeIcon icon={faExternalLinkAlt} size="1x" color="#808080"/></a>
                    <br/><br/>
                    <button onClick={() => setModalActive(true)}>Remove</button>
                </div>
            </div>
      </>
    );
};

export default BookPage;
