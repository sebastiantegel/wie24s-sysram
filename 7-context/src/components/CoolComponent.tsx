import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import { Button } from "./Button";

export const CoolComponent = () => {
  const { text, changeTheText } = useContext(MyContext);

  return (
    <>
      {text}
      <p>
        <Button onClick={changeTheText}>Ändra - Cool</Button>
      </p>
    </>
  );
};
