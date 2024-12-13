import React from "react";
import "./ExistingMember.scss";

function ExistingMember() {
  return (
    <div className="existingMemberPage">
      <h1 className="existingMemberPage__title">Welcome Back, Existing Member! 🎄</h1>
      <p className="existingMemberPage__details">
        You're all set for the Christmas Party! 🎉 Here are all the details:
        {/* Add party details or whatever info you'd like */}
      </p>
    </div>
  );
}

export default ExistingMember;
