import Layout from "@/modules/common/layouts/layout";
import { Metadata } from "next";
import NotFound, { type NotFoundProps } from "../components/not-found";
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
