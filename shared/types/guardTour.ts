import { User } from "./user";
import { Organization } from "./organization";

export interface GuardTourSpec {
    id: string;
    createdAt: Date;
    publishedAt?: Date;
    updatedAt: Date;
    deletedAt?: Date;
    name: string;
    instructions?: string;
    ordered: boolean;
    days: any[];
    schedule: any[];
    checkpoints: any[];
    organizationId: string;
    organization: Organization;
    createdById: string;
    createdBy: User;
    locationId: string;
    location: Location;
    guardTours: GuardTour[];
}

export interface GuardTour {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    occurrenceTime: string;
    checkpoints: any[];
    endedAt?: Date;
    skippedAt?: Date;
    skippedReason?: string;
    guardTourSpecId: string;
    guardTourSpec: GuardTourSpec;
    createdById: string;
    createdBy: User;
    reports: Report[];
}
