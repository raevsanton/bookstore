import React from 'react';
import './aside.scss';
import { Link } from "react-router-dom";
import face from "../../assets/images/face.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookmark } from "@fortawesome/free-solid-svg-icons";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { AsideProps } from "./AsideTypes";

const Aside: React.FC<AsideProps> = ({
    booksInCart,
    firstName,
    lastName,
    darkMode,
}) => {
    return (
        <aside>
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
        </aside>
    );
};

export default Aside;