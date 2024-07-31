import Layout from "@/modules/common/layouts/layout";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Footer from "@/modules/common/components/footer";
import { Metadata } from "next";
import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "@/modules/common/components/lethelp-section";
import LetHelpInfo from "@/modules/case_studies/data/let-us-help.json";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "Meet the team that makes Dental Place possible",
};

const CaseStudiesPage = ({ params }) => {
    const letUsHelp = LetHelpInfo.items.find(
        (item) => item.slug === params.slug,
    );

    if (!letUsHelp) {
        return notFound();
    }

    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <LetUsHelpSection {...(letUsHelp as LetUsHelpSectionProps)} />
        </Layout>
    );
};

export default CaseStudiesPage;
