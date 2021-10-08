import {ActionTypes, addPostAC, changeNewPostTextAC, PostType} from "../../../redux/state";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

export function MyPosts(props: MyPostsPropsType) {
    const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewPostTextAC(e.currentTarget.value))
    }
    const addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(changeNewPostTextAC(''))
    }

    return <div>
        My posts
        <div>
            <textarea onChange={textAreaHandler} value={props.newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={m.posts}>
            {props.posts.map(p => <Post post={p.post} likeCounter={p.likeCounter}/>)}
        </div>
    </div>;
}