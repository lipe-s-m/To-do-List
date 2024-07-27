import taskActionType from "./action-type";

export const addTask = (payload) => ({
  type: taskActionType.ADD,
  payload,
});
