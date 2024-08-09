import { Metadata } from "next";
import Container from "@/modules/common/components/container";
import MoreStories from "@/modules/common/components/more-stories";
import HeroPost from "@/modules/common/components/hero-post";
import Intro from "@/modules/common/components/intro";
import Layout from "@/modules/common/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import {
    GetServicesDocument,
    GetServicesQuery,
} from "@/graphql/generated/graphql";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export default async function HomePage() {
    const { data } = await getClient().query<GetServicesQuery>({
        query: GetServicesDocument,
    });
    return (
        <Layout preview>
            <Container>
                <Intro />

                {data.services &&
                    data.services.edges.map(({ node: post }) => {
                        return <div key={post.slug}>{post.title}</div>;
                    })}
            </Container>
        </Layout>
    );
}
