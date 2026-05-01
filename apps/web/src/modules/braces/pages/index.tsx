import { getBracesExpressPageInfo } from "@/modules/braces/actions/braces.actions";
import BracesPhotosSection, {
    type BracesPhotosSectionProps,
} from "@/modules/braces/components/braces-photos-section";
import HelpFormSection, {
    type HelpFormSectionProps,
} from "@/modules/braces/components/help-form-section";
import HeroSection, {
    type HeroSectionProps,
} from "@/modules/braces/components/hero-section";
import CallToAction from "@/modules/common/components/CallToAction";
import Layout from "@/modules/common/layouts/layout";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
    const { seo } = await getBracesExpressPageInfo();

    return {
        ...seo,
    };
}

const ExpressBracesPage = async () => {
    const { HeroInfo, BracesPhotosInfo, callToActions, helpFormInfo } =
        await getBracesExpressPageInfo();
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
                align: "center",
                text: "md",
            }}
        >
            <HeroSection {...(HeroInfo as HeroSectionProps)} />
            {callToActions.map((cta, index) => (
                <CallToAction {...cta} key={`${cta.title}-${index}`} />
            ))}
            <BracesPhotosSection
                {...(BracesPhotosInfo as BracesPhotosSectionProps)}
            />
            <HelpFormSection {...(helpFormInfo as HelpFormSectionProps)} />
        </Layout>
    );
};

export default ExpressBracesPage;
