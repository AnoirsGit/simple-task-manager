import React, { useEffect, useState } from "react";
import Modal from "../../../shared/ui/modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTaskContext } from "../../../app/providers/task-provider";
import { ITask } from "../../../entities/task/task.model";
import { Icon } from "@iconify/react";
import ModalHeader from "../../../shared/ui/modal/layout/modal-header-wrapper";
import ModalContent from "../../../shared/ui/modal/layout/modal-content-wrapper";
import ModalFooter from "../../../shared/ui/modal/layout/modal-footer-wrapper";

const TaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState<ITask | undefined>();
  const { getTaskById } = useTaskContext();

  const navigate = useNavigate();

  useEffect(() => setTask(getTaskById(id)), []);

  const handleClose = () => navigate(-1);

  return (
    <>
          <ModalHeader>
            <h3 className="text-xl">{task?.title}</h3>
            <div className="flex text-lg gap-1">
              <Link to={`../form/${task?.id}`}>
                <Icon icon="material-symbols:edit-outline" />
              </Link>
              
              <Icon icon="material-symbols:delete-outline" />
            </div>
          </ModalHeader>
          <ModalContent>sdf</ModalContent>
          <ModalFooter>
            <button
              className="px-4 py-1 text-lg bg-main-purple rounded-xl flex-center"
              onClick={handleClose}
            >
              {" "}
              close
            </button>
          </ModalFooter>
    </>
  );
};

export default TaskPage;
