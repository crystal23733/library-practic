import React from "react";

interface NodeProps {
  textNode : string;
}

const Minam:React.FC<NodeProps> = ({textNode}) => {
  return (
    <h1>{textNode}</h1>
  );
}

export default Minam;