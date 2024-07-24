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
        <Card className="flex flex-row shadow-none w-[400px] min-h-28">
            <CardHeader className="p-0 mr-4">
                <div className="w-20 h-20 rounded-full bg-primary p-6">
                    <IconByName name={iconName} size={35} />
                </div>
            </CardHeader>
            <CardContent className="px-0">
                <Typography as="h3" className="text-xl lg:text-xl mb-3">
                    {title}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
};

export default ContactCard;
