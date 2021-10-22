import {connect} from "react-redux";
import {
    followUserThunkCreator, getUsersThunkCreator,
    unfollowUserThunkCreator
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


export const UsersContainer = connect(mapStateToProps,
    {
        getUsers: getUsersThunkCreator,
        followUser: followUserThunkCreator,
        unfollowUser: unfollowUserThunkCreator

    }
)(UsersAPIComponent)