import React from "react";
import Layout from "@/modules/common/layouts/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Express Braces",
    description: "Express Braces",
};

const ExpressBracesPage = async () => {
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <h1>Hola</h1>
        </Layout>
    );
};

export default ExpressBracesPage;
