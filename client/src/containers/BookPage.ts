import { connect } from "react-redux";
import { addBookToCart, removeBookFromCart } from "../store/actions/cart";
import BookPage from "../components/BookPage/BookPage";
import { AppStateType } from "../store/reducers";
import {
    MapDispatchBookPageProps,
    MapStateToPropsBookPage
} from "../components/BookPage/BookPageTypes";
import { getOneBookById } from "../store/actions/books";

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

export default connect<MapStateToPropsBookPage, MapDispatchBookPageProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(BookPage);