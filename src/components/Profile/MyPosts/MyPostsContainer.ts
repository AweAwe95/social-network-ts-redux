import {
    addPostAC,
    changeNewPostTextAC, ProfileInitialStateType,
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../../redux/redux-store";


export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    postsPageData: ProfileInitialStateType
}
type MapDispatchToPropsType = {
    addPost: () => void
    changeNewPostText: (newMessage: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        postsPageData: state.postsPageData
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
            dispatch(changeNewPostTextAC(''))
        },
        changeNewPostText: (newPost: string) => {
            dispatch(changeNewPostTextAC(newPost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)