import { Card, CardContent, CardHeader } from "@minnek/ui/components/card";
import { IconByName, IconsName } from "@minnek/ui/components/icons/index";
import { Typography } from "@minnek/ui/components/typography";

export interface ContactCardProps {
    title: string;
    children: React.ReactNode;
    iconName: IconsName;
}

const ContactCard = ({ title, children, iconName }: ContactCardProps) => {
    return (
        <Card className="flex flex-row shadow-none min-h-28">
            <CardHeader className="p-0 mr-4">
                <div className="flex justify-center items-center w-14 h-14 rounded-full bg-primary">
                    <IconByName name={iconName} size={28} />
                </div>
            </CardHeader>
            <CardContent className="px-0">
                <Typography as="h3" className="text-xl lg:text-xl my-2">
                    {title}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
};

export default ContactCard;
