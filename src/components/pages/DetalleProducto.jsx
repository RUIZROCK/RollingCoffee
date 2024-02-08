import { Container } from "react-bootstrap";
import cafe from "../../assets/cafeAmericano.png"
import { Link } from "react-router-dom";
const DetalleProducto = () => {
  return (
    <Container className="mainContainer  py-3 ">
      <section>
        <div className="row justify-content-around py-3 border border-1 border-dark">
          <div className="col-12 col-md-4">
            <img className="img-fluid w-100" src={cafe} alt="" />
          </div>
          <div className="mt-2 col-12 col-md-8">
            <article>
              <h3>Titulo</h3>
              <hr />
              <p>
                aqui <br />
                van <br />
                descripcion <br />
                amplia <br />
                del <br />
                Producto <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                optio ratione distinctio quo nisi eum, accusantium similique
                ducimus asperiores! Quisquam, similique iure aspernatur aperiam
                fuga, quam neque mollitia magnam rerum fugit molestias, facere
                commodi? Dolore nulla ut molestiae voluptate tempora sit
              </p>
              <br />
              <p><strong>CATEGORIA:</strong> Categoria</p>
              <br />
              <b>Precio : $12000</b>
              <div className="row justify-content-end">
                <Link end to="/" className="btn btn-success col-6 col-md-3 mx-2">Volver a inicio</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DetalleProducto;
