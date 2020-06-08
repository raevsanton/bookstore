import React from "react";
import "./Main.scss";
import {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import ItemBook from "../../components/ItemBook/ItemBook";
import {Book} from "../../types/types";
import {MainProps} from "./MainTypes";
import face from "../../assets/images/face.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Switch, Link, Route } from "react-router-dom";
import BookPage from "../../containers/BookPage";
import Cart from "../../containers/Cart";

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
            <div className="main__left">
                <div className="main__profile">
                    <img className="main__face" src={face} alt="profile-face" />
                    <h3 className="main__name">Anton Raevsky</h3>
                    <div className="main__count">
                        <p>{booksInCart.length}</p>
                    </div>
                </div>
                <hr />
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
            </div>
            <div className="main__right">
                <Switch>
                    <Route path={'/'} exact> 
                        <h1>My Library</h1>
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
                </Switch>
            </div>
        </main>
    )
};

export default Main;