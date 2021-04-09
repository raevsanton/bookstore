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
import Error from "../Error/Error";

const Main: React.FC<MainProps> = ({
    getAllBooks, 
    sortBooks,
    loadingBooks, 
    error,
    books,
    darkMode
}) => {
    const [valueInSelect, setValueInSelect] = React.useState<string>('')
    darkMode ? document.body.className = 'dark' : document.body.className = '';

    React.useEffect(() => {
        getAllBooks()
    }, [getAllBooks]);

    if (error) {
        return <h2 className="main__error">Failed to load books</h2>
    }

    return (
        <main>
            <Switch>
                <Route path={'/'} exact>
                    <h1 className="main__title">My Library</h1>
                    <select
                        name="main__sort"
                        className={`main__sort ${darkMode && "dark-select"}`}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            sortBooks(e.target.value)
                            setValueInSelect(e.target.value)
                        }}
                        value={valueInSelect}
                    >
                        <option hidden selected>Sort</option>
                        <option value="price-asc">Price low to high</option>
                        <option value="price-desc">Price high to low</option>
                    </select>
                    {loadingBooks
                        ? <Preloader />
                        : <div className="main__list">
                            {books.map((book: Book) => (
                                <Link to={`book/${book.id}`} key={book.id}>
                                    <ItemBook
                                        book={book}
                                        key={book.id}
                                    />
                                </Link>
                            ))}
                        </div>
                    }
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