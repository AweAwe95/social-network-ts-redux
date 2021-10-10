import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPageDataType, ProfilePageAT} from '../../redux/profile-reducer';

type ProfilePropsType = {
    postsPageData: PostsPageDataType
    dispatch: (action: ProfilePageAT) => void
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