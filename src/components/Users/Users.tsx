import React from "react";
import {NavLink} from "react-router-dom";
import q from './Users.module.css'

type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
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

export function Users(props: UsersPageType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    const onClickHandler = () => {
                        props.onPageChanged(page)
                    }
                    return <span onClick={onClickHandler}
                                 className={(page === props.currentPage) ? q.selectedPage : ""}>{page} </span>
                })}
            </div>
            {props.users.map(u => <div>
                <span>
                    <div className={q.item}>
                        <NavLink to={'profile/' + u.id}>
                        <img
                            src={u.photos.small != null ? u.photos.small : "https://static.wikia.nocookie.net/drebedenboi/images/5/5c/%D0%9F%D0%B0%D1%85%D0%BE%D0%BC2.jpg/revision/latest?cb=20180314173639&path-prefix=ru"}
                            alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollowUser(u.id)
                            }}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followUser(u.id)
                            }
                            }>follow</button>}
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
