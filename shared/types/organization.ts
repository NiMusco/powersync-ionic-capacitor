import { Asset } from "./asset";
import { GuardTourSpec } from "./guardTour";
import { Task, TaskList } from "./task";
import { Division } from "./division";
import { User } from "./user";

export interface Organization {
    id: string;
    externalId?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    name: string;
    code: string;
    description?: string;
    imageUrl?: string;
    createdById: string;
    createdBy: User;
    userGroups: UserGroup[];
    memberships: Membership[];
    divisions: Division[];
    files: File[];
    reports: Report[];
    locations: Location[];
    assets: Asset[];
    guardTourSpecs: GuardTourSpec[];
    taskLists: TaskList[];
    tasks: Task[];
}

export interface Membership {
    id: string;
    externalId?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    isActive: boolean;
    role: MembershipRole;
    custom?: any;
    userId: string;
    user: User;
    organizationId: string;
    organization: Organization;
    userGroupId: string;
    userGroup: UserGroup;
}

export enum MembershipRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    REGULAR = "REGULAR"
}

export interface UserGroup {
    id: string;
    externalId?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    name?: string;
    description?: string;
    imageUrl?: string;
    organizationId: string;
    organization: Organization;
    parentId?: string;
    parent?: UserGroup;
    children: UserGroup[];
    memberships: Membership[];
    divisions: Division[];
}
