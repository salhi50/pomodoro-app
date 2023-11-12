import { Task } from "../../types";

// Actions
export const ADD_TASK = 0;
export const DELETE_TASK = 1;
export const UPDATE_TASK_TITLE = 2;
export const TOGGLE_COMPLETE_TASK = 3;

export type Action = 
| {type: typeof ADD_TASK, newTask: Task}
| {type: typeof DELETE_TASK, taskId: Task["id"]}
| {type: typeof UPDATE_TASK_TITLE, taskId: Task["id"], newTitle: Task["title"]}
| {type: typeof TOGGLE_COMPLETE_TASK, taskId: Task["id"]}

const tasksReducer = (state: Task[], action: Action) => {
  switch(action.type) {
    case ADD_TASK:
      return [...state, action.newTask]
    case DELETE_TASK:
      return state.filter(task => task.id !== action.taskId)
    case UPDATE_TASK_TITLE:
      return state.map(task => task.id === action.taskId ? {...task, title: action.newTitle} : task)
    case TOGGLE_COMPLETE_TASK:
      return state.map(task => task.id === action.taskId ? {...task, completed: !task.completed} : task)
    default:
      return state;
  }
}

export default tasksReducer;