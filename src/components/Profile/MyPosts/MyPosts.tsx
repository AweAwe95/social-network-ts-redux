import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts() {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            <Post message={'Hi'} likeCounter={6}/>
            <Post message={'Bye'} likeCounter={7}/>
            <Post message={'How old are you?'} likeCounter={10}/>
        </div>
    </div>;
}