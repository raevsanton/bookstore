import { getAllBooks, sortBooks } from "../store/actions/books";
import { connect } from "react-redux";
import { AppStateType } from "../store/reducers";
import { MapDispatchMainProps, MapStateMainProps } from "../components/Main/MainTypes";
import Main from "../components/Main/Main";

const mapStateToProps = (store: AppStateType): MapStateMainProps => ({
    books: store.books.books,
    loadingBooks: store.books.loadingBooks,
    error: store.books.error,
    darkMode: store.darkMode.darkMode
});

const mapDispatchToProps: MapDispatchMainProps = {
    getAllBooks,
    sortBooks
};

export default connect<MapStateMainProps, MapDispatchMainProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(Main);