import {connect} from "react-redux";
import {addBookToCart, removeBookFromCart} from "../actions/cart";
import ItemBook from "../components/ItemBook/ItemBook";
import {AppStateType} from "../reducers";
import {
    MapDispatchItemBookProps,
    OwnItemBookProps
} from "../components/ItemBook/ItemBookTypes";

const mapDispatchToProps: MapDispatchItemBookProps = {
    addBookToCart,
    removeBookFromCart
};

export default connect<{}, MapDispatchItemBookProps, OwnItemBookProps, AppStateType>(
    null,
    mapDispatchToProps
)(ItemBook);