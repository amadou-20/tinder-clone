import React from "react";
import "./chat.css";
import Avatar from '@material-ui/core/Avatar';

function Chat({name,message,timestamp,profilepic}){


    return (
        <div className="chat">
            <Avatar className="chat_image" src={profilepic} /> 

            <div className="chat_details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            
                <p className="chat_times">{timestamp}</p>
        </div>
    );
}



 export default Chat;