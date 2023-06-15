import { Button, ButtonGroup } from "reactstrap";
import { useContext } from "react";
import { TodoContext } from "../../context/todo.context.jsx";

const FilterController = () => {
  const { handleFilter, filter } = useContext(TodoContext);

  return (
    <ButtonGroup>
      <Button
        color={filter === "all" ? "primary" : "secondary"}
        onClick={() => handleFilter("all")}
      >
        All
      </Button>
      <Button
        color={filter === "running" ? "primary" : "secondary"}
        onClick={() => handleFilter("running")}
      >
        Running
      </Button>
      <Button
        color={filter === "completed" ? "primary" : "secondary"}
        onClick={() => handleFilter("completed")}
      >
        Competed
      </Button>
    </ButtonGroup>
  );
};

export default FilterController;
