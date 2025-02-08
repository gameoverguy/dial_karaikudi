/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function LeftNavPanel() {
  const navData = [
    { picture: "orders.png", navname: "Dashboard" },
    { picture: "orders.png", navname: "Orders" },
    { picture: "orders.png", navname: "Services" },
    { picture: "orders.png", navname: "Users" },
  ];

  const [activeIndex, setActiveIndex] = useState(null); // Track the active button's index

  const handleButtonClick = (index) => {
    setActiveIndex(index); // Update the active button
  };

  return (
    <div className="LeftPanel">
      <div className="Left_panel_Head">
        <img className="topLogo" src="DialKaraikudi_Logo.png" alt="0"></img>
        <img className="menuLogo" src="menu.png" alt="0"></img>
      </div>

      <div className="Left_panel_Content">
        {navData.map((navitem, index) => (
          <NavItem
            key={index}
            click={() => handleButtonClick(index)}
            picture={navitem.picture}
            navname={navitem.navname}
            className={`menuItem ${activeIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

function NavItem(props) {
  return (
    <button className={props.className} onClick={props.click}>
      <img className="menuLogo" src={props.picture} alt="0"></img>
      <p>{props.navname}</p>
    </button>
  );
}

export default LeftNavPanel;
