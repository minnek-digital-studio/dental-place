import { Card, CardContent, CardHeader } from "@ui/components/card";
import { IconByName, IconsName } from "@ui/components/icons";
import { Typography } from "@ui/components/typography";

export interface ContactCardProps {
    title: string;
    children: React.ReactNode;
    iconName: IconsName;
}

const ContactCard = ({ title, children, iconName }: ContactCardProps) => {
    return (
        <Card className="flex flex-row shadow-none w-max">
            <CardHeader className="p-0 mr-4">
                <div className="flex justify-center items-center w-14 h-14 rounded-full bg-primary">
                    <IconByName name={iconName} size={28} />
                </div>
            </CardHeader>
            <CardContent className="px-0 flex flex-col">
                <Typography
                    as="h3"
                    className="text-xl lg:text-xl my-2 lg:text-nowrap"
                >
                    {title}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
};

export default ContactCard;
