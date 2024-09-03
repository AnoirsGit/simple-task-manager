import { ITask } from "../../entities/task/task.model";
export const TASKS_MOCKS: ITask[] = [
    {
        id: "1",
        parentId: null,
        title: "Task 1",
        description: "Description for Task 1",
        statusId: "status1"
    },
    {
        id: "2",
        parentId: null,
        title: "Task 2",
        description: "Description for Task 2",
        statusId: "status2"
    },
    {
        id: "3",
        parentId: null,
        title: "Task 3",
        description: "Description for Task 3",
        statusId: "status3"
    },
    {
        id: "4",
        parentId: null,
        title: "Task 4",
        description: "Description for Task 4",
        statusId: "status2"
    },
    {
        id: "5",
        parentId: null,
        title: "Task 5",
        description: "Description for Task 2",
        statusId: "status1"
    },
    {
        id: "6",
        parentId: "2",
        title: "Task 6",
        description: "Description for Task 3",
        statusId: "status2"
    },
    {
        id: "7",
        parentId: "1",
        title: "Task 7",
        description: "Description for Task 4",
        statusId: "status4"
    },
    // New tasks
    {
        id: "8",
        parentId: "3",
        title: "Task 8",
        description: "Description for Task 8",
        statusId: "status3"
    },
    {
        id: "9",
        parentId: null,
        title: "Task 9",
        description: "Description for Task 9",
        statusId: "status1"
    },
    {
        id: "10",
        parentId: null,
        title: "Task 10",
        description: "Description for Task 10",
        statusId: "status4"
    },
    {
        id: "11",
        parentId: "5",
        title: "Task 11",
        description: "Description for Task 11",
        statusId: "status2"
    },
    {
        id: "12",
        parentId: "4",
        title: "Task 12",
        description: "Description for Task 12",
        statusId: "status1"
    },
    {
        id: "13",
        parentId: null,
        title: "Task 13",
        description: "Description for Task 13",
        statusId: "status3"
    },
    {
        id: "14",
        parentId: "6",
        title: "Task 14",
        description: "Description for Task 14",
        statusId: "status2"
    },
    {
        id: "15",
        parentId: null,
        title: "Task 15",
        description: "Description for Task 15",
        statusId: "status4"
    }
];
