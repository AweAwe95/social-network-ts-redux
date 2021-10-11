import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}