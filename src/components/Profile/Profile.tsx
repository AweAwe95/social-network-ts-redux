import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: null | ProfileType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}