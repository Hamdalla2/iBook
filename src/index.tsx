// libraries
import React from "react";
import { createRoot } from 'react-dom/client';

// files
import App from "./App";

// variables
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
