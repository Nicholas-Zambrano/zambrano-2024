// NacatosFamily.js
import React from "react";
import { Link } from "react-router-dom";
import "./FamilyPage.scss";

import andres_dogs from "../assets/andres_dogs.jpg"
import andres from "../assets/andres.jpg"
import gina from "../assets/gina.jpg"

function NacatosFamily() {
  const familyMembers = [
    { 
      name: "Gina", 
      img: gina, 
      bio: ["🌿 Plant lover", "🍰 Dessert master"] 
    },
    { 
      name: "Andres", 
      img: andres, 
      bio: ["⚙️ Engineering whiz", "🎸 Guitar enthusiast"] 
    },
    { 
      name: "Dogs", 
      img: andres_dogs, 
      bio: ["🐾 Professional cuddle experts", "🎾 Ball chasing champions"] 
    }
  ];

  return (
    <div className="familyPage">
      <header className="familyPage__header">
        <h1 className="familyPage__title">Meet the Nacatos Family! 🎉</h1>
        <p className="familyPage__subtitle">A family of heart, humor, and holiday magic! Tap on each frame to learn more.</p>
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

export default NacatosFamily;
