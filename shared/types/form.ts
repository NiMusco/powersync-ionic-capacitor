import { Asset } from "./asset";

export enum FormType {
    REPORT = "REPORT",
    LOCATION = "LOCATION",
    ASSET = "ASSET"
}

export interface Form {
    id: string;
    externalId?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    name: string;
    description?: string;
    imageUrl?: string;
    schema?: any;
    settings?: any;
    locations: Location[];
    assets: Asset[];
    reports: Report[];
}
