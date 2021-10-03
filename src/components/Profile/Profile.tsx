import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPageDataType} from "../../redux/state";

type ProfilePropsType = {
    postsPageData: PostsPageDataType
    addPost: (newPostText: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts posts={props.postsPageData.postsData} addPost={props.addPost}/>
        </div>
    )
}