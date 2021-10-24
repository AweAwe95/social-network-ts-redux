import p from "../Profile.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: null | ProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <>
            <div>
                <img src="https://gamemag.ru/images/cache/Reviews/Reviews1726/92f0dfdd74-2_1390x600.jpg"
                     className={p.profilePageImg} alt=""/>
            </div>
            <div>
                <img src={props.profile?.photos.small} alt=""/>
                <ProfileStatus status={'Hello my friends'}/>
            </div>
        </>
    )
}