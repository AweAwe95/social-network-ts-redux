import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPageDataType} from "../../redux/state";

type ProfilePropsType = {
    postsPageData: PostsPageDataType
    addPost: () => void
    changeNewPostText: (newPostText: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts posts={props.postsPageData.postsData} newPostText={props.postsPageData.newPostText}
                     addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
        </div>
    )
}