type MessageType = {
    message: string
}

export function Message(props:MessageType) {
    return(
        <div>{props.message}</div>
    )
}