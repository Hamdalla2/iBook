// libraries
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';

// files
import App from "./App";
import Reducer from "./redux/Reducers";

// variables
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
const store = createStore(Reducer);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
