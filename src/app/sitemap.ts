import { MetadataRoute } from "next";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { gql } from "@apollo/client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dentalplacerd.com";

const GET_CASE_STUDIES = gql`
	query getCaseStudies {
		caseStudies {
			edges {
				node {
					slug
				}
			}
		}
	}
`;

const GET_SERVICES = gql`
	query getServicesInfo {
		services(first: 100) {
			edges {
				node {
					slug
				}
			}
		}
	}
`;

async function getDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
	try {
		const client = getClient();

		const [caseStudiesRes, servicesRes] = await Promise.all([
			client.query({ query: GET_CASE_STUDIES }),
			client.query({ query: GET_SERVICES }),
		]);

		const caseStudies = caseStudiesRes.data?.caseStudies?.edges || [];
		const services = servicesRes.data?.services?.edges || [];

		const dynamicRoutes: MetadataRoute.Sitemap = [
			...caseStudies.map((item: { node: { slug: string } }) => ({
				url: `${baseUrl}/case-studies/${item.node.slug}`,
				lastModified: new Date().toISOString().split("T")[0],
				changeFrequency: "monthly" as const,
				priority: 0.7,
			})),
			...services.map((item: { node: { slug: string } }) => ({
				url: `${baseUrl}/services/${item.node.slug}`,
				lastModified: new Date().toISOString().split("T")[0],
				changeFrequency: "monthly" as const,
				priority: 0.8,
			})),
		];

		return dynamicRoutes;
	} catch (error) {
		console.error("Error fetching dynamic routes for sitemap:", error);
		return [];
	}
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const dynamicRoutes = await getDynamicRoutes();

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date().toISOString().split("T")[0],
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/contact-us`,
			lastModified: new Date().toISOString().split("T")[0],
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date().toISOString().split("T")[0],
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/team`,
			lastModified: new Date().toISOString().split("T")[0],
			changeFrequency: "monthly",
			priority: 0.7,
		},
	];

	return [...staticRoutes, ...dynamicRoutes];
}
