import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ModalCatalogo from "./ModalCatalogo";

const Catalogo = () => {
  const [items, setItems] = useState([]);
  const articulos = [
    { id: 1, url: "https://placeimg.com/400/600", categoria: "A" },
    { id: 2, url: "https://placeimg.com/400/600", categoria: "A" },
    { id: 3, url: "https://placeimg.com/400/600", categoria: "B" },
    { id: 4, url: "https://placeimg.com/400/600", categoria: "B" },
    { id: 5, url: "https://placeimg.com/400/600", categoria: "C" },
    { id: 6, url: "https://placeimg.com/400/600", categoria: "B" },
  ];

  const fotos = articulos.map(({ url, categoria }, key) => {
    return (
      <Card key={key} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Text>
            {categoria === "A"
              ? "19,99€"
              : categoria === "B"
              ? "39,99€"
              : categoria === "C"
              ? "59,99€"
              : null}
          </Card.Text>
          <ModalCatalogo img={url} categoria={categoria} />
        </Card.Body>
      </Card>
    );
  });
  return <div>{fotos}</div>;
};

export default Catalogo;
