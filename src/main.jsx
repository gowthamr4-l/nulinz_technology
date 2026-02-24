import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"; // <-- import ChakraProvider


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </HashRouter>
);