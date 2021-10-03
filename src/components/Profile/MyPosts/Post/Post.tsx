import p from "./Post.module.css";

type PostPropsType = {
    post: string
    likeCounter: number
}

export function Post(props: PostPropsType) {
    return <div className={p.item}>
        <div>
            <img src="https://assets.vg247.com/current//2017/06/forza_7_header_2.jpg" alt=""/>
            {props.post}
        </div>
        <span>{props.likeCounter}</span>
    </div>;
}