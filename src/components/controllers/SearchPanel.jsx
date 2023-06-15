import { useContext } from "react";
import { Button, Input } from "reactstrap";
import { TodoContext } from "../../context/todo.context.jsx";

const SearchPanel = () => {
  const { term, toggleForm, handleSearch } = useContext(TodoContext);

  return (
    <div className={"d-flex"}>
      <Input
        className={"me-3"}
        placeholder={"Enter Search Term"}
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button color={"success"} onClick={toggleForm}>
        New
      </Button>
    </div>
  );
};

export default SearchPanel;
