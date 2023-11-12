import * as React from "react";
import ButtonIcon from "../../components/Button/ButtonIcon";
import { XIcon } from "../../constants";
import { Task } from "../../types";
import { Action, DELETE_TASK, TOGGLE_COMPLETE_TASK, UPDATE_TASK_TITLE } from "./TasksReducer";
import classNames from "classnames";
import useAutoRows from "../../hooks/useAutoRows";

interface Props {
  task: Task
  dispatch: React.Dispatch<Action>
}

const TaskItem: React.FC<Props> = ({task, dispatch}) => {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)
  useAutoRows(textareaRef)

  return (
    <li className="flex space-x-8">
      <input
        type="checkbox"
        className="task-checkbox item shrink-0"
        onChange={() => dispatch({type: TOGGLE_COMPLETE_TASK, taskId: task.id})}
        aria-label="Toggle complete task"
      />
      <textarea
        className={classNames({
          "textfield bg-transparent border-0 p-0 text-lg resize-none flex-1": true,
          "line-through": task.completed
        })}
        value={task.title}
        onChange={e => dispatch({type: UPDATE_TASK_TITLE, taskId: task.id, newTitle: e.target.value})}
        placeholder="To-do"
        aria-label="Task title"
        ref={textareaRef}
        rows={1}
      />
      <ButtonIcon
        Icon={XIcon}
        onClick={() => dispatch({type: DELETE_TASK, taskId: task.id})}
        aria-label="Delete task"
      />
    </li>
  )
}

export default TaskItem;