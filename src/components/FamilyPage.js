
// FamilyPage.js (Template for family pages)
import React from "react";
import "./FamilyPage.scss";
import { Link } from "react-router-dom";

function FamilyPage({ familyName, members }) {
  return (
    <div className="familyPage">
      <h1 className="familyPage__title">Welcome to the {familyName} Family! 🎉</h1>
      <div className="familyPage__members">
        {members.map((member, index) => (
          <div className="memberCard" key={index}>
            <img src={member.image} alt={member.name} className="memberCard__image" />
            <h2 className="memberCard__name">{member.name}</h2>
            <ul className="memberCard__bio">
              {member.bio.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/existing-member" className="backToFamilyButton">🔙 Back to Family List</Link>
    </div>
  );
}

export default FamilyPage;
