import {createContext, useReducer, useState} from "react";
import todoReducer from "../reducer/todo.reducer.jsx";
import {v4 as uuidv4} from "uuid"
import {ACTION} from "./ACTION.jsx";

const initialTodos = {
  todos: [
    {
      id: "1",
      text: "main todo text",
      description: "simple description",
      time: new Date(),
      isComplete: false,
      isSelect: false,
    },
    {
      id: "2",
      text: "main todo text 2",
      description: "simple description",
      time: new Date(),
      isComplete: false,
      isSelect: false,
    },
  ],
  isOpenTodoForm: false,
  searchTerm: '',
  view: 'list',
  filter: 'all'
};

export const TodoContext = createContext(initialTodos);

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelect = (todoId) => {
    dispatch({type: ACTION.TOGGLE_SELECT, payload: todoId});
  };
  const toggleComplete = (todoId) => {
    dispatch({type: ACTION.TOGGLE_COMPLETE, payload: todoId});
  };

  const createTodo = (todo) => {
    const newTodo = {
      ...todo,
      id: uuidv4(),
      isSelect: false,
      isComplete: false,
      time: new Date(),
    }
    dispatch({type: ACTION.CREATE_TODO, payload: newTodo})
  }

  const toggleForm = () => {
    dispatch({type: ACTION.TOGGLE_FORM})
  }

  const handleSearch = (val) => {
    setSearchTerm(val)
  }

  let filteredTodos = state.todos.filter(todo => (
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  const handleFilter = (fiterValue) => {
    dispatch({type: ACTION.SET_FILTER, payload: fiterValue})
  }

  const performFilter = (todos) => {
    if (state.filter === 'completed') {
      return todos.filter(todo => todo.isComplete)
    } else if (state.filter === 'running') {
      return todos.filter(todo => !todo.isComplete)
    }
    return todos
  }

  filteredTodos = performFilter(filteredTodos)
  const changeView = (e) => {
    dispatch({type: ACTION.CHANGE_VIEW, payload: e.target.value})
  }

  const reset = () => {
    dispatch({type: ACTION.RESET})
  }
  const clearSelect = () => {
    dispatch({type: ACTION.DELETE_SELECTED_TODO})
  }
  const clearComplete = () => {
    dispatch({type: ACTION.DELETE_COMPLETED_TODO})
  }

  return (
    <TodoContext.Provider
      value={{
        view: state.view,
        dispatch,
        todos: filteredTodos,
        isOpenTodoForm: state.isOpenTodoForm,
        filter: state.filter,
        toggleForm,
        toggleSelect,
        toggleComplete,
        createTodo,
        handleSearch,
        handleFilter,
        changeView,
        reset,
        clearComplete,
        clearSelect,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
