import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {RootStateType} from "../../redux/redux-store"
import {Profile} from "./Profile"
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, ProfileServerType,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: null | ProfileServerType
    status: string
}


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 17910
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.postsPageData.profile,
        status: state.postsPageData.status,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getUserProfile: getUserProfileThunkCreator,
            getUserStatus: getUserStatusThunkCreator,
            updateUserStatus: updateUserStatusThunkCreator
        }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
