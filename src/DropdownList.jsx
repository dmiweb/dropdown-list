import { useState } from "react";
import DropdownItem from "./DropdownItem";

const DropdownList = () => {
  let [activeItem, setActiveItem] = useState("Profile Information");

  const menuItems = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"];

  const handlerClickItem = (e) => setActiveItem(e.currentTarget.textContent);

  return (
    <ul data-id="dropdown" className="dropdown">
      {menuItems.map((item, index) =>
        <DropdownItem
          key={index}
          item={item}
          active={activeItem}
          handlerClickItem={handlerClickItem}
        />)}
    </ul>
  );
}

export default DropdownList;