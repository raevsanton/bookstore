import {connect} from "react-redux";
import {addBookToCart, removeBookFromCart} from "../actions/cart";
import BookPage from "../components/BookPage/BookPage";
import {AppStateType} from "../reducers";
import {
    MapDispatchBookPageProps,
    OwnBookPageProps,
    MapStateToPropsBookPage
} from "../components/BookPage/BookPageTypes";

const mapStateToProps = (store: AppStateType): MapStateToPropsBookPage => ({
    booksInCart: store.cart.booksInCart
})


const mapDispatchToProps: MapDispatchBookPageProps = {
    addBookToCart,
    removeBookFromCart
};

export default connect<MapStateToPropsBookPage, MapDispatchBookPageProps, OwnBookPageProps, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(BookPage);