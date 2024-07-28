import taskActionType from "./action-type";

const initialState = {
  tasks: [],
  id: 0,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskActionType.ADD:
      const newTask = { ...action.payload, id: state.id };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        id: state.id + 1,
      };

    case taskActionType.REMOVE:
      console.log("payload excluido: " + action.payload);
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case taskActionType.EDIT:
      const { id, ...updates } = action.payload; 
      console.log(action.payload);
      console.log(id);
      if (
        id === undefined ||
        id < 0 ||
        !state.tasks.find((task) => task.id === id)
      ) {
        return state;
      }
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, ...updates } : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
