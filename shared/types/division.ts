import { Asset } from "./asset";
import { Organization } from "./organization";
import { UserGroup } from "./organization";

export interface Division {
    id: string;
    externalId?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    name: string;
    description?: string;
    imageUrl?: string;
    organizationId: string;
    organization: Organization;
    parentId?: string;
    parent?: Division;
    children: Division[];
    locations: Location[];
    assets: Asset[];
    userGroups: UserGroup[];
}
