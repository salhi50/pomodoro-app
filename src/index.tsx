import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux"
import store from "./redux/store";
import App from "./App";
import "./index.css"
import "../public/Itim-Regular.ttf"
import "../public/favicon.ico"

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)