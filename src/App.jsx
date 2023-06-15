import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "reactstrap";
import Todos from "./components/Todos";
import { TodoProvider } from "./context/todo.context.jsx";

const App = () => {
  return (
    <TodoProvider>
      <Container className="my-3">
        <Row>
          <Col>
            <Todos />
          </Col>
        </Row>
      </Container>
    </TodoProvider>
  );
};

export default App;
