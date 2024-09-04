import Layout from "@/modules/common/layouts/layout";
import { Metadata } from "next";
import { Typography } from "@minnek/ui/components/typography";
import { Button } from "@minnek/ui/components/button";
import Link from "next/link";
import { SadTooth } from "@minnek/ui/icons";

export const metadata: Metadata = {
    title: "Not Found | Dental Place",
    description: "Page not found",
};

const NotFound = () => {
    return (
        <Layout>
            <section className="flex flex-col w-full items-center justify-center pb-12 gap-9 text-center bg-primary">
                <header className="flex flex-col gap-9 text-center justify-center items-center px-6">
                    <SadTooth className="md:-mb-20 -mt-10 -mb-10 size-56 md:size-96" />
                    <Typography as="h1">
                        Oops, this page doesn't exist!
                    </Typography>
                    <Typography
                        as="p"
                        className="text-lg md:text-lg lg:text-lg max-w-[35rem]"
                    >
                        We couldn't find the page you were looking for. But
                        don't worry, you can head back to the homepage and start
                        fresh.
                    </Typography>
                </header>
                <Button variant={"dark"} size={"xl"} asChild>
                    <Link href="/">Go back to home</Link>
                </Button>
            </section>
        </Layout>
    );
};

export default NotFound;
