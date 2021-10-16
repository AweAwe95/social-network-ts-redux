import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {DispatchType, RootStateType} from "../../redux/redux-store";


let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPageData.users,
        pageSize: state.usersPageData.pageSize,
        totalUsersCount: state.usersPageData.totalUsersCount,
        currentPage: state.usersPageData.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)