import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfilePropsType = {
    posts: PostType[]
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}