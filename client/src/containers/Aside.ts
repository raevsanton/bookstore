import { connect } from "react-redux";
import { AppStateType } from "../store/reducers";
import Aside from "../components/Aside/Aside";
import { MapStateToPropsAside } from "../components/Aside/AsideTypes";

const mapStateToProps = (store: AppStateType): MapStateToPropsAside => ({
    booksInCart: store.cart.booksInCart,
    firstName: store.profile.firstName,
    lastName: store.profile.lastName,
    darkMode: store.darkMode.darkMode,
})

export default connect<MapStateToPropsAside, {}, {}, AppStateType>(
    mapStateToProps,
    {}
)(Aside);