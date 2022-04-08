import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import UserContext from "../UserContext.js";

export const Layout = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(carrito);

  return (
    <div>
      <header>
        <Link to="/carrito">Ir al carrito</Link>
      </header>
      <UserContext.Provider value={{ setCarrito, carrito, setTotal }}>
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};
