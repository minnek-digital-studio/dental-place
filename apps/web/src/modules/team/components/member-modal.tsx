"use client";
import { useModalStore } from "../stores/useModalStore";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@minnek/ui/components/dialog";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { cn } from "@minnek/ui/lib/utils";
import Link from "next/link";
import { IconByName } from "@minnek/ui/icons";
import { de } from "date-fns/locale";
import { Typography } from "@minnek/ui/components/typography";

interface MemberModalProps extends React.HTMLAttributes<HTMLDivElement> {}

const MemberModal = ({ className, children, ...props }: MemberModalProps) => {
    const { member, isOpen, closeModal } = useModalStore((state) => state);

    if (!member) {
        return null;
    }

    const {
        name,
        button,
        education,
        educationTitle,
        id,
        img,
        specialty,
        socialLinks,
        description,
    } = member;

    return (
        <Dialog
            open={isOpen}
            modal={true}
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    closeModal();
                }
            }}
        >
            <DialogContent className="container max-w-screen-lg gap-10 py-20 px-12 max-h-full overflow-y-auto">
                <DialogHeader className="md:flex-row gap-6 items-center">
                    <picture className="bg-black rounded-full max-w-40">
                        <Image {...img} />
                    </picture>
                    <div className="flex flex-col gap-1 max-md:items-center text-center md:text-left">
                        <Typography as="h2" className="text-lg lg:text-lg">
                            {name}
                        </Typography>
                        <Typography as="p" className="text-dark-grey">
                            {specialty}
                        </Typography>
                        <div className="flex gap-3 mt-2">
                            {socialLinks.map(
                                ({ link, icon, text, className, ...props }) => (
                                    <Button
                                        asChild
                                        {...props}
                                        key={`${id}-${text}`}
                                        aria-label={text}
                                        className={cn(
                                            "size-[2.8rem]",
                                            className,
                                        )}
                                    >
                                        <Link key={text} href={link}>
                                            <IconByName {...icon} />
                                        </Link>
                                    </Button>
                                ),
                            )}
                        </div>
                    </div>
                </DialogHeader>
                <main className="mt-2">
                    {description && (
                        <Typography as="p" className="text-lg">
                            {description}
                        </Typography>
                    )}

                    <div className="flex flex-col gap-3">
                        {educationTitle && (
                            <Typography as="h3" className="mt-6">
                                {educationTitle}
                            </Typography>
                        )}
                        <div className="flex flex-col gap-3">
                            {education &&
                                education.map((item) => (
                                    <article
                                        className="flex flex-col md:flex-row gap-5 md:items-center"
                                        key={`${id}-${item.title}`}
                                    >
                                        <Button
                                            {...item.button}
                                            aria-hidden
                                            className={cn(
                                                "p-3",
                                                button.className,
                                            )}
                                        >
                                            <IconByName {...item.button.icon} />
                                        </Button>
                                        <div>
                                            <Typography
                                                as="h4"
                                                className="text-lg lg:text-lg"
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                as="p"
                                                className="text-dark-grey"
                                            >
                                                {item.institution}
                                            </Typography>
                                        </div>
                                    </article>
                                ))}
                        </div>
                    </div>
                </main>
            </DialogContent>
        </Dialog>
    );
};

export default MemberModal;
