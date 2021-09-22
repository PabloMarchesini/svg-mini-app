import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/app/Main";
import "./styles/style.scss";
import {SvgProvider} from "./context/SvgContext";

ReactDOM.render(
  <SvgProvider>
    <Main />
  </SvgProvider>,
  document.getElementById("root")
);
