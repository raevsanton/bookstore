import { getOneBook } from './../store/actions/books';
import { removeOneBook } from '../store/actions/books';
import { connect } from "react-redux";
import BookPage from "../components/BookPage/BookPage";
import { AppStateType } from "../store/reducers";
import {
    MapDispatchBookPageProps,
    MapStateToPropsBookPage
} from "../components/BookPage/BookPageTypes";

const mapStateToProps = (store: AppStateType): MapStateToPropsBookPage => ({
    books: store.books.books,
    book: store.books.book,
    darkMode: store.darkMode.darkMode,
    isError: store.books.isError,
    isLoading: store.books.isLoading
})

const mapDispatchToProps: MapDispatchBookPageProps = {
    removeOneBook,
    getOneBook
};

export default connect<MapStateToPropsBookPage, MapDispatchBookPageProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(BookPage);