import {connect} from "react-redux";
import Header from "../components/Header/Header";
import {AppStateType} from "../reducers";
import {MapStateHeaderProps} from "../components/Header/HeaderTypes";

const mapStateToProps = (store: AppStateType): MapStateHeaderProps => ({
    totalPrice: store.cart.totalPrice,
    booksInCart: store.cart.booksInCart
});

export default connect<MapStateHeaderProps,{},{},AppStateType>(
    mapStateToProps
)(Header);