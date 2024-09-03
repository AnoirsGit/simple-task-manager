import React, { useEffect, useState } from "react";
import { useTaskContext } from "../../app/providers/task-provider";
import { useConfigContext } from "../../app/providers/config-provider";

import "./index.css";
import TaskCard from "../../entities/task/task-card";
import StatusTasksWrapper from "../../features/status-tasks-wrapper/status-tasks-wrapper";

import { Outlet } from "react-router-dom";
import { STATUSES_MOCKS } from "../../shared/mocks/statuses-mocks";
import { ITask } from "../../entities/task/task.model";

function TasksPage() {
  const { tasks, setMocks } = useTaskContext(); // Ensure deleteTask and updateTask are provided
  const { config, setConfig } = useConfigContext();
  const [groupedTasks, setGroupedTasks] = useState<Record<string, ITask[]>>({});
  const [tasksView, setTasksView] = useState(config.tasksView || "list");

  useEffect(() => setMocks(), []);

  useEffect(() => {
    if (config.tasksView !== tasksView) {
      setConfig("tasksView", tasksView);
    }
  }, [tasksView, config.tasksView, setConfig]);

  const handleToggle = () => {
    setTasksView((prev: string) => (prev === "kanban" ? "list" : "kanban"));
  };

  // Group tasks by status
  const groupTasks = (tasks: ITask[] = []) => {
    const tempGrouped = STATUSES_MOCKS.reduce((acc, status) => {
      acc[status.id] = tasks.filter((task) => task.statusId === status.id);
      return acc;
    }, {} as Record<string, ITask[]>);
    setGroupedTasks(tempGrouped);
  };

  useEffect(() => {
    console.log("Tasks updated:", tasks);
    groupTasks(tasks);
  }, [tasks]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <label>
          Tasks View Kanban?
          <input
            className="mx-2"
            type="checkbox"
            checked={tasksView === "kanban"}
            onChange={handleToggle}
          />
        </label>

        <div className={`tasks-board ${tasksView}`}>
          {STATUSES_MOCKS.map((status) => (
            <StatusTasksWrapper
              key={status.id}
              status={status}
              tasksView={tasksView}
            >
              {groupedTasks[status.id]?.filter(task => !task.parentId ).map((task) => (
                <TaskCard
                  key={task.id}
                  tasksView={tasksView}
                  task={task}
                />
              ))}
            </StatusTasksWrapper>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default TasksPage;
