import { Asset } from "./asset";
import { User } from "./user";
import { Organization } from "./organization";

export interface File {
    id: string;
    externalId?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    name: string;
    description?: string;
    mimeType: string;
    size: number;
    url: string;
    organizationId: string;
    organization: Organization;
    createdById: string;
    createdBy: User;
    locationId?: string;
    location?: Location;
    assetId?: string;
    asset?: Asset;
    reportId?: string;
    report?: Report;
}
