import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPageDataType, ProfilePageAT} from '../../redux/profile-reducer';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    postsPageData: PostsPageDataType
    dispatch: (action: ProfilePageAT) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPostsContainer posts={props.postsPageData.postsData} newPostText={props.postsPageData.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}