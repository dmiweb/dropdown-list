const DropdownItem = ({ item, active, handlerClickItem }) => {
  return (
    <li className={item === active ? "active" : null} onClick={(e) => handlerClickItem(e)}>
      <a href="##">{item}</a>
    </li>
  );
}

export default DropdownItem;