import { Asset } from "./asset";
import { Task } from "./task";
import { User } from "./user";
import { Organization } from "./organization";
import { Form } from "./form";
import { GuardTour } from "./guardTour";

export interface Report {
    id: string;
    externalId?: string;
    createdAt: Date;
    publishedAt?: Date;
    updatedAt: Date;
    deletedAt?: Date;
    title: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    custom?: any;
    imageUrl?: string;
    organizationId: string;
    organization: Organization;
    createdById: string;
    createdBy: User;
    formId: string;
    form: Form;
    locationId?: string;
    location?: Location;
    assetId?: string;
    asset?: Asset;
    originTaskId?: string;
    originTask?: Task;
    originGuardTourId?: string;
    originGuardTour?: GuardTour;
    statusUpdates: ReportStatusUpdate[];
    files: File[];
}

export interface ReportStatusUpdate {
    id: string;
    createdAt: Date;
    status: string;
    createdById: string;
    createdBy: User;
    reportId: string;
    report: Report;
}
