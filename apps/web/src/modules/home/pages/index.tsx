import { Metadata } from "next";
import Container from "@/modules/common/components/container";
import Layout from "@/modules/common/components/layout";
import { CMS_NAME } from "@/lib/constants";
import ServiceSection, {
    ServiceSectionProps,
} from "../components/services-section";
import Services from "../data/services.json";

import InstagramSection, {
    type InstagramSectionProps,
} from "../components/instagram-section";
import InstagramInfo from "../data/instagram.json";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export async function HomePage({ preview = false }) {
    return (
        <Layout preview={preview}>
            <Container>
                <ServiceSection {...(Services as ServiceSectionProps)} />
                <InstagramSection
                    {...(InstagramInfo as InstagramSectionProps)}
                />
            </Container>
        </Layout>
    );
}
