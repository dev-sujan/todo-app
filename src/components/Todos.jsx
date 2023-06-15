import { useContext } from "react";
import { TodoContext } from "../context/todo.context.jsx";
import ListView from "./listView/ListView.jsx";
import TableView from "./tableView/TableView.jsx";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CreateTodoForm from "./createTodoForm/CreateTodoForm.jsx";
import Controllers from "./controllers/Controllers.jsx";

const Todos = () => {
  const { view, todos, isOpenTodoForm, toggleForm } = useContext(TodoContext);

  const getView = () => {
    return view === "list" ? (
      <ListView todos={todos} />
    ) : (
      <TableView todos={todos} />
    );
  };

  return (
    <>
      <h1 className={"display-4 text-center mb-5"}>Todo App</h1>
      <Controllers />
      <div>{getView()}</div>
      <Modal isOpen={isOpenTodoForm}>
        <ModalHeader toggle={toggleForm}>Create New Todo Item</ModalHeader>
        <ModalBody>
          <CreateTodoForm />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Todos;
