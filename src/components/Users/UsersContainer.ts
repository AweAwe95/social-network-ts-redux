import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setFollowingInProgressAC,
    setIsFetchingAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";
import {UsersAPIComponent} from "./UsersAPIComponent";


let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPageData.users,
        pageSize: state.usersPageData.pageSize,
        totalUsersCount: state.usersPageData.totalUsersCount,
        currentPage: state.usersPageData.currentPage,
        isFetching: state.usersPageData.isFetching,
        followingInProgress: state.usersPageData.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//
//     }
// }

export const UsersContainer = connect(mapStateToProps,
    {
        follow: followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalCountAC,
        setIsFetching: setIsFetchingAC,
        setFollowingInProgress: setFollowingInProgressAC
    }
)(UsersAPIComponent)