import { useReducer } from "react";
import "./App.css";
import { TodosContext } from "./contexts/TodosContext";
import { TodoReducer } from "./reducers/TodoReducer";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

function App() {
  // State som innehåller en lista med Todo (todos)
  // och en funktion för att ändra vårt state (dispatch)
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <>
      {/* Placera state och dispatch i vårt context
      Detta gör att AddTodo och Todos kommer åt todos och dispatch */}
      <TodosContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        <Todos />
      </TodosContext.Provider>
    </>
  );
}

export default App;
