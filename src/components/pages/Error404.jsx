import { Container } from "react-bootstrap";
import error404 from "../../assets/error404.png";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <Container className="mainContainer py-3">
      <div className="d-flex justify-content-center">
        <img
          className="col-12 col-sm-12 col-md-12 col-lg-12 img-fluid error404"
          src={error404}
          alt="Error 404: presione tab hasta llegar al boton de volver al inicio"
        />
      </div>
      <div className="d-flex justify-content-center">
        <Link
          className="col-12 col-sm-12 col-md-3 col-lg-2 btn btn-primary"
          end
          to="/"
        >
          Volver a inicio
        </Link>
      </div>
    </Container>
  );
};

export default Error404;
