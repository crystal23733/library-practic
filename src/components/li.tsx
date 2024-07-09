import React from "react";
import NodeProps from "../interface/NodeProps";

const LiComponent:React.FC<NodeProps> = ({textNode}) => {
  return (
    <li>{textNode}</li>
  );
}

export default LiComponent;