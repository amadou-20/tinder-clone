import React from "react";
import "./Chats.css";
import { BrowserRouter as Router,Switch,Route,Link,Chat} from "react-router-dom";
   

function Chats(){

    return (
      <div className="chats">
         <Chat 
            name="jacob"
            message="hey! how are you doig 😊"
            timestamp="35 minutes ago"
            profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFWTuTV6zMPZOavcbYurysN1De0Pqs1-TQQ&usqp=CAU"
          />

          <Chat 
            name="hellen"
            message="what's up guys...🚴🏻"
            timestamp="10 minutes ago"
            profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFr9A9NvRZUm3sx9qEbNBGgFmN7zUgB8e49Q&usqp=CAU"
          />

          <Chat 
            name="sandra"
            message= "I am good and you?"
            timestamp= "3 days ago"
            profilepic= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWqEupPuGPikwCGHcguXcPIt8Vyd9AzK-3Q&usqp=CAU"
            />

          <Chat 
            name= "natasha"
            message= "hey! how are you doig"
            timestamp= "1 week ago"
            profilepic= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJNiHweHueNNJgdhxpZcP7JGOfaVnvF80Bw&usqp=CAU"
          />
      </div>
    );
}


export default Chats;