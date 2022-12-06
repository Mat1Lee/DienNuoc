import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import {store} from '../src/context/redux/configstore'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./assets/Loading";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Loading/>
      <App/>
    </Provider>
  </StrictMode>,
  
);
