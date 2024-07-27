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
    // action.payload.id = state.id;
    // state.id++;
    // return { ...state, tasks: [...state.tasks, { ...action.payload }] };

    case taskActionType.REMOVE:
      console.log("payload excluido: " + action.payload);
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case taskActionType.EDIT:
      const { id, ...updates } = action.payload; // Extraia o ID e as atualizações
      console.log(action.payload);
      console.log(id);
      // Verifique se o ID é válido
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
    // const index = action.payload.id;
    // console.log(action.payload);
    // console.log(action.payload.id);
    // if (index === undefined || index < 0 || index >= state.tasks.length) {
    //   return state;
    // };

    // return {
    //   ...state,
    //   tasks: state.tasks.map((task) =>
    //     task.id === index ? { ...task,...action.payload } : task
    //   ),
    // };

    default:
      return state;
  }
};

export default taskReducer;
