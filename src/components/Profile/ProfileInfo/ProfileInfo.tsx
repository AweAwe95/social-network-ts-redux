import p from "../Profile.module.css";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import {ProfileServerType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: null | ProfileServerType
    status: string
    updateUserStatus: (status: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <>
            <div>
                <img src="https://gamemag.ru/images/cache/Reviews/Reviews1726/92f0dfdd74-2_1390x600.jpg"
                     className={p.profilePageImg} alt=""/>
            </div>
            <div>
                <img src={props.profile?.photos.small ? props.profile.photos.small: ''} alt=""/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </>
    )
}