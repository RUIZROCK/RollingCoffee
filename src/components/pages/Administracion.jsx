import { Container } from "react-bootstrap";
import capu from "../../assets/capuchino.png";
import { NavLink } from "react-router-dom";

const Administracion = () => {
  return (
    <Container className="mainContainer">
      <div className="row justify-content-between p-3">
        <h3 className="col-12 col-md-4">Gestor Productos</h3>
        <NavLink
          className="btn btn-primary col-12 col-md-1"
          end
          to="/NuevoProducto"
        >
          <i className="bi bi-file-earmark-plus"></i>
        </NavLink>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Url Img</th>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Capuccino</td>
              <td>$150</td>
              <td>
                <div className="middle-item">
                  <img className="img-fluid" src={capu} alt="Capuchino" />
                </div>
              </td>
              <td>Nose</td>
              <td>
                <NavLink
                  className="btn btn-warning mx-2"
                  end
                  to="/DetalleProducto"
                >
                  Ver
                </NavLink>
                <button className="btn btn-success mx-2"><i className="bi bi-pencil-square"></i></button>
                <button className="btn btn-danger"><i className="bi bi-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Administracion;
