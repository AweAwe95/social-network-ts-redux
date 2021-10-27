import {
    addPostAC, ProfileInitialStateType,
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../../redux/redux-store";


type MapStateToPropsType = {
    postsPageData: ProfileInitialStateType
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        postsPageData: state.postsPageData
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: (post: string) => {
            dispatch(addPostAC(post))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)