import { getAllBooks, sortBooks } from "../actions/books";
import { connect } from "react-redux";
import { AppStateType } from "../reducers";
import { MapDispatchMainProps, MapStateMainProps } from "../components/Main/MainTypes";
import Main from "../components/Main/Main";

const mapStateToProps = (store: AppStateType): MapStateMainProps => ({
    books: store.books.books,
    loadingBooks: store.books.loadingBooks,
    error: store.books.error,
    booksInCart: store.cart.booksInCart,
    firstName: store.profile.firstName,
    lastName: store.profile.lastName,
    booksSorted: store.books.booksSorted,
    selectedSort: store.books.selectedSort
});

const mapDispatchToProps: MapDispatchMainProps = {
    getAllBooks,
    sortBooks
};

export default connect<MapStateMainProps, MapDispatchMainProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(Main);