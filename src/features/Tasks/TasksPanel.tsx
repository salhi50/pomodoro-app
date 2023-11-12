import * as React from "react";
import * as Redux from "@reduxjs/toolkit";
import Button from "../../components/Button/Button";
import tasksReducer, { ADD_TASK } from "./TasksReducer";
import { TASKS_LOCAL_STORAGE_KEY } from "../../constants";
import TaskItem from "./TaskItem";

const TasksPanel: React.FC = () => {
  const [tasks, dispatch] = React.useReducer(tasksReducer, undefined, function () {
    try {
      const LOCAL_TASKS = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY) || "[]"
      return JSON.parse(LOCAL_TASKS)
    }catch(e) {
      console.error(e)
      return []
    }
  })

  React.useEffect(() => {
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function createNewTask() {
    dispatch({
      type: ADD_TASK,
      newTask: {
        id: Redux.nanoid(6),
        title: "",
        completed: false
      }
    })
  }

  return (
    <div className="space-y-16">
      <ul className="space-y-8">
        {tasks.map(task => (
          <TaskItem task={task} key={task.id} dispatch={dispatch} />
        ))}
      </ul>
      <Button
        label="+ Add task"
        onClick={createNewTask}
        size="small"
      />
    </div>
  )
}

export default TasksPanel;