import {useState} from "react";

type ProfileStatusPropsType = {
    status: string
}

export function ProfileStatus(props: ProfileStatusPropsType) {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState('My Status')
    return (
        <div>
            {
                editMode
                    ? <input
                        autoFocus
                        onBlur={() => setEditMode(false)}
                        value={status}
                        onChange={e => setStatus(e.currentTarget.value)}
                    />
                    : <span onDoubleClick={() => setEditMode(true)}>{status}</span>
            }
        </div>
    )
}