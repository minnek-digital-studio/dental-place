"use client";
import { useModalStore } from "../stores/useModalStore";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@ui/components/dialog";
import { Image } from "@/modules/common/components/image";
import { Button } from "@ui/components/button";
import { cn } from "@ui/lib/utils";
import Link from "@/modules/common/components/link";
import { IconByName } from "@ui/components/icons";
import { Typography } from "@ui/components/typography";

const MemberModal = ({ className: _className, children: _children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const { member, isOpen, closeModal } = useModalStore((state) => state);

    if (!member) {
        return null;
    }

    const {
        name,
        education,
        educationtitle,
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
            <DialogContent
                aria-describedby={`Details Team Member`}
                className="container max-w-screen-lg gap-10 py-20 px-12 max-h-full md:max-h-[90dvh] overflow-y-auto"
                {...props}
            >
                <DialogHeader className="md:flex-row gap-6 items-center">
                    <picture className="bg-black rounded-full max-w-40">
                        <Image {...img} />
                    </picture>
                    <div className="flex flex-col gap-1 max-md:items-center text-center md:text-left">
                        <DialogTitle asChild>
                            <Typography as="h2" className="text-lg lg:text-lg">
                                {name}
                            </Typography>
                        </DialogTitle>
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
                        <div
                            className="font-noto-sans text-black text-lg"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    )}

                    <div className="flex flex-col gap-3 md:gap-7 max-md:text-center ">
                        {educationtitle && (
                            <Typography as="h3" className="mt-6">
                                {educationtitle}
                            </Typography>
                        )}
                        <div className="flex flex-col gap-3 md:gap-7 max-md:items-center max-md:justify-center">
                            {education &&
                                education.map((item) => (
                                    <article
                                        className="flex flex-col md:flex-row gap-5 md:items-center max-md:items-center max-md:justify-center"
                                        key={`${id}-${item.title}`}
                                    >
                                        <div
                                            aria-hidden
                                            className="items-center justify-center rounded-full text-sm ring-offset-background flex gap-2 bg-primary size-max min-h-8 min-w-8 p-4"
                                        >
                                            <IconByName {...item.button.icon} />
                                        </div>
                                        <div>
                                            <Typography
                                                as="h4"
                                                className="text-md lg:text-md"
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
