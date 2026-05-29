"use server";

import {
	type GetContactPageQuery,
	GetContactPageDocument,
} from "@/graphql/generated/graphql";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";

export type ContactPageInfo = {
	embedMapUrl: string | null;
	headquarters: {
		title: string | null;
		url: string | null;
		target: string | null;
	} | null;
	email: {
		title: string | null;
		url: string | null;
		target: string | null;
	} | null;
	phoneNumber: {
		title: string | null;
		url: string | null;
		target: string | null;
	} | null;
};

export const getContactPageInfo = async (): Promise<ContactPageInfo> => {
	const client = getClient();
	const { data } = await client.query<GetContactPageQuery>({
		query: GetContactPageDocument,
	});

	const contactSettings = data?.page?.contactPageSettings;
	const contactCards = contactSettings?.contactCards;

	return {
		embedMapUrl: contactSettings?.maps?.googleMapsIframeUrl ?? null,
		headquarters: contactCards?.location ?? null,
		email: contactCards?.email ?? null,
		phoneNumber: contactCards?.phoneNumber ?? null,
	};
};
