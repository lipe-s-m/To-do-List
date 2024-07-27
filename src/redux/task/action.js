import taskActionType from "./action-type";

export const addTask = (payload) => ({
  type: taskActionType.ADD,
  payload,
});

export const removeTask = (payload) => ({
  type: taskActionType.REMOVE,
  payload,
})
