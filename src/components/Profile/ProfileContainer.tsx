import axios from "axios"
import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer"
import {RootStateType} from "../../redux/redux-store"
import {Profile} from "./Profile"


export class ProfileAPIComponent extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
export const ProfileContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataProfileAPIComponent)