import React from "react";
import q from './Users.module.css'
import axios from "axios";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
}
type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}
type PhotosType = {
    small: string,
    large: string
}
type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPageType> {

    componentDidMount() {
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(page => {
                        const onClickHandler = () => {
                            this.onPageChanged(page)
                        }
                        return <span onClick={onClickHandler} className={(page === this.props.currentPage) ? q.selectedPage : ""}>{page} </span>
                    })}
                </div>
                {this.props.users.map(u => <div>
                <span>
                    <div className={q.item}>
                        <img
                            src={u.photos.small != null ? u.photos.small : "https://static.wikia.nocookie.net/drebedenboi/images/5/5c/%D0%9F%D0%B0%D1%85%D0%BE%D0%BC2.jpg/revision/latest?cb=20180314173639&path-prefix=ru"}
                            alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                this.props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                    </div>
                )
                }
            </div>
        )
    }
}
