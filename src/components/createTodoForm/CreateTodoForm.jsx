import { useContext, useState } from "react";
import { TodoContext } from "../../context/todo.context.jsx";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CreateTodoForm = () => {
  const initialValue = {
    text: "",
    description: "",
  };
  const { createTodo, toggleForm } = useContext(TodoContext);
  const [newNote, setNewNote] = useState(initialValue);
  const handleChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(newNote);
    e.target.reset();
    setNewNote(initialValue);
    toggleForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label> Enter Task</Label>
        <Input
          placeholder={"text..."}
          name={"text"}
          value={newNote.text}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Describe Task</Label>
        <Input
          type={"textarea"}
          placeholder={"Describe task..."}
          name={"description"}
          value={newNote.description}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type={"submit"}> Create Task </Button>
    </Form>
  );
};

export default CreateTodoForm;
