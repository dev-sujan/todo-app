import {
  Button,
  Input,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useContext } from "react";
import { TodoContext } from "../../context/todo.context.jsx";

const ListItem = ({ todo }) => {
  const { toggleSelect, toggleComplete } = useContext(TodoContext);
  return (
    <ListGroupItem className="d-flex align-items-center">
      <InputGroup>
        <Input
          type={"checkbox"}
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
        <div className={"mx-3"}>
          <h4>{todo.text}</h4>
          <p>{todo.time.toLocaleString()}</p>
        </div>
        <Button
          className={"ms-auto"}
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </InputGroup>
    </ListGroupItem>
  );
};

const ListView = ({ todos }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
};

export default ListView;
