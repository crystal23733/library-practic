import React, {ReactNode} from "react";

interface UlComponentProps {
  children : ReactNode
}

const UlComponent:React.FC<UlComponentProps> = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  );
}

export default UlComponent;