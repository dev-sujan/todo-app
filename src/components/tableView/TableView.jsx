import { Button, Input, InputGroup, Table } from "reactstrap";
import { useContext } from "react";
import { TodoContext } from "../../context/todo.context.jsx";

// eslint-disable-next-line react/prop-types
const RowItem = ({ todo }) => {
  const { toggleSelect, toggleComplete } = useContext(TodoContext);
  return (
    <tr>
      <th scope={"row"}>
        <InputGroup>
          <Input
            type={"checkbox"}
            id={todo.id}
            checked={todo.isSelect}
            onChange={() => toggleSelect(todo.id)}
          />
        </InputGroup>
      </th>
      <th>{todo.time.toLocaleString()}</th>
      <th>{todo.text}</th>
      <th>
        <Button
          className={"ms-auto"}
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </th>
    </tr>
  );
};

const TableView = ({ todos }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <RowItem key={todo.id} todo={todo} />
      ))}
    </tbody>
  </Table>
);

export default TableView;
