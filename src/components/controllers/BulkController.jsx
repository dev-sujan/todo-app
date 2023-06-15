import { Button, ButtonGroup } from "reactstrap";
import { useContext } from "react";
import { TodoContext } from "../../context/todo.context.jsx";

const BulkController = () => {
  const { clearSelect, clearComplete, reset } = useContext(TodoContext);
  return (
    <ButtonGroup>
      <Button color={"danger"} onClick={clearSelect}>
        Delete Selected
      </Button>
      <Button color={"danger"} onClick={clearComplete}>
        Delete Completed
      </Button>
      <Button color={"danger"} onClick={reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};

export default BulkController;
