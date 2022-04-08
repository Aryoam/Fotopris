import { useContext } from "react";
import UserContext from "../UserContext";
import Vacio from "./Vacio";
import LayoutCarrito from "./LayoutCarrito";

const Carrito = () => {
  const User = useContext(UserContext);
  console.log(User.carrito);

  return (
    <>
      {User.carrito.length === 0 ? (
        <Vacio />
      ) : (
        <LayoutCarrito carrito={User.carrito} />
      )}
    </>
  );
};

export default Carrito;
