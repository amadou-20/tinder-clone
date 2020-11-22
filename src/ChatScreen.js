import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';



function ChatScreen() {
const [input, setInput] = useState('')
const [messages, setMessages] = useState([

    {
      name: "Hellen",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8313CXXx7wwYvqqL0gbMuSqE8gAawHL5-tA&usqp=CAU",
      message: "what's up...🐅",
    },

    {
        name: "Hellen",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8313CXXx7wwYvqqL0gbMuSqE8gAawHL5-tA&usqp=CAU",
     message: "hey how it's going",
      },

      { 
        message: "Hi! how are you Hellen",
      },
]);

    const handleSend = (e) => {
      e.preventDefault();

      setMessages([...messages, {message: input}]);
      setInput("");
    };   

    return (
        <div className="chatScreen">

         <p className="chatScreen_timestamp">YOU MATCHED WITH HELLEN ON 10/08/2020</p>

         {messages.map((message) =>
         message.name ? ( 
         <div className="chatScreen_message">
             <Avatar 
             className="chatScreen_image"
             alt={message.name}
             src={message.image}
             />
           <p className="chatScreen_text">{message.message}</p>
         </div>
          ) : ( 
            <div className="chatScreen_message">
             <p className="chatScreen_textUser">{message.message}</p>
            </div>
          )
         )}

              <form className="chatScreen_input">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  type="text" 
                  placeholder="type a message..."
                  className="chatScreen_inputField"
                />
                <button
                  onClick={handleSend} 
                  className="chatScreen_inputButton"
                  type="submit">SEND
                </button>
              </form>
      </div>
      );
    }


export default ChatScreen;