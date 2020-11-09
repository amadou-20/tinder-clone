
import react, {useState} from "react";
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'


function TinderCards () {

    const [people, setPeople] = useState([
       {
         name: "steve jobs",
         url:  "https://cdn.pixabay.com/photo/2015/11/18/20/03/steve-jobs-1049872_960_720.jpg",
       },
       {
        name: "mark zuckerberg",
        url:  "https://images.pexels.com/photos/876613/pexels-photo-876613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       },
    ]);

    return (
    <div>
      <h1>tinder cards</h1>

      {people.map((person) => (
          <TinderCard
          key={person.name}
          className="swipe"
          preventSwipe = {['up', 'down']}
          > 

          <div style = {{backgroundImage: `url(${person.url})`}}
          className="card"
          >
          <h3>{person.name}</h3>
          </div>

          </TinderCard>
      ))}
    </div>
    );
}

export default TinderCards;