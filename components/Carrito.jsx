import { useContext } from "react";
import UserContext from "../UserContext";

const Carrito = () => {
  const User = useContext(UserContext);
  console.log(User.carrito);

  const compra = User.carrito.map((foto, key) => {
    return <div>{foto.precio}</div>;
  });
  return <>{compra}</>;
};

export default Carrito;
