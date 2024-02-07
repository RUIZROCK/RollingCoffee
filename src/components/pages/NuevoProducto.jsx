import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";

const NuevoProducto = () => {
  return (
    <Container className="mainContainer py-3">
        <h3>Nuevo Producto</h3>
        <hr />
      <Form>
        <Row className="mb-3">
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Producto</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Producto"
            />
            <Form.Control.Feedback>Campo vacío</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Precio"
            />
            <Form.Control.Feedback>Campo vacío</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationCustomUsername">
            <Form.Label>Imagen URL</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="imagen.com/imagen.jpg"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
              Campo vacío
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group md="6" controlId="validationCustom03">
            <Form.Label>Descripcion breve</Form.Label>
            <Form.Control type="text" placeholder="Escribe aqui una breve descripcion" required />
            <Form.Control.Feedback type="invalid">
              Campo vacío
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom04">
            <Form.Label>Descripcion amplia</Form.Label>
            <Form.Control type="text" placeholder="Escribe aqui una descripcion mas amplia" required />
            <Form.Control.Feedback type="invalid">
              Campo vacío
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className="btn btn-success" type="submit">Cargar</Button>
      </Form>
    </Container>
  );
};

export default NuevoProducto;
