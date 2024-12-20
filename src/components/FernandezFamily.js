// FernandezFamily.js
import React from "react";
import { Link } from "react-router-dom";
import "./FamilyPage.scss";

import ronnie from "../assets/ronnie.jpg"
import carolina from "../assets/carolina.jpg"
function FernandezFamily() {
  const familyMembers = [

    { name: "Ronnie",
       img: ronnie,
        bio: ["💪 Gym enthusiast", "🎸 Rock music fan"] },
    { name: 
      "Carolina", 
      img: carolina, 
      bio: ["🍳 Master chef at home", "🧘 Yoga practitioner"] },
  ];

  return (
    <div className="familyPage">
      <header className="familyPage__header">
        <h1 className="familyPage__title">Meet the Fernandez Family! 🎉</h1>
        <p className="familyPage__subtitle">Where love, laughter, and unforgettable moments come together! Tap on each frame to learn more.</p>
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

export default FernandezFamily;
