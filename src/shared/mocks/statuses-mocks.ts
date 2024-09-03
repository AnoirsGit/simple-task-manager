import { IStatus } from "../../entities/status/status.model";

export const STATUSES_MOCKS: IStatus[] = [
    {
        id: "status1",
        color: "#FF5733", // Example color
        title: "Not Started",
        priority: 1
    },
    {
        id: "status2",
        color: "#33cc33", // Example color
        title: "In Progress",
        priority: 2
    },
    {
        id: "status3",
        color: "#3357FF", // Example color
        title: "Under Review",
        priority: 3
    },
    {
        id: "status4",
        color: "#ff9933", // Example color
        title: "Completed",
        priority: 4
    }
];
