import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Footer from "@/modules/common/components/footer";
import ContactCard from "../components/contact-card";
import HeroSection from "../components/hero-section";
import GoogleMaps from "../components/google-maps";
import ContactForm from "../components/contact-form";
import ContactUsData from "../data/contact-us.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Dental Place",
    description:
        "Contact Dental Place for any inquiries or to book an appointment.",
};

const ContactPage = () => {
    return (
        <>
            <HeroSection />
            <main className="absolute w-full -translate-y-20 md:-translate-y-48">
                <section className="container max-w-[1060px] mb-20 flex flex-col gap-6">
                    <div className="w-full max-h-[30rem] md:w-[380px] md:hidden">
                        <GoogleMaps src={ContactUsData.embedMapUrl} />
                    </div>
                    <div
                        className={cn(
                            "flex flex-col md:flex-row h-full bg-white px-10 py-8 gap-14 shadow-sm shadow-card rounded-3xl",
                        )}
                    >
                        <header className="w-full max-h-[30rem] md:w-[380px] max-md:hidden">
                            <GoogleMaps src={ContactUsData.embedMapUrl} />
                        </header>
                        <ContactForm />
                    </div>
                </section>
                <section className="container max-w-[1060px] mb-20 max-md:hidden flex justify-center">
                    <div className="flex gap-7 justify-between w-full max-w-[900px]">
                        <ContactCard title="Headquaters" iconName="MapPin">
                            <Typography
                                as="p"
                                className="line-clamp-5 leading-[1.8rem]"
                            >
                                {ContactUsData.headquarters}
                            </Typography>
                        </ContactCard>
                        <ContactCard title="Email" iconName="Mail">
                            <Typography
                                as="a"
                                className="line-clamp-5 underline"
                                href={`mailto:${ContactUsData.email}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {ContactUsData.email}
                            </Typography>
                        </ContactCard>
                        <ContactCard title="Phone Number" iconName="Phone">
                            <Typography as="p" className="line-clamp-5">
                                {ContactUsData.phoneNumber}
                            </Typography>
                        </ContactCard>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
};

export default ContactPage;
