import React from "react";
import {NavLink} from "react-router-dom";
import q from './Users.module.css'
import axios from "axios";

type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
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
                            ? <button onClick={() => {
                                axios.delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true, headers: {
                                        "API-KEY": "18cf4179-dc7e-4539-86b2-8fc45bfe0004"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>unfollow</button>
                            : <button onClick={() => {
                                axios.post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true, headers: {
                                        "API-KEY": "18cf4179-dc7e-4539-86b2-8fc45bfe0004"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
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
