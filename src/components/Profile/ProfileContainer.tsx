import axios from "axios"
import React from "react"
import {connect} from "react-redux"
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer"
import {DispatchType, RootStateType} from "../../redux/redux-store"
import {Profile} from "./Profile"

type ProfileAPIComponentType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileAPIComponent extends React.Component<any> {

    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.postsPageData.profile
    }
}
export const ProfileContainer = connect(mapStateToProps, {setUserProfile:setUserProfileAC})(ProfileAPIComponent)