/* eslint-disable react/prop-types */
import { useState } from "react";

const Navlink = ({ label, isAccordian, subNavLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="leftPanelLink">
        <div
          className="flex justify-between"
          onClick={() => isAccordian && setIsOpen(!isOpen)}
        >
          <span>{label}</span>
          {isAccordian && <span>{isOpen ? "▲" : "▼"}</span>}
        </div>
        {isOpen &&
          subNavLinks.map((item, i) => (
            <div key={i} className="leftPanelLink">
              {item}
            </div>
          ))}
      </div>
    </>
  );
};

export default Navlink;
