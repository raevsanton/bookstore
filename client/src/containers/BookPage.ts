import { connect } from "react-redux";
import { addBookToCart, removeBookFromCart } from "../actions/cart";
import BookPage from "../components/BookPage/BookPage";
import { AppStateType } from "../reducers";
import {
    MapDispatchBookPageProps,
    OwnBookPageProps,
    MapStateToPropsBookPage
} from "../components/BookPage/BookPageTypes";
import { getOneBookById } from "../actions/books";

const mapStateToProps = (store: AppStateType): MapStateToPropsBookPage => ({
    booksInCart: store.cart.booksInCart,
    oneBook: store.books.oneBook,
    loadingBooks: store.books.loadingBooks,
})

const mapDispatchToProps: MapDispatchBookPageProps = {
    addBookToCart,
    removeBookFromCart,
    getOneBookById,
};

export default connect<MapStateToPropsBookPage, MapDispatchBookPageProps, OwnBookPageProps, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(BookPage);