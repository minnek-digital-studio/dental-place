import Layout from "@/modules/common/layouts/layout";
import { Metadata } from "next";
import { Typography } from "@minnek/ui/components/typography";
import { Button } from "@minnek/ui/components/button";
import Link from "next/link";
import { IconByName, SadTooth } from "@minnek/ui/icons";
import NotFound, { type NotFoundProps } from "../components/not-found";
import { ButtonType } from "@/modules/common/types";
import NotFoundInfo from "@/modules/not-found/data/not-found.json";

export const metadata: Metadata = {
    title: "Not Found | Dental Place",
    description: "Page not found",
};

const NotFoundPage = () => {
    return (
        <Layout>
            <NotFound {...(NotFoundInfo as NotFoundProps)} />
        </Layout>
    );
};

export default NotFoundPage;
