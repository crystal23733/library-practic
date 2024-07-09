import React from "react";
import minam from "../static/basic-data";
import Minam from "./minam";
import UlComponent from "./components/ul";
import LiComponent from "./components/li";



const App:React.FC = () => {
  return (
    <div>
      <Minam textNode={minam}/>
      <UlComponent>
        <LiComponent textNode="유호영" />
      </UlComponent>
    </div>
  );
}

export default App;