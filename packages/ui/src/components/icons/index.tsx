import { type LucideProps, icons } from 'lucide-react';
import { CleanTooth } from './cleanTooth';
import { ServiceTooth } from './serviceTooth';
import { CarieTooth } from './carieTooth';

export * from './cleanTooth';
export * from './serviceTooth';
export * from './carieTooth';

const customIcons = {
    CleanTooth,
    ServiceTooth,
    CarieTooth,
};

export type IconsName = keyof typeof icons | keyof typeof customIcons;

interface IconByNameProps extends Omit<LucideProps, 'ref'> {
    name?: IconsName;
}

export const IconByName = ({ name = 'X', size, ...props }: IconByNameProps) => {

    if (name in customIcons) {
        const Icon = customIcons[name as keyof typeof customIcons];
        const IconElement = <Icon size={size} {...props} />;

        return IconElement;
    }

    const Icon = icons[name as keyof typeof icons];
    const IconElement = <Icon size={size} {...props} />;

    return IconElement;
};

export * from 'lucide-react';

