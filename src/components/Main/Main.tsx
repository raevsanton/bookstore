import React from "react";
import "./Main.scss";
import {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import ItemBook from "../../containers/ItemBook";
import {Book} from "../../types/types";
import {MainProps} from "./MainTypes";

const Main: React.FC<MainProps> = (props) => {

    const {books, getBooks, booksInCart, loadingBooks, error} = props;

    useEffect(() => {
        getBooks()
    }, [getBooks]);

    if (loadingBooks) {
        return <Preloader/>
    }

    if (error) {
        return <h2 className="main__error">Service not working :(</h2>
    }
    return (
        <main>
            {books.map((book: Book) => {
                return <ItemBook
                    book={book}
                    isInCart={!!booksInCart.find((item: Book) =>
                        item.id === book.id
                    )}
                    key={book.id}
                />
            })}
        </main>
    )
};

export default Main;