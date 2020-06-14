import React from "react";
import "./Main.scss";
import face from "../../assets/images/face.jpg";
import BookPage from "../../containers/BookPage";
import Cart from "../../containers/Cart";
import Profile from "../Profile/Profile";
import Preloader from "../Preloader/Preloader";
import ItemBook from "../../components/ItemBook/ItemBook";
import { useEffect } from "react";
import { Book } from "../../types/types";
import { MainProps } from "./MainTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Switch, Link, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AppStateType } from "../../reducers";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

const Main: React.FC<MainProps> = ({
    books, 
    getBooks, 
    booksInCart, 
    loadingBooks, 
    error, 
    firstName, 
    lastName
}) => {
    useEffect(() => {
        getBooks()
    }, [getBooks]);

    let darkMode = useSelector((state: AppStateType) => state.theme.darkMode);
    darkMode ? document.body.className = 'dark' : document.body.className = '';

    if (loadingBooks) {
        return <Preloader/>
    }

    if (error) {
        return <h2 className="main__error">Service not working :(</h2>
    }
    return (
        <main>
            <div className="main__left">
                <Link to="/profile">
                    <div className={`main__profile ${darkMode && "dark-background"}`}>
                        <div className="main__avatar">
                            <div className="main__count">
                                <p>{booksInCart.length}</p>
                            </div>
                            <img className="main__face" src={face} alt="profile-face" />
                        </div>
                        <h3 className="main__name">{firstName} {lastName}</h3>
                    </div>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="main__button">
                                <FontAwesomeIcon icon={faBook} size="lg" color="#808080"/>
                                <p>My Library</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="main__button">
                                <FontAwesomeIcon icon={faBookmark} size="lg" color="#808080"/>
                                <p>Bookshelf</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <SwitchTheme />
            </div>
            <div className="main__right">
                <Switch>
                    <Route path={'/'} exact> 
                        <h1 className="main__title">My Library</h1>
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
                    <Route path={'/cart'} component={Cart}/>
                    <Route path={'/about'} />
                    <Route 
                        path={`/book/:id/`} 
                        render={(props) => 
                            <BookPage 
                                data={books} {...props} 
                            />
                        }
                    />
                    <Route path={'/profile'} component={Profile} />
                </Switch>
            </div>
        </main>
    )
};

export default Main;