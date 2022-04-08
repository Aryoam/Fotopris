import { useState, useEffect, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import UserContext from "../UserContext";

const ModalCatalogo = ({ img, categoria }) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(false);
  const [changeId, setChangeId] = useState("");
  const [formatoSelect, setFormatoSelect] = useState("");
  const [tamanioSelect, setTamanioSelect] = useState("");
  const [precio, setPrecio] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(0);

  const User = useContext(UserContext);

  useEffect(() => {
    if (categoria === "A") {
      setPrecio(precio + 19.99);
    } else if (categoria == "B") {
      setPrecio(precio + 39.99);
    } else if (categoria == "C") {
      setPrecio(precio + 59.99);
    }
  }, []);

  const formatos = [
    { id: 1, formato: "20x30", precio: 24.99 },
    { id: 2, formato: "30x40", precio: 34.99 },
    { id: 3, formato: "40x40", precio: 49.99 },
    { id: 4, formato: "50x50", precio: 54.99 },
    { id: 5, formato: "60x60", precio: 64.99 },
    { id: 6, formato: "80x80", precio: 74.99 },
  ];

  const handleFormato = (e) => {
    setFormatoSelect(e.target.value);
    setSelect(true);
  };

  const handleTamanio = (e) => {
    setSelect(true);
    setTamanioSelect(e.target.value);
    setChangeId(e.target.id);
    console.log(changeId);
    if (select) {
      setPrecioFinal(precio + Number(e.target.value));
    }
  };

  const handleClose = () => {
    setShow(false);
    setPrecioFinal(0);
    setFormatoSelect("");
    setTamanioSelect("");
    setChangeId("");
  };
  const handleShow = () => setShow(true);
  const handleCarrito = () => {
    User.setCarrito([
      ...User.carrito,
      {
        precio: precioFinal,
        formato: formatoSelect,
        imagen: img,
      },
    ]);
  };

  const formato = formatos.map((opcion, key) => {
    return (
      <button
        value={opcion.precio}
        id={opcion.id}
        className={`"boxOpciones" ${opcion.id == changeId ? "resaltar" : null}`}
        onClick={handleTamanio}
      >
        {opcion.formato}
      </button>
    );
  });

  const precios = formatos.map((precio, key) => {
    return (
      <div value={precio.precio} className="boxOpciones">
        {precio.precio}
      </div>
    );
  });
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Comprar
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Finaliza tu compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="containerModal">
            <img src={img} alt="Imagen de compra" />
            <div className="opcionesModal">
              <h3>Formato</h3>
              <div className="containerOpciones">
                <button
                  className={formatoSelect === "cuadrado" ? "resaltar" : null}
                  value="cuadrado"
                  onClick={handleFormato}
                >
                  Cuadrado
                </button>
                <button
                  className={
                    formatoSelect === "rectangular" ? "resaltar" : null
                  }
                  value="rectangular"
                  onClick={handleFormato}
                >
                  Rectangular
                </button>
                <button
                  className={formatoSelect === "panoramico" ? "resaltar" : null}
                  value="panoramico"
                  onClick={handleFormato}
                >
                  Panorámico
                </button>
              </div>
              <h3>Tamaño (cm)</h3>
              <div className="containerOpciones">{formato}</div>
              <h3>Total</h3>
              <div>{!precioFinal ? precio : precioFinal.toFixed(2)}</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={handleCarrito}>
            Añadir al carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCatalogo;
