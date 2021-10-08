import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsPageDataType} from "../../redux/state";

type ProfilePropsType = {
    postsPageData: PostsPageDataType
    dispatch: (action: ActionTypes) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts posts={props.postsPageData.postsData} newPostText={props.postsPageData.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}