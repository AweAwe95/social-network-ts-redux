import {Users} from "./Users";
import {UserType} from "../../redux/users-reducer";
import React from "react";


type UsersAPIComponentType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            (this.props.isFetching)
                ? <img src="https://acegif.com/wp-content/uploads/loading-25.gif" alt=""/>
                : <Users users={this.props.users}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         followingInProgress={this.props.followingInProgress}
                         followUser={this.props.followUser}
                         unfollowUser={this.props.unfollowUser}
                />

        )
    }
}