import * as actionTypes from './actionTypes';

const initialState = {
  tasks: [],
  task: null,
  editedTask: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const updatedTask = [...state.tasks, action.payload];
      return {
        ...state,
        tasks: updatedTask,
      };

    case actionTypes.FETCH_TASK:
      return {
        ...state,
        task: action.payload,
      };

    case actionTypes.FETCH_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case actionTypes.DELETE_TASK:
      const updatedTasks = state.tasks.filter(t => t.id !== action.task);
      console.log(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};

export default reducer;
