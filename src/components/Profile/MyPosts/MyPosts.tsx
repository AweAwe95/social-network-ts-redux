import { PostType } from "../../../redux/state";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    posts: PostType[]
}

export function MyPosts(props: MyPostsPropsType) {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {props.posts.map(p => <Post post={p.post} likeCounter={p.likeCounter}/>)}
        </div>
    </div>;
}