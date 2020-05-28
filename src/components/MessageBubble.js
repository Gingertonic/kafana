import React from 'react'

export default function MessageBubble({ message: { id, sender, body, time } }) {
    const styles = { 
        maxWidth: "50%", backgroundColor: "red", color: "white", 
        padding: "1rem", borderRadius: "5px", margin: "1rem",
        alignSelf: `${id ? "flex-end" : "flex-start"}`, textAlign: `${id ? "right" : "left"}`}
    return (
        <div style={styles}>
            <span>{sender} : {time}</span>
            <div>{body}</div>
        </div>
    )
}
