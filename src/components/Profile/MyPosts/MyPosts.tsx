import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    textAreaHandler: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.textAreaHandler(e.currentTarget.value)
    }
    const addPost = () => {
        props.addPost()
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