import { Card } from "react-bootstrap";
import cafeAmericano from "../../assets/cafeAmericano.png";
import { NavLink } from "react-router-dom";
const CardProducto = () => {
  return (
    <Card style={{ width: "18rem" }} className="m-1">
      <Card.Img variant="top" src={cafeAmericano} />
      <Card.Body>
        <Card.Title className="txt-verdecito">Titulo</Card.Title>
        <Card.Text>
          <p>Caracteristicas del producto</p>
          <b>Precio: $150</b>
        </Card.Text>
        <hr />
        <div className="d-flex justify-content-end">
          <NavLink className="btn btn-success" end to="/DetalleProducto">
            Ver mas
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;
