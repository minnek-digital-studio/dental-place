import { NavBar } from "@/modules/common/components/navbar";
import Footer from "@/modules/common/components/footer";
import NotFoundContent from "@/modules/common/components/not-found-content";

export const dynamic = "force-dynamic";

export default function NotFound() {
    return (
        <>
            <NavBar variant="light-primary" align="center" text="md" />
            <NotFoundContent />
            <Footer />
        </>
    );
}
