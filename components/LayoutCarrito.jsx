import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const LayoutCarrito = ({ carrito }) => {
  let navigate = useNavigate();

  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalCarrito = 0;
    carrito.forEach((el) => {
      totalCarrito += el.precio;
    });
    setTotal(totalCarrito);
  }, [carrito]);

  const compra = carrito.map((el, key) => {
    return (
      <tr key={key}>
        <td>
          <img src={el.imagen} alt="Imagen compra" />
        </td>
        <td>{el.formato}</td>
        <td>{el.precio.toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <>
      <table className="table layoutCarrito">
        <thead>
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Formato</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody className="tablaCarrito">
          {compra}
          <tr>
            <td></td>
            <td></td>
            <td>Total: {total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <Button variant="success" onClick={() => navigate("/")}>
        Volver al Catalogo
      </Button>
    </>
  );
};

export default LayoutCarrito;
