const initialStore = {
    tasks: [
      { id: 1, description: "My First Task", isDone: false },
      { id: 2, description: "My Second Task", isDone: true },
    ],
    filter: "all",
  };
  
  const reducers = (state = initialStore, action) => {
    switch (action.type) {
      case "FILTER_TASKS":
        return {
          ...state,
          filter: action.payload,
        };
      case "ADD_TASK":
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case "DELETE_TASKS":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case "EDIT_TASKS":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, description: action.payload.description }
              : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducers;
  