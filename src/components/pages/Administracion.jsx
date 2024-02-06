import { Container } from "react-bootstrap";
import capu from "../../assets/capuchino.png";
const Administracion = () => {
  return (
    <Container className="mainContainer">
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
                <button className="btn btn-success">Editar</button>
                <button className="btn btn-danger">Borrar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Administracion;
