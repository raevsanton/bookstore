import { getAllBooks } from "../store/actions/books";
import { connect } from "react-redux";
import { AppStateType } from "../store/reducers";
import { MapDispatchMainProps, MapStateMainProps } from "../components/Main/MainTypes";
import Main from "../components/Main/Main";

const mapStateToProps = (store: AppStateType): MapStateMainProps => ({
    books: store.books.books,
    isLoading: store.books.isLoading,
    isError: store.books.isError,
    darkMode: store.darkMode.darkMode
});

const mapDispatchToProps: MapDispatchMainProps = {
    getAllBooks,
};

export default connect<MapStateMainProps, MapDispatchMainProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(Main);