import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { nuevoProductoAPI } from "../../helpers/queries"
const NuevoProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (producto) => {
    const respuesta = await nuevoProductoAPI(producto);
    respuesta.status===201? alert("Carga exitosa"):alert("Error");
  };

  return (
    <Container className="mainContainer py-3">
      <h3>Nuevo Producto</h3>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group md="4">
            <Form.Label>Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Café"
              {...register("nombre", {
                required: "Campo obligatorio",
                minLength: { value: 2, message: "Minimo 2 caracteres" },
                maxLength: { value: 30, message: "Maximo 30 caracteres" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group md="4">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Precio"
              {...register("precio", {
                required: "Campo obligatorio",
                min: { value: 100, message: "Minimo 2 cifras" },
                max: { value: 10000, message: "Maximo 8 cifras" },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group md="4">
            <Form.Label>Imagen URL</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="imagen.com/imagen.jpg"
                {...register("imagen", {
                  required: "Campo obligatorio",
                  pattern: {
                    value:
                      /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                    message: "debe ingresar una url valida",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group md="4">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "Selecciona una categoria",
              })}
            >
              <option>--Seleccionar--</option>
              <option value="Infusion">Infusion</option>
              <option value="Batidos">Batidos</option>
              <option value="Dulce">Dulce</option>
              <option value="Salado">Salado</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group md="6">
            <Form.Label>Descripcion breve</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe aqui una breve descripcion"
              as="textarea"
              {...register("caracteristicas", {
                required: "La descripcion breve es obligatoria",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como minimo 10 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "Debe ingresar como maximo 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.caracteristicas?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group md="3">
            <Form.Label>Descripcion amplia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe aqui una descripcion mas amplia"
              as="textarea"
              {...register("caracteristica_amplia", {
                required: "La descripcion amplia es obligatoria",
                minLength: {
                  value: 20,
                  message: "Debe ingresar como minimo 20 caracteres",
                },
                maxLength: {
                  value: 1000,
                  message: "Debe ingresar como maximo 1000 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.caracteristica_amplia?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Check id="disponible" label="Disponible"/>
          </Form.Group>
        </Row>
        <Button className="btn btn-success" type="submit">
          Cargar
        </Button>
      </Form>
    </Container>
  );
};

export default NuevoProducto;
