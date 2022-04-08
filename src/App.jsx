import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import Catalogo from "../components/Catalogo";
import Carrito from "../components/Carrito";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
