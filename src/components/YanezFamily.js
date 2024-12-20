

import React from "react";
import { Link } from "react-router-dom";
import "./FamilyPage.scss";
// import nico from "../assets/"
import nico from "../assets/nico.JPG";
import lily from "../assets/lily.jpg";
import steve from "../assets/steve.jpg"
import hercs from "../assets/hercs.jpg"
function YanezFamily() {
  const familyMembers = [
    { name: "Nicholas", img: nico, bio: ["🧑‍💻 Loves coding", "🎉 Champion of Christmas trivia"] },
    { name: "Liliana", img: lily, bio: ["🎁 Queen of gift wrapping", "🍰 Best dessert maker"] },
    { name: "Steven", img: steve, bio: ["🎸 Guitar hero", "🎶 Knows every Christmas song"] },
    { name: "Hercules", img: hercs, bio: ["🐾 House protector", "💤 Master of naps"] },
  ];

  return (
    <div className="familyPage">
      <header className="familyPage__header">
        <h1 className="familyPage__title">Meet the Yanez Family! 🎉</h1>
        <p className="familyPage__subtitle">The crew that makes Christmas unforgettable! Click on each photo to reveal their fun facts.</p>
      </header>

      <div className="familyPage__photos">
        {familyMembers.map((member, index) => (
          <div className="familyPage__member" key={index}>
            <div className="familyPage__photoFrame">
              <img src={member.img} alt={member.name} className="familyPage__photo" />
            </div>
            <h3 className="familyPage__name">{member.name}</h3>
            <ul className="familyPage__bio">
              {member.bio.map((fact, i) => (
                <li key={i} className="familyPage__fact">{fact}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/existing-member" className="backToFamilyButton">
        ⬅️ Back to Family Selection
      </Link>
    </div>
  );
}

export default YanezFamily;
