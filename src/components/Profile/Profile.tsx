import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={p.content}>
            <div>
                <img src="https://gamemag.ru/images/cache/Reviews/Reviews1726/92f0dfdd74-2_1390x600.jpg"
                     className={p.profilePageImg} alt=""/>
            </div>
            <div>Avatar + description</div>
            <MyPosts/>
        </div>
    )
}