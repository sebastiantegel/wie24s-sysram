import "./App.css";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { HelloWorld } from "./components/HelloWorld";
import { Interpolation } from "./components/Interpolation";
import { ListObjectsRendering } from "./components/ListObjectsRendering";
import { ListRendering } from "./components/ListRendering";

function App() {
  return (
    <>
      <div>
        <HelloWorld></HelloWorld>
      </div>
      <div>
        {/* <Interpolation></Interpolation> */}
        {/* <ConditionalRendering></ConditionalRendering> */}
        {/* <ListRendering></ListRendering> */}
        {/* <ListObjectsRendering></ListObjectsRendering> */}
      </div>
    </>
  );
}

export default App;
