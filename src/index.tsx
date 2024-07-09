import React from 'react';
import {createRoot} from 'react-dom/client';

const App:React.FC = () => {
  return (
    <h1>Hello World!</h1>
  );
}

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(<App />);