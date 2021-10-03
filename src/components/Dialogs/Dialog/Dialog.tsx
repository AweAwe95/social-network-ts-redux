import { NavLink } from "react-router-dom"

type DialogType = {
    name: string
    id: number
}

export function Dialog(props: DialogType) {
    return(
        <div>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}