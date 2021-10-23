import React from "react"
import { connect } from "react-redux"
import { Header } from "./Header"
import {RootStateType} from "../../redux/redux-store";
import {authUserThunkCreator} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUserData: () => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

};

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{setUserData: authUserThunkCreator}) (HeaderContainer)