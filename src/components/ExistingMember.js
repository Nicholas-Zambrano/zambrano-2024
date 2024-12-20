// import React from "react";
// import { Link } from "react-router-dom";
// import "./ExistingMember.scss";

// function ExistingMember() {
//   const families = [
//     { name: "Yanez", link: "/family/yanez" },
//     { name: "Bustillos", link: "/family/bustillos" },
//     { name: "Reascos", link: "/family/reascos" },
//     { name: "Nacatos", link: "/family/nacatos" },
//     { name: "Fernandez", link: "/family/fernandez" },
//     { name: "?", link: "/family/surprise" }, // Mystery surprise card
//   ];

//   return (
//     <div className="existingMemberPage">
//       {/* Back to Home Button */}


//       {/* Header Section */}
//       <header className="existingMemberPage__header">
//         <h1 className="existingMemberPage__title">
//           Welcome Back, Existing Member! 🎄
//         </h1>
//         <p className="existingMemberPage__details">
//           Select a family below to learn more about them!
//         </p>
//       </header>

//       {/* Family Cards Section */}
//       <div className="existingMemberPage__familyCards">
//         {families.map((family, index) => (
//           <Link to={family.link} key={index} className="familyCard">
//             <div className="familyCard__content">
//               <div className="familyCard__image">
//                 <p>Add Family Image</p> {/* Placeholder for images */}
//               </div>
//               <h2>{family.name}</h2>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="existingMemberPage__footer">
//             <Link to="/" className="backToHomeButton">🎉 Back to Home 🎉</Link>

//         <p>🎅 Made with love for Christmas 2024 🎄</p>
//       </footer>
//     </div>
//   );
// }

// export default ExistingMember;

import React from "react";
import { Link } from "react-router-dom";
import "./ExistingMember.scss";

function ExistingMember() {
  const families = [
    { name: "Yanez", link: "/family/yanez", image: "/images/yanez.png" },
    { name: "Bustillos", link: "/family/bustillos", image: "/images/bustillos.png" },
    { name: "Reascos", link: "/family/reascos", image: "/images/reascos.png" },
    { name: "Nacatos", link: "/family/nacatos", image: "/images/nacatos.png" },
    { name: "Fernandez", link: "/family/fernandez", image: "/images/fernandez.png" },
    { name: "🎁 Surprise 🎁", link: "/family/surprise", image: "/images/surprise.png" }, // Mystery surprise card
  ];

  return (
    <div className="existingMemberPage">
      {/* Snowfall Background Effect */}
      <div className="snowfall"></div>

      {/* Header Section */}
      <header className="existingMemberPage__header">
        <h1 className="existingMemberPage__title">
          Welcome Back, Existing Member! 🎄
        </h1>
        <p className="existingMemberPage__details">
          Select a family below to learn more about them and join the festive fun!
        </p>
      </header>

      {/* Family Cards Section */}
      <div className="existingMemberPage__familyCards">
        {families.map((family, index) => (
          <Link to={family.link} key={index} className="familyCard">
            <div className="familyCard__content">
              <div className="familyCard__image">
                {/* <img src={family.image} alt={`${family.name} Family`} /> */}
              </div>
              <h2>{family.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="existingMemberPage__footer">
        <Link to="/" className="backToHomeButton">🎉 Back to Home 🎉</Link>
        <p>🎅 Made with love for Christmas 2024 🎄</p>
        <p>✨ Wishing you joy, love, and family fun this holiday season! ✨</p>
      </footer>
    </div>
  );
}

export default ExistingMember;
