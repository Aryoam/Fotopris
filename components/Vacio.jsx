import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Vacio = () => {
  let navigate = useNavigate();
  return (
    <div className="carritoVacio">
      <img src="https://i.imgur.com/2Udcfr2.jpg" alt="Carrito Vacio" />
      <Button variant="success" onClick={() => navigate("/")}>
        Ir al Catalogo
      </Button>
    </div>
  );
};

export default Vacio;
