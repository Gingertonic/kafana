import React from 'react'
import { MessageBubble } from './'

export default function Chat() {
    const messages = [ {sender: "Leia", body: "I love you", time: "14:57"}, {sender: "Han", body: "I know.", time: "15:01", id: 1} ]
    const renderMessages = messages.map(m => <MessageBubble message={m} />)

    const styles = { height: "70vh", width: "50vw", margin: "0 auto", border: "1px solid red", padding: "5%" }

    return (
        <div id="chatbox" style={styles}>
            <div id="messages" style={{display: "flex", flexDirection: "column", width: "100%", height: "90%"}}>
                { renderMessages }
            </div>
            <div id="input" style={{ width: "100%", height: "5%"}}>
                <input type="text" style={{ width: "80%", height: "100%", fontSize: "1rem", paddingLeft: "1rem"}}/>
                <span style={{  width: "20%" }}> 🍵</span>
            </div>
        </div>
    )
}
