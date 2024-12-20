// ReascosFamily.js
import React from "react";
import { Link } from "react-router-dom";
import "./ReascosFamily.scss";
import "./FamilyPage.scss";

import kimbo from "../assets/kimberly.jpg"
import pascual from "../assets/pascual.jpg"
import pepe_2 from "../assets/pepe_2.jpeg"
import andrew from "../assets/andrew.jpg"
import poleth from "../assets/poleth.jpg"
import grace from "../assets/grace.jpg"

function ReascosFamily() {
  const familyMembers = [
    { name: "Raul", img: pascual, bio: ["🛠️ DIY project master", "🍕 Pizza lover extraordinaire"] ,specialClass: "pascual-img"},
    { name: "Grace", img: grace, bio: ["🧵 Skilled seamstress", "🌻 Garden enthusiast"] ,specialClass: "grace-img"},
    { name: "Poleth", img: poleth, bio: ["🎓 Academic powerhouse", "🎨 Aspiring digital artist"],specialClass: "poleth-img" },
    { name: "Kimberly", img: kimbo, bio: ["🎤 Karaoke queen", "📸 Selfie expert"] ,specialClass: "kimbo-img"},
    { name: "Andrew", img: andrew, bio: ["🚀 Space enthusiast", "🎮 Video game strategist"] ,specialClass: "andrew-img"},
    { name: "Dogs", img: pepe_2, bio: ["🐕 Professional ball chasers", "🦴 Treat connoisseurs"],specialClass: "pepe-img" },
  ];

  return (
    <div className="familyPage">
      <header className="familyPage__header">
        <h1 className="familyPage__title">Meet the Reascos Family! 🏡</h1>
        <p className="familyPage__subtitle">A family filled with talent, heart, and a lot of love for their furry friends! Tap on each frame to learn more.</p>
      </header>

      <div className="familyPage__photos">
        {familyMembers.map((member, index) => (
          <div className="familyPage__member" key={index}>
            <div className="familyPage__photoFrame">
              <img src={member.img} alt={member.name} 
              // className="familyPage__photo" 
              className={`familyPage__photo ${member.specialClass || ''}`}/>
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

export default ReascosFamily;
