import taskActionType from "./action-type";

const initialState = {
  tasks: [
    
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskActionType.ADD:
      return { ...state, tasks: [...state.tasks, { ...action.payload }] };

    case taskActionType.REMOVE:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task, index )=> index !== action.payload),
        ]
      };

    default:
      return state;
  }
};

export default taskReducer;
