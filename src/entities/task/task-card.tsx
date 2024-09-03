import { Icon } from "@iconify/react";
import React from "react";
import { ITask } from "./task.model"; // Import the ITask interface
import "./task-card.css";
import { Link } from "react-router-dom";
import { useTaskContext } from "../../app/providers/task-provider";

interface TaskCardProps {
  task: ITask;
  tasksView: string;
}

function TaskCard({ task, tasksView }: TaskCardProps) {
  const { deleteTask } = useTaskContext();
  return (
    <>
      {tasksView === "kanban" ? (
        <div className="task-card kanban-view">
          <div className="task-card-header">
          <Link to={task.id}>
          <h3>{task.title}</h3>
          </Link>
            <div className="flex gap-2">
              <Icon
                onClick={() => {
                  console.log('sdf')
                  deleteTask(task.id)}}
                icon="material-symbols:delete-outline"
              />
            </div>
          </div>
          <div className="task-details">
            <p>{task.description}</p>
          </div>
        </div>
      ) : (
        <Link to={task.id} className="task-card list-view">
          <h3>{task.title}</h3>
          <div className="task-details">{task.description}</div>
        </Link>
      )}
    </>
  );
}

export default TaskCard;
