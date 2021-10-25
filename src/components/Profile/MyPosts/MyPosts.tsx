import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfileInitialStateType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postsPageData: ProfileInitialStateType
    addPost: () => void
    changeNewPostText: (newPost: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostText(e.currentTarget.value)
    }
    const addPost = () => {
        props.addPost()
    }

    return <div>
        My posts
        <div>
            <textarea onChange={textAreaHandler} value={props.postsPageData.newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={m.posts}>
            {props.postsPageData.postsData.map(p => <Post post={p.post} likeCounter={p.likeCounter}/>)}
        </div>
    </div>;
}