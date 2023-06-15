import { Input, Label } from "reactstrap";
import { TodoContext } from "../../context/todo.context.jsx";
import { useContext } from "react";

const ViewController = () => {
  const { view, changeView } = useContext(TodoContext);
  return (
    <div className={"d-flex"}>
      <Label for={"list-view"} className={"me-4"}>
        <Input
          type={"radio"}
          name={"view"}
          value={"list"}
          id={"list-view"}
          onChange={changeView}
          className={"d-inline-block"}
          checked={view === "list"}
        />
        List View
      </Label>
      <Label for={"table-view"} className={"me-4"}>
        <Input
          type={"radio"}
          name={"table"}
          value={"table"}
          id={"table-view"}
          onChange={changeView}
          className={"d-inline-block"}
          checked={view === "table"}
        />
        Table View
      </Label>
    </div>
  );
};

export default ViewController;
