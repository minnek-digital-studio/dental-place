import React from "react";
import Footer from "@/modules/common/components/footer";
import {
    NavBar,
    type NavbarVariants,
} from "@/modules/common/components/navbar";
import { cn } from "@minnek/ui/lib/utils";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    navbarVariant?: NavbarVariants;
}

const Layout = ({
    children,
    className,
    navbarVariant,
    ...props
}: LayoutProps) => {
    return (
        <>
            <NavBar {...navbarVariant} />
            <div
                className={cn("flex flex-col w-full gap-10", className)}
                {...props}
            >
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
