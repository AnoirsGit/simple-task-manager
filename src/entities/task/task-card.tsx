import React from 'react';
import { ITask } from './task.model'; // Import the ITask interface
import './task-card.css';

interface TaskCardProps {
  task: ITask;
  tasksView: string;
}

function TaskCard({ task, tasksView }: TaskCardProps) {
  return (
    <>
      {tasksView === 'kanban' ? (
        <div className="task-card kanban-view">
          <div className="task-card-header">
            <h3>{task.title}</h3>
            <p>Status: {task.statusId}</p>
          </div>
          <div className="task-details">
            <p>{task.description}</p>
          </div>
        </div>
      ) : (
        <div className="task-card list-view">
          <h3>{task.title}</h3>
          <div className="task-details">
            <p>Status: {task.statusId}</p>
            <p>{task.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskCard;
