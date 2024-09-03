import React, { ReactNode } from "react";
import "./status-tasks-wrapper.css";
import { IStatus } from "../../entities/status/status.model";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

interface StatusTasksWrapperProps {
  children: ReactNode;
  tasksView: string;
  status: IStatus
}

const StatusTasksWrapper = ({ children, tasksView, status }: StatusTasksWrapperProps) => {
  return (<>
  <div className={`status-wrapper ${tasksView}`}>
    <h3 className="status-title" style={{ backgroundColor: status.color }}>
      {status.title}

    </h3>
    <div className={`status-content ${tasksView}`}>
      {children}
      <Link to="new" className="add-task-btn flex-center">
        <Icon icon="material-symbols:add"/>
      </Link>
    </div>
  </div>
  </>);
};

export default StatusTasksWrapper;
