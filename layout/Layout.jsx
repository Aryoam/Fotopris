import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import UserContext from "../UserContext.js";
import { Row, Col, Button, Toast } from "react-bootstrap";

export const Layout = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  useEffect(() => {
    let totalCarrito = 0;
    carrito.forEach((el) => {
      totalCarrito += el.precio;
    });
    setTotal(totalCarrito);
  }, [carrito]);

  return (
    <>
      <header>
        <div>
          <div className="containerSlogan">
            <img
              className="logo"
              src="https://i.imgur.com/2V76omy.jpg"
              alt="Logo"
            />
            <p>Tienda de Imagenes</p>
          </div>
          <Row>
            <Col md={6} className="mb-2" onClick={toggleShowA}>
              <div className="divCarrito">
                <img
                  className="imagenCarrito"
                  src="https://i.imgur.com/p4cbGbr.png"
                  alt="Carrito"
                />
                <span>{total.toFixed(2)}</span>
              </div>
              <Toast
                className="toastCarrito"
                show={showA}
                onClose={toggleShowA}
              >
                <Toast.Header>
                  <strong className="me-auto">Carrito</strong>
                </Toast.Header>
                <Toast.Body>
                  <div>Articulos del carrito</div>
                  <Link to="/carrito">Carrito</Link>
                </Toast.Body>
              </Toast>
            </Col>
          </Row>
        </div>
      </header>

      <UserContext.Provider value={{ setCarrito, carrito, setTotal }}>
        <div className="container containerLayout">
          <Outlet />
        </div>
      </UserContext.Provider>
    </>
  );
};
