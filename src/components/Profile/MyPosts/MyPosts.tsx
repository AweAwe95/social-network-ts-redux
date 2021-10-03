import { PostType } from "../../../redux/state";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {useState} from "react";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newPostText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    const [newPostText, setNewPostText] = useState('')
    const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostText(e.currentTarget.value)
    }
    const addPost = () => {
        props.addPost(newPostText)
        setNewPostText('')
    }

    return <div>
        My posts
        <div>
            <textarea onChange={textAreaHandler} value={newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={m.posts}>
            {props.posts.map(p => <Post post={p.post} likeCounter={p.likeCounter}/>)}
        </div>
    </div>;
}