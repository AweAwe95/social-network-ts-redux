import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileServerType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: null | ProfileServerType
    status: string
    updateUserStatus: (status: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}