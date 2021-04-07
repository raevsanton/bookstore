import {removeBookFromCart} from "../store/actions/cart";
import {connect} from "react-redux";
import Cart from "../components/Cart/Cart";
import {AppStateType} from "../store/reducers";
import {MapDispatchCartProps, MapStateCartProps} from "../components/Cart/CartTypes";

const mapStateToProps = (store: AppStateType): MapStateCartProps => ({
    totalPrice: store.cart.totalPrice,
    booksInCart: store.cart.booksInCart
});

const mapDispatchToProps: MapDispatchCartProps = {
    removeBookFromCart
};

export default connect<MapStateCartProps, MapDispatchCartProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(Cart);