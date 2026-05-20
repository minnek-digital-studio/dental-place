import { IconByName } from "@ui/components/icons";
import { cn } from "@ui/lib/utils";

type WhatsAppFloatingButtonProps = {
    href?: string;
    className?: string;
};

const defaultHref = "https://wa.me/18095818686?text=Hola%2C%20quiero%20agendar%20una%20cita";

const WhatsAppFloatingButton = ({
    href = defaultHref,
    className,
}: WhatsAppFloatingButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp"
            className={cn(
                "fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_14px_34px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
                "max-md:bottom-4 max-md:right-4 max-md:px-3 max-md:py-3",
                className,
            )}
        >
            <IconByName name="WhatsApp" size={24} />
            <span className="hidden text-sm font-semibold md:inline">
                WhatsApp
            </span>
        </a>
    );
};

export default WhatsAppFloatingButton;
