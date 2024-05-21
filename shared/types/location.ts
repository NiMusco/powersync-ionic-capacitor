import { Division } from "./division";
import { Task } from "./task";
import { User } from "./user";
import { Organization } from "./organization";
import { Form } from "./form";
import { GuardTourSpec } from "./guardTour";

export interface Location {
    id: string;
    externalId?: string;
    createdAt: Date;
    publishedAt?: Date;
    updatedAt: Date;
    deletedAt?: Date;
    isActive: boolean;
    name: string;
    description?: string;
    address?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
    custom?: any;
    imageUrl?: string;
    organizationId: string;
    organization: Organization;
    formId: string;
    form: Form;
    createdById: string;
    createdBy: User;
    divisionId?: string;
    division?: Division;
    reports: Report[];
    guardTourSpecs: GuardTourSpec[];
    tasks: Task[];
    files: File[];
}
