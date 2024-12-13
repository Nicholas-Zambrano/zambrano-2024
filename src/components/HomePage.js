// import { Link } from "react-router-dom";
// import nick from "../assets/nick_herc.jpeg";
// import uncs from "../assets/uncs.jpg"
// import family_dinner from "../assets/family-dinner.jpg"
// import the_lads from "../assets/the_lads.jpg"
// import senora_luz from "../assets/senora_luz.jpg"
// import "./HomePage.scss";
// import table from "../assets/table.jpg"


// function HomePage() {
//   return (
//     <div className="homePage">
//       {/* Header Section */}
//       <header className="homePage__header">
//         <h1 className="homePage__title">🎄 ZAMBRANO CHRISTMAS PARTY 2024 🎉</h1>
//         <p className="homePage__subtitle">Join us for a festive celebration of joy and love!</p>
//       </header>

//       {/* Image Grid */}
//       <div className="homePage__image-grid">
//         <img 
//           src= {the_lads} 
//           alt="Family 1" 
//           className="homePage__image" 
//         />
//         <img 
//           src={senora_luz}
//           alt="Family 2" 
//           className="homePage__image" 
//         />
//         <img 
//           src={family_dinner} 
//           alt="Family 3" 
//           className="homePage__image" 
//         />
//       </div>

//       {/* Call-to-action button */}
//       <Link to="/poster" className="homePage__button">
//         Enter the Party 🎉
//       </Link>
//     </div>
//   );
// }

// export default HomePage;

import { Link } from "react-router-dom";
import nick from "../assets/nick_herc.jpeg";
import uncs from "../assets/uncs.jpg";
import family_dinner from "../assets/family-dinner.jpg";
import the_lads from "../assets/the_lads.jpg";
import senora_luz from "../assets/senora_luz.jpg";
import newMemberPic from "../assets/new_members.jpg"; // New member registration image
import "./HomePage.scss";
import table from "../assets/table.jpg";

function HomePage() {
  return (
    <div className="homePage">
      {/* Header Section */}
      <header className="homePage__header">
        <h1 className="homePage__title">🎄 ZAMBRANO CHRISTMAS PARTY 2024 🎉</h1>
        <p className="homePage__subtitle">Join us for a festive celebration of joy and love!</p>
      </header>

      {/* New Member Section */}
      <div className="homePage__new-member">
        <img 
          src={newMemberPic} 
          alt="New Member" 
          className="homePage__new-member-image" 
        />
        <Link to="/new-member" className="homePage__new-member-button">
          New Member? Register Here! 💸
        </Link>
      </div>

      {/* Existing Member Section */}
      <div className="homePage__existing-member">
        <Link to="/existing-member" className="homePage__existing-member-button">
          Existing Members, Click Here! 🎉
        </Link>
      </div>

      {/* Image Grid */}
      <div className="homePage__image-grid">
        <img 
          src={the_lads} 
          alt="Family 1" 
          className="homePage__image" 
        />
        <img 
          src={senora_luz}
          alt="Family 2" 
          className="homePage__image" 
        />
        <img 
          src={family_dinner} 
          alt="Family 3" 
          className="homePage__image" 
        />
      </div>
    </div>
  );
}

export default HomePage;
