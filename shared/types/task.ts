import { Asset } from "./asset";
import { User } from "./user";
import { Organization } from "./organization";

export interface TaskList {
    id: string;
    externalId?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    name: string;
    description?: string;
    dueAt?: Date;
    organizationId: string;
    organization: Organization;
    createdById: string;
    createdBy: User;
    ownedById?: string;
    ownedBy?: User;
    tasks: Task[];
}

export interface Task {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    name: string;
    description?: string;
    dueAt?: Date;
    startedAt?: Date;
    startedLatitude?: number;
    startedLongitude?: number;
    finishedAt?: Date;
    finishedLatitude?: number;
    finishedLongitude?: number;
    cancelledAt?: Date;
    cancelledReason?: string;
    custom?: any;
    latitude?: number;
    longitude?: number;
    todos: any[];
    organizationId: string;
    organization: Organization;
    createdById: string;
    createdBy: User;
    ownedById?: string;
    ownedBy?: User;
    cancelledById?: string;
    cancelledBy?: User;
    taskListId: string;
    taskList: TaskList;
    locationId: string;
    location: Location;
    assetId: string;
    asset: Asset;
    reports: Report[];
}
