export const SetFilter = (filter) => ({
    type: "FILTER_TASKS",
    payload: filter,
  });
  
  export const addTask = (description) => ({
    type: "ADD_TASK",
    payload: {
      id: Date.now(),
      description: description,
      isDone: false,
    }
  });
  
  export const deleteTask = (id) => ({
    type: "DELETE_TASKS",
    payload: id,
  });
  
  export const editTask = (id, description) => ({ // Changed '.' to ','
    type: "EDIT_TASKS",
    payload: {
      id,
      description,
    }
  });
  