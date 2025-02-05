import { useContext } from "react";
import { CoolComponent } from "./CoolComponent";
import { MyContext } from "../contexts/MyContext";
import { Button } from "./Button";

export const AwesomeComponent = () => {
  const { changeTheText } = useContext(MyContext);

  return (
    <>
      <h3>Awesomeness</h3>
      <Button onClick={changeTheText}>Ändra</Button>
      <CoolComponent />
    </>
  );
};
