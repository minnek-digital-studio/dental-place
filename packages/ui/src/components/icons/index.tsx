import { type LucideProps, icons } from "lucide-react";
import { CleanTooth } from "./cleanTooth";
import { ServiceTooth } from "./serviceTooth";
import { CarieTooth } from "./carieTooth";
import { Youtube } from "./youtube";
import { InstagramColored } from "./instagramColored";
import { SpainFlag } from "./spainFlag";
import { UsaFlag } from "./usaFlag";
import { WhatsApp } from "./whatsApp";
import { Comma } from "./comma";
import { Google } from "./google";
import { ImplantTooth } from "./implantTooth";
import { DentureTooth } from "./denture";
import { BracketsTooth } from "./brackets";
import { Implant2Tooth } from "./implant2Tooth";
import { SmileTooth } from "./smileTooth";

export * from "./cleanTooth";
export * from "./serviceTooth";
export * from "./carieTooth";
export * from "./instagramColored";
export * from "./spainFlag";
export * from "./usaFlag";
export * from "./whatsApp";
export * from "./comma";
export * from "./google";
export * from "./implantTooth";
export * from "./denture";
export * from "./brackets";
export * from "./implant2Tooth";
export * from "./smileTooth";

const customIcons = {
    CleanTooth,
    ServiceTooth,
    CarieTooth,
    Youtube,
    InstagramColored,
    SpainFlag,
    UsaFlag,
    WhatsApp,
    Comma,
    Google,
    ImplantTooth,
    DentureTooth,
    BracketsTooth,
    Implant2Tooth,
    SmileTooth,
};

export type IconsName = keyof typeof icons | keyof typeof customIcons;

export interface IconByNameProps extends Omit<LucideProps, "ref"> {
    name?: IconsName;
}

export const IconByName = ({ name = "X", size, ...props }: IconByNameProps) => {
    if (name in customIcons) {
        const Icon = customIcons[name as keyof typeof customIcons];
        const IconElement = <Icon size={size} {...props} />;

        return IconElement;
    }

    const Icon = icons[name as keyof typeof icons];
    const IconElement = <Icon size={size} {...props} />;

    return IconElement;
};

export * from "lucide-react";
