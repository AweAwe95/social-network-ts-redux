import { connect } from "react-redux";
import {DispatchType, RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, userType } from "../../redux/users-reducer";
import {Users} from "./Users";

type MapStatePropsType = {
    users: userType[]
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPageData.users
    }
}
const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: userType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)