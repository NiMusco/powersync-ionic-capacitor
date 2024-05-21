import { Organization, Membership } from "./organization";
import { Asset } from "./asset";
import { ReportStatusUpdate } from "./report";
import { GuardTour, GuardTourSpec } from "./guardTour";
import { Task, TaskList } from "./task";

export interface User {
    id: string;
    externalId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    email: string;
    phone?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    permissions: string[];
    organizations: Organization[];
    statusUpdates: UserStatusUpdate[];
    memberships: Membership[];
    files: File[];
    locations: Location[];
    assets: Asset[];
    reports: Report[];
    reportStatusUpdates: ReportStatusUpdate[];
    guardTourSpecs: GuardTourSpec[];
    guardTours: GuardTour[];
    taskListsCreated: TaskList[];
    taskListsOwned: TaskList[];
    tasksCreated: Task[];
    tasksOwned: Task[];
    tasksCancelled: Task[];
}

export enum UserStatus {
    ACTIVE = "ACTIVE",
    BREAK = "BREAK",
    INACTIVE = "INACTIVE"
}

export interface UserStatusUpdate {
    id: string;
    createdAt: Date;
    status: UserStatus;
    userId: string;
    user: User;
}
