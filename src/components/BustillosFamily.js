// BustillosFamily.js
import React from "react";
import { Link } from "react-router-dom";
import "./FamilyPage.scss";
import "./BustillosFamily.scss";
import ivan from "../assets/ivan.jpeg";
import lorena from "../assets/lorena.jpg";
import alison from "../assets/alison.jpg"
import georgie from "../assets/georgie.jpg"

function BustillosFamily() {
  const familyMembers = [
    { name: "Ivan", img: ivan, bio: ["⚽ Football enthusiast", "🍔 Grill master"] },
    { name: "Lorena", img: lorena, bio: ["🎨 Creative artist", "☕ Coffee connoisseur"] ,specialClass: "lorena-img" },
    { name: "Alison", img: alison, bio: ["🎮 Video game champion", "🎉 Life of the party"] ,specialClass: "alison-img"},
    { name: "Melanie", img:alison, bio: ["📚 Avid reader", "🎵 Music playlist curator"],specialClass: "mela-img" },
    { name: "Georgie,Rosie,Mily", img: georgie, bio: ["📚 Avid reader", "🎵 Music playlist curator"] },
  
];

  return (
    <div className="familyPage">
      <header className="familyPage__header">
        <h1 className="familyPage__title">Meet the Bustillos Family! 🎉</h1>
        <p className="familyPage__subtitle">The family full of heart, humor, and holiday magic! Tap on each frame to learn more.</p>
      </header>

      <div className="familyPage__photos">
        {familyMembers.map((member, index) => (
          <div className="familyPage__member" key={index}>
            <div className="familyPage__photoFrame">
              <img src={member.img} alt={member.name} 
            className={`familyPage__photo ${member.specialClass || ''}`} // Correct syntax for applying the special class

               />
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

export default BustillosFamily;

