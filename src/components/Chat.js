import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import { MessageBubble } from './';

const socket = socketIOClient('http://localhost:5001/');

export default class Chat extends Component {

    state = {
        messages: [ {sender: "Leia", body: "I love you", time: "14:57"}, {sender: "Han", body: "I know.", time: "15:01", id: 1} ]
    }

    styles = { height: "70vh", width: "50vw", margin: "0 auto", padding: "5%" }

    renderMessages = this.states.messages.map(m => <MessageBubble message={m} />)

    render(){
        return (
            <div id="chatbox" style={this.styles}>
                <div id="messages" style={{display: "flex", flexDirection: "column", width: "100%", height: "90%"}}>
                    { this.renderMessages }
                </div>
                <div id="input" style={{ width: "100%", height: "5%"}}>
                    <input type="text" style={{ width: "80%", height: "100%", fontSize: "1rem", paddingLeft: "1rem"}}/>
                    <span style={{  width: "20%" }}> 🍵</span>
                </div>
            </div>
        )
    }

    
}
