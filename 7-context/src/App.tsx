import { useState } from "react";
import "./App.css";
import { AwesomeComponent } from "./components/AwesomeComponent";
import { IMyContext, MyContext } from "./contexts/MyContext";
import { TodoApp } from "./components/TodoApp";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";
import { Button } from "./components/Button";

function App() {
  const [state, setState] = useState<IMyContext>({
    text: "Hello world",
    changeTheText: () => {},
  });
  const [theme, setTheme] = useState<ITheme>(themes.light);

  state.changeTheText = () => {
    setState({ ...state, text: "Wohooo!" });
  };

  const toggleTheme = () => {
    theme.name === themes.light.name
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Button onClick={toggleTheme}>
          Ändra till{" "}
          {theme.name === themes.light.name
            ? themes.dark.name
            : themes.light.name}
        </Button>

        <MyContext.Provider value={state}>
          <AwesomeComponent />
        </MyContext.Provider>

        <TodoApp />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
