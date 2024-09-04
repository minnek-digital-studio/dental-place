import WhyUsSection from "@/modules/home/components/whyus-section";
import AboutSection from "@/modules/home/components/about-section";
import LetUsHelpSection from "@/modules/common/components/lethelp-section";
import HeroSmile from "@/modules/team/components/hero-section";
import CallUs from "@/modules/services/components/card-action";

const components = {
    "why-us": WhyUsSection,
    about: AboutSection,
    "let-help": LetUsHelpSection,
    "smile-hero": HeroSmile,
    "call-us": CallUs,
};

export type ComponentType = keyof typeof components;

export const ComponentByType = (type: ComponentType) => {
    return components[type];
};
