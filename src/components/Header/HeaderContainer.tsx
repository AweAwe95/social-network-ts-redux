import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { Header } from "./Header"
import {RootStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUserData: (userId:number,login:string,email:string) => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then(resp => {
                if(resp.data.resultCode === 0) {
                    let {id, email, login} = resp.data.data
                    this.props.setUserData(id, email, login)
                }
            })
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
export default connect(mapStateToProps,{setUserData: setAuthUserDataAC}) (HeaderContainer)