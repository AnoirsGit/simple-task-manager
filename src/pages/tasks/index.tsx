import React, { useEffect, useState } from "react";
import { useTaskContext } from "../../app/providers/task-provider";
import { useConfigContext } from "../../app/providers/config-provider";
import TaskCard from "../../entities/task/task-card";

function TasksPage() {
  const { tasks, setMocks } = useTaskContext();
  const { config, setConfig } = useConfigContext();

  const [tasksView, setTasksView] = useState(config.tasksView || "list");

  useEffect(() => setMocks(), [setMocks]);
  useEffect(() => setConfig("tasksView", tasksView), [tasksView, setConfig]);

  const handleToggle = () => {
    setTasksView((prev: string) => (prev === "kanban" ? "list" : "kanban"));
  };

  return (
    <div className="flex flex-col gap-4">
      <label>
        Toggle Tasks View
        <input
          className="mx-2"
          type="checkbox"
          checked={tasksView === "kanban"}
          onChange={handleToggle}
        />
      </label>

      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} tasksView={tasksView} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
