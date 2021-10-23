import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {ProfileAPIComponent} from "../components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (isAuth === false) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}