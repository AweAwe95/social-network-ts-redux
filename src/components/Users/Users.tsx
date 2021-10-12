import s from './users.module.css'
import { FC } from "react";
import {UsersPropsType} from "./UsersContainer";


export const Users: FC<UsersPropsType> = ({users, follow, setUsers, unFollow,}) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                imgUrl: 'https://ih1.redbubble.net/image.1071702879.9162/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u1.jpg',
                follow: true,
                name: 'Valentine',
                location: {city: 'Minsk', country: 'Belarus'},
                status: 'Looking for a job '
            },
            {
                id: 2,
                imgUrl: 'https://ih1.redbubble.net/image.1071702879.9162/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u1.jpg',
                follow: false,
                name: 'Ivan',
                location: {city: 'Moscow', country: 'Russia'},
                status: 'Looking for a job '
            },
            {
                id: 3,
                imgUrl: 'https://ih1.redbubble.net/image.1071702879.9162/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u1.jpg',
                follow: true,
                name: 'Kummer',
                location: {city: 'Chemnitz ', country: 'Germany'},
                status: 'Looking for a job '
            },
            {
                id: 4,
                imgUrl: 'https://ih1.redbubble.net/image.1071702879.9162/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u1.jpg',
                follow: true,
                name: 'Natalia',
                location: {city: 'Minsk', country: 'Belarus'},
                status: 'Looking for a job '
            },
        ])
    }

    const usersMap = users.map(user => {
        return (
            <div key={user.id}>
                <img className={s.avatar} src={user.imgUrl} alt='photo'/>
                <div>
                    {user.follow
                        ? <button onClick={() => follow(user.id)}>Follow</button>
                        : <button onClick={() => unFollow(user.id)}>Unfollow</button>}
                </div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
            </div>
        )
    })
    return (
        <div>
            {usersMap}
        </div>
    );
};
