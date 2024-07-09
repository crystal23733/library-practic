import React from "react";
import NodeProps from "./interface/NodeProps";

interface BinComponent {
  styles: React.CSSProperties
}

let style:React.CSSProperties = {
  color:"blue",
  backgroundColor:"red"
}

const Bin:React.FC<NodeProps> = ({textNode}) => {
  
  return (
    <div>
      <h1 style={style}>{textNode}</h1>
    </div>
  );
}

export default Bin;