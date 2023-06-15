import { ACTION } from "../context/ACTION.jsx";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTION.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ACTION.TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };
    case ACTION.TOGGLE_SELECT:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, isSelect: !todo.isSelect }
            : todo;
        }),
      };
    case ACTION.TOGGLE_FORM:
      return {
        ...state,
        isOpenTodoForm: !state.isOpenTodoForm,
      };

    case ACTION.CHANGE_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    case ACTION.DELETE_SELECTED_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.isSelect === false),
      };
    case ACTION.DELETE_COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.isComplete === false),
      };

    case ACTION.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case ACTION.RESET:
      return {
        ...state,
        view: "list",
        filter: "all",
      };
    default:
      return state;
  }
};

export default todoReducer;
