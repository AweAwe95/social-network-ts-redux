import {Users} from "./Users";
import {UserType} from "../../redux/users-reducer";
import React from "react";
import {usersAPI} from "../../api/api";


type UsersAPIComponentType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setFollowingInProgress: (isFetching: boolean, userId: number) => void
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentType> {

    componentDidMount() {
        this.props.setIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setTotalUsersCount(response.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.items)
        })
    }

    render() {

        return (
            (this.props.isFetching)
                ? <img src="https://acegif.com/wp-content/uploads/loading-25.gif" alt=""/>
                : <Users users={this.props.users}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}
                         currentPage={this.props.currentPage}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         onPageChanged={this.onPageChanged}
                         followingInProgress={this.props.followingInProgress}
                         setFollowingInProgress={this.props.setFollowingInProgress}
                />

        )
    }
}