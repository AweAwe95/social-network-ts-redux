import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfileInitialStateType} from "../../../redux/profile-reducer";
import {AddItemForm} from "../../Forms/AddItemForm";

type MyPostsPropsType = {
    postsPageData: ProfileInitialStateType
    addPost: (post: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    const addPost = (post: string) => {
        props.addPost(post)
    }

    return <div>
        My posts
        <div>
            <AddItemForm addItem={addPost}/>
        </div>
        <div className={m.posts}>
            {props.postsPageData.postsData.map(p => <Post post={p.post} likeCounter={p.likeCounter}/>)}
        </div>
    </div>;
}