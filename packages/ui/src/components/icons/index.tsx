import { type LucideProps, icons } from "lucide-react";
import { CleanTooth } from "./cleanTooth";
import { ServiceTooth } from "./serviceTooth";
import { CarieTooth } from "./carieTooth";
import { Youtube } from "./youtube";
import { InstagramColored } from "./instagramColored";
import { SpainFlag } from "./spainFlag";
import { UsaFlag } from "./usaFlag";
import { Comma } from "./comma";

export * from "./cleanTooth";
export * from "./serviceTooth";
export * from "./carieTooth";
export * from "./instagramColored";
export * from "./spainFlag";
export * from "./usaFlag";
export * from "./comma";

const customIcons = {
    CleanTooth,
    ServiceTooth,
    CarieTooth,
    Youtube,
    InstagramColored,
    SpainFlag,
    UsaFlag,
    Comma,
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
