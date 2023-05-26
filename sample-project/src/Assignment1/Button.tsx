import { MouseEvent } from "react";

interface Props {
  items: string;
}

function Button(props: Props) {
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleClick}
      >
        {props.items}
      </button>
    </>
  );
}

export default Button;
