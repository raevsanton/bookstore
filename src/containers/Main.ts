import {getBooks} from "../actions/books";
import {connect} from "react-redux";
import Main from "../components/Main/Main";
import {AppStateType} from "../reducers";
import {MapDispatchMainProps, MapStateMainProps} from "../components/Main/MainTypes";

const mapStateToProps = (store: AppStateType): MapStateMainProps => ({
    books: store.books.books,
    loadingBooks: store.books.loadingBooks,
    error: store.books.error,
    booksInCart: store.cart.booksInCart
});

const mapDispatchToProps: MapDispatchMainProps = {
    getBooks
};

export default connect<MapStateMainProps, MapDispatchMainProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(Main);