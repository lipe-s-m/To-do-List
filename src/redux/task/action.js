import taskActionType from "./action-type";

export const addTask = (payload) => ({
  type: taskActionType.ADD,
  payload,
});

export const removeTask = (payload) => ({
  type: taskActionType.REMOVE,
  payload,
});

export const editTask = (payload) => ({
  type: taskActionType.EDIT,
  payload,
});
