import React from "react";
import NodeProps from "./interface/NodeProps";

const Minam:React.FC<NodeProps> = ({textNode}) => {
  return (
    <h1>{textNode}</h1>
  );
}

export default Minam;