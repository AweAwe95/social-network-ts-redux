import {connect} from "react-redux";
import { Users } from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {DispatchType, RootStateType} from "../../redux/redux-store";


let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPageData.users

    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)