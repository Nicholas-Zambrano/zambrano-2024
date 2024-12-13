import React from "react";
import "./NewMember.scss";

function NewMember() {
  return (
    <div className="newMemberPage">
      <h1 className="newMemberPage__title">Welcome New Member! 🎉</h1>
      <p className="newMemberPage__instructions">
        To join our Christmas Party, please pay £10 below to confirm your spot!
      </p>
      <button className="newMemberPage__pay-button">
        Pay £10 Now 💳
      </button>
    </div>
  );
}

export default NewMember;
