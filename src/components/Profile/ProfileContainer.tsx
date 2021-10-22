import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {RootStateType} from "../../redux/redux-store"
import {Profile} from "./Profile"
import {getUserProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";


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


type MapStateToPropsType = {
    profile: ProfileType | null
}

let WithUrlDataProfileAPIComponent = withRouter(ProfileAPIComponent)
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.postsPageData.profile
    }
}
export const ProfileContainer = connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(WithUrlDataProfileAPIComponent)