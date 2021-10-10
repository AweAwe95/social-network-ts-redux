import {addPostAC, changeNewPostTextAC, PostType, ProfilePageAT} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ProfilePageAT) => void
}

export function MyPostsContainer(props: MyPostsPropsType) {

    const textAreaHandler = (newText: string) => {
        props.dispatch(changeNewPostTextAC(newText))
    }
    const addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(changeNewPostTextAC(''))
    }

    return <MyPosts posts={props.posts}
                    newPostText={props.newPostText}
                    addPost={addPost}
                    textAreaHandler={textAreaHandler}
    />
}