import React from "react";
import saving from "./../../images/saving.png"
// import deal from "./../../images/deal.png"
// import sunbed from "./../../images/sunbed.png"
// import carwash from "./../../images/car-wash.png"
// import car from "./../../images/car.png"
// import shopping from "./../../images/shopping-bag.png"
// import education from "./../../images/mortarboard.png"
// import other from "./../../images/other.png"
const OurServices = (props) => {
  function handleClick(e) {
    // Changing toggle menu state
    props.setToggleMenu(e.target.id);
  }
  return (
    <>
      <ul className="nav first nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              props.toggleMenu === "financialservices" ? "active" : ""
            }`}
            id="financialservices"
            type="button"
            onClick={handleClick}
          >
            <img src={saving} alt="" /> Financial Services
          </button>
        </li>
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              props.toggleMenu === "realestate" ? "active" : ""
            }`}
            id="realestate"
            type="button"
            onClick={handleClick}
          >
            <img src={deal} alt="" /> Real Estate
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              props.toggleMenu === "travel" ? "active" : ""
            }`}
            id="travel"
            type="button"
            onClick={handleClick}
          >
            <img src={sunbed} alt="" /> Travel/Holidays
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
                props.toggleMenu === "autocare" ? "active" : ""
              }`}
            id="autocare"
            type="button"
            onClick={handleClick}
          >
            <img src={carwash} alt="" /> Auto Care
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              props.toggleMenu === "automobile" ? "active" : ""
            }`}
            id="automobile"
            type="button"
            onClick={handleClick}
          >
            <img src={car} alt="" /> Automobile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              props.toggleMenu === "dailyneeds" ? "active" : ""
            }`}
            id="dailyneeds"
            type="button"
            onClick={handleClick}
          >
            <img src={shopping} alt="" /> Daily Needs
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              props.toggleMenu === "education" ? "active" : ""
            }`}
            id="education"
            type="button"
            onClick={handleClick}
          >
            <img src={education} alt="" /> Education
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              props.toggleMenu === "others" ? "active" : ""
            }`}
            id="others"
            type="button"
            onClick={handleClick}
          >
            <img src={other} alt="" /> Others
          </button>
        </li> */}
      </ul>
    </>
  );
};
export default OurServices;
