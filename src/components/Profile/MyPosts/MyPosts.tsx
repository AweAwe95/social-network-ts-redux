import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts() {
    const postsData = [
        {id: 1, post: 'Hi', likeCounter: 6},
        {id: 2, post: 'Bye', likeCounter: 7},
        {id: 3, post: 'Hi', likeCounter: 10},
    ]

    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {postsData.map(p => <Post post={p.post} likeCounter={p.likeCounter}/>)}
        </div>
    </div>;
}