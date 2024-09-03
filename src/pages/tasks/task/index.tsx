import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useTaskContext } from "../../../app/providers/task-provider";
import { ITask } from "../../../entities/task/task.model";
import { Icon } from "@iconify/react";
import ModalHeader from "../../../shared/ui/modal/layout/modal-header-wrapper";
import ModalContent from "../../../shared/ui/modal/layout/modal-content-wrapper";
import ModalFooter from "../../../shared/ui/modal/layout/modal-footer-wrapper";
import "./index.css";

const TaskPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [showSubtasks, setShowSubtasks] = useState(false);
  const [task, setTask] = useState<ITask | undefined>();
  const [subtasks, setSubtasks] = useState<ITask[]>([]);
  const { getTaskById, getTaskByParentId, deleteTask } = useTaskContext();

  const navigate = useNavigate();

  useEffect(() => setTask(getTaskById(id)), [getTaskById, id]);
  useEffect(
    () => setSubtasks(getTaskByParentId(id) || []),
    [getTaskById, getTaskByParentId, id]
  );

  const handleClose = () => navigate('/tasks');
  const handleToggleSubtasks = () => setShowSubtasks((prev) => !prev);

  return (
    <>
      <ModalHeader>
        <h3 className="text-xl">{task?.title}</h3>
        <div className="flex text-xl items-center gap-3">
          {searchParams.get("parentId") && (
            <Link
              to={`/tasks/${searchParams.get("parentId")}`}
              className="flex gap-1 text-lg"
            >
              <div className="">parent task Id </div>
              <Icon icon="basil:forward-solid" className="text-2xl" />
            </Link>
          )}
          <Link to={`../form/${task?.id}`}>
            <Icon icon="material-symbols:edit-outline" />
          </Link>

          <Icon
            onClick={() => deleteTask(task?.id)}
            icon="material-symbols:delete-outline"
          />
        </div>
      </ModalHeader>
      <ModalContent>
        <div className="flex flex-col justify-between">
          <div className="min-h-32 max-h-60">{task?.description}</div>
          {subtasks.length > 0 && (
            <button
              onClick={handleToggleSubtasks}
              className="flex flex-center gap-2 w-max mt-2 mb-4"
            >
              <p>subtasks</p>
              <Icon icon="mingcute:down-fill" className="text-3xl" />
            </button>
          )}

          {showSubtasks && subtasks.length > 0 && (
            <div className="subtasks-list mt-4">
              {subtasks.map((subtask) => (
                <div key={subtask.id} className="subtask-item">
                  <Link to={`/tasks/${subtask.id}?parentId=${task?.id}`}>
                    <h4 className="text-lg">{subtask.title}</h4>
                  </Link>
                  <p className="flex-grow">{subtask.description}</p>
                  <div className="subtask-actions">
                    <Link to={`../form/${subtask?.id}?parentId=${task?.id}`}>
                      <Icon icon="material-symbols:edit-outline" />
                    </Link>

                    <Icon
                      onClick={() => deleteTask(subtask?.id)}
                      icon="material-symbols:delete-outline"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {!searchParams.get("parentId") && (
            <Link
              to={`/tasks/new?parentId=${task?.id}`}
              className="create-subtask-btn"
            >
              <div className="">Create subtask</div>
              <div className="text-2xl">
                <Icon icon="material-symbols:add" />
              </div>
            </Link>
          )}
        </div>
      </ModalContent>

      <ModalFooter>
        <button className="close-btn flex-center" onClick={handleClose}>
          {" "}
          close
        </button>
      </ModalFooter>
    </>
  );
};

export default TaskPage;
