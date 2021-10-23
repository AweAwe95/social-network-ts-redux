import React from "react"
import {connect} from "react-redux"
import {Redirect, withRouter} from "react-router-dom"
import {RootStateType} from "../../redux/redux-store"
import {Profile} from "./Profile"
import {getUserProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    profile: ProfileType | null
}


export class ProfileAPIComponent extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileAPIComponent)

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.postsPageData.profile,
    }
}
const WithUrlDataProfileAPIComponent = withRouter(AuthRedirectComponent)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(WithUrlDataProfileAPIComponent)