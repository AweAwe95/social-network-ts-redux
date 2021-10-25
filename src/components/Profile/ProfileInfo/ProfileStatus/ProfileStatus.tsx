import {useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export function ProfileStatus(props: ProfileStatusPropsType) {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    return (
        <div>
            {
                editMode
                    ? <input
                        autoFocus
                        onBlur={() => {
                            props.updateUserStatus(status)
                            setEditMode(false)
                        }}
                        value={status}
                        onChange={e => setStatus(e.currentTarget.value)}
                    />
                    : <span onDoubleClick={() => setEditMode(true)}>{status ? status : 'No Status'}</span>
            }
        </div>
    )
}