import React from "react";
import "./main.scss";
import BookPage from "../../containers/BookPage";
import Cart from "../../containers/Cart";
import Profile from "../Profile/Profile";
import { MainProps } from "./MainTypes";
import { Switch, Route } from "react-router-dom";
import Error from "../Error/Error";
import ListBooks from "../ListBooks/ListBooks";

const Main: React.FC<MainProps> = ({ 
    darkMode
}) => {
    darkMode ? document.body.className = 'dark' : document.body.className = '';

    return (
        <main>
            <Switch>
                <Route path={'/'} exact component={ListBooks} />
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