import p from "../Profile.module.css";

export function ProfileInfo() {
    return (
        <>
            <div>
                <img src="https://gamemag.ru/images/cache/Reviews/Reviews1726/92f0dfdd74-2_1390x600.jpg"
                     className={p.profilePageImg} alt=""/>
            </div>
            <div>Avatar + description</div>
        </>
    )
}