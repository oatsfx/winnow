import React from "react";
import logo from "./logo.svg";
import { Layout } from "./components/Layout";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Hash } from "crypto";

function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App;
