import React from "react";
import "./main.scss";
import BookPage from "../../containers/BookPage";
import Cart from "../../containers/Cart";
import Profile from "../Profile/Profile";
import Preloader from "../Preloader/Preloader";
import ItemBook from "../../components/ItemBook/ItemBook";
import { Book } from "../../types/types";
import { MainProps } from "./MainTypes";
import { Switch, Link, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AppStateType } from "../../store/reducers";
import Error from "../Error/Error";

const Main: React.FC<MainProps> = ({
    getAllBooks, 
    sortBooks,
    loadingBooks, 
    error,
    booksSorted,
    selectedSort,
    books,
}) => {
    const darkMode = useSelector((state: AppStateType) => state.theme.darkMode);
    darkMode ? document.body.className = 'dark' : document.body.className = '';

    React.useEffect(() => {
        getAllBooks()
    }, []);

    if (loadingBooks) {
        return <Preloader/>
    }

    if (error) {
        return <h2 className="main__error">Service not working :(</h2>
    }
    return (
        <main>
            <Switch>
                <Route path={'/'} exact>
                    <h1 className="main__title">My Library</h1>
                    <select
                        name="main__sort"
                        className={`main__sort ${darkMode && "dark-select"}`}
                        onChange= {(e) => sortBooks(e.target.value, books, booksSorted)}
                        data-bookSorted={booksSorted}
                        value={selectedSort}
                    >
                        <option hidden selected>Sort</option>
                        <option value="0">Price high to low</option>
                        <option value="1">Price low to high</option>
                    </select>
                    <div className="main__list">
                        {books.map((book: Book) => (
                            <Link to={`book/${book.id}`} key={book.id}>
                                <ItemBook
                                    book={book}
                                    key={book.id}
                                />
                            </Link>
                        ))}
                    </div>
                </Route>
                <Route path={'/cart'} component={Cart} />
                <Route path={'/about'} />
                <Route path={`/book/:id/`} component={BookPage} />
                <Route path={'/profile'} component={Profile} />
                <Route component={Error} />
            </Switch>
        </main>
    )
};

export default Main;