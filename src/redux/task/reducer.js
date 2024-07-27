import taskActionType from "./action-type";

const initialState = {
  tasks: [
    {
      nome: null,
      descricao: null,
      dificuldade: null,
      status: null,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskActionType.ADD:
      return { ...state, tasks: [...state.tasks, { ...action.payload }] };

    default:
      return state;
  }
};

export default taskReducer;
