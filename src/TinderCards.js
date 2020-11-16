
import react, {useEffect, useState} from "react";
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import database from "./firebase";


function TinderCards () {

    const [people, setPeople] = useState([

      {
        name: "steve jobs",
        age: 56,
        url:  "data:image/jpeg;base64,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",
      },
      {
       name: "mark zuckerberg",
       age: 36,
       url:  "https://static.lexpress.fr/medias_12011/w_2048,h_1146,c_crop,x_0,y_0/w_480,h_270,c_fill,g_north/v1557503570/le-patron-fondateur-de-facebook-mark-zuckerberg-a-l-elysee-pour-une-reunion-avec-le-president-francais-le-23-mai-2018_6149994.jpg",
      },
      
      {
        name: "Joe bidden",
        age: 70,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwRDXkYVhVOcsEwlwGiTcXimO6DNxncj2Qlw&usqp=CAU"
      }
       
    ]);

    useEffect(() => { 

  database
  .collection("people")
  .onSnapshot((snapshot) => 
    setPeople(snapshot.docs.map((doc) => doc.data()))
  ); 
}, []);
    

    return (
    <div>
      <h1>Tinder cards</h1>
      <div className="tindercards_cardcontainer">

      {people.map((person) => (
          <TinderCard
          key={person.name}
          className="swipe"
          preventSwipe = {['up', 'down']}
          > 

          <div style = {{backgroundImage: `url(${person.url})`}}
          className="card"
          >
          <h3> {person.name}, {person.age} </h3>
          </div>
          </TinderCard>
      ))}
      </div>
    </div>
    );
}

export default TinderCards;