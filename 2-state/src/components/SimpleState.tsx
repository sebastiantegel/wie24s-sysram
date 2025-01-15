import { useState } from "react";

export const SimpleState = () => {
  const [message, setMessage] = useState("Lorem ipsum");
  //let message = "Lorem ipsum";

  const handleClick = () => {
    if (message === "Lorem ipsum") {
      setMessage("dolor sit amet");
    } else {
      setMessage("Lorem ipsum");
    }
    // message = "dolor sit amet";
  };

  console.log(message);

  return <p onClick={handleClick}>{message}</p>;
};
