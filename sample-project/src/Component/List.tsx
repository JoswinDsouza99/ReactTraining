import { MouseEvent } from "react";
import { useState } from "react";

function List() {
  let items = ["Kolkata", "Budapest", "London", "Brazil", "Rio"];
  const [active, setActive] = useState(-1);
  //items = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Dynamic List</h1>
      {items.length === 0 && <p>No items is found in the list</p>}
      <ul className="list-group">
        {items.map((x, index) => (
          <li
            key={x}
            className={`list-group-item ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default List;
