import React from 'react'

export default function Chat() {
    const messages = [ {sender: "Leia", body: "I love you", time: "14:57"}, {sender: "Han", body: "I know.", time: "15:01"} ]
    const renderMessages = messages.map(m => <div><span>{m.sender} : {m.time}</span>{m.body}</div>)
    return (
        <div id="chatbox">
            <div id="messages">
                { renderMessages }
            </div>
            <div id="input">
                <input type="text"/>
            </div>
        </div>
    )
}
