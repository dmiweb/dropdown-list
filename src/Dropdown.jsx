import {useState} from "react";
import DropdownList from "./DropdownList";

const Dropdown = () => {
  let [isActive, setActive] = useState(false); 

  const toggleOpen = () => setActive(!isActive);

  return (
    <div className="container">
      <div data-id="wrapper" className={isActive ? "dropdown-wrapper open" : "dropdown-wrapper"} >
        <button data-id="toggle" className="btn" onClick={toggleOpen}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  );
}

export default Dropdown;