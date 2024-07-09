import React from "react";
import minam from "../static/basic-data";
import Minam from "./minam";



const App:React.FC = () => {
  return (
    <div>
      <Minam textNode={minam}/>
      <h1>하이</h1>
    </div>
  );
}

export default App;