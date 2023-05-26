import { MouseEvent } from "react";
const Menu = () => {
  let menuItems = ["Home", "Profile", "About me", "My Website", "My work"];
  //menuItems = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Something About me</h1>
      {menuItems.length === 0 && <p>Please Check Later</p>}
      <ul className="list-group">
        {menuItems.map((data, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {data}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
