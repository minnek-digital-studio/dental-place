import {
    type GetServicesInfoQuery,
    GetServicesInfoDocument,
} from "@/graphql/generated/graphql";

import { mapServicesData } from "@/modules/common/utils/services.map";

import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import Services from "@/modules/home/data/services.json";

export const getServices = async () => {
    const client = getClient();
    const { data } = await client.query<GetServicesInfoQuery>({
        query: GetServicesInfoDocument,
    });

    const ServicesInfo = {
        ...Services,
        items: mapServicesData(data?.services),
    };

    return ServicesInfo;
};
