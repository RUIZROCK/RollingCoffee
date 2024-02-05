import { Container } from "react-bootstrap";
import CardProducto from "./CardProducto";
import BannerInicio from "../../assets/bannerInicio.png"
const Inicio = () => {
  return (
    <>
    <img src={BannerInicio} alt="Banner RollingCoffee" />
    <Container className="mainContainer">
      <section>
        <h2 className="display-3">Nuestros productos</h2>
        <hr />
        <article className="row d-flex justify-content-around">
          <CardProducto className="col-12 col-sm-12- col-md-3 col-lg-3"></CardProducto>
          <CardProducto className="col-12 col-sm-12- col-md-3 col-lg-3"></CardProducto>
          <CardProducto className="col-12 col-sm-12- col-md-3 col-lg-3"></CardProducto>
          <CardProducto className="col-12 col-sm-12- col-md-3 col-lg-3"></CardProducto>
        </article>
      </section>
    </Container>
    </>
    
  );
};

export default Inicio;
