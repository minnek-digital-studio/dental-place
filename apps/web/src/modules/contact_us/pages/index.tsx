import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Footer from "@/modules/common/components/footer";
import ContactCard from "../components/contact-card";
import HeroSection from "../components/hero-section";
import GoogleMaps from "../components/google-maps";
import ContactForm from "../components/contact-form";
import ContactUsData from "../data/contact-us.json";

const ServicesPage = () => {
    return (
        <>
            <HeroSection />
            <main className="absolute w-full -translate-y-36 md:-translate-y-48">
                <section className="container max-w-[1430px] mb-20">
                    <div
                        className={cn(
                            "flex flex-col md:flex-row h-full bg-white px-10 py-8 gap-14 shadow-sm shadow-card rounded-3xl",
                        )}
                    >
                        <header className="w-full h-[216px] md:w-[380px] md:h-[656px]">
                            <GoogleMaps src={ContactUsData.embedMapUrl} />
                        </header>
                        <ContactForm />
                    </div>
                </section>
                <section className="container max-w-[1430px] mb-20">
                    <div className="flex flex-row flex-wrap gap-10 lg:gap-6 justify-between mx-10">
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

export default ServicesPage;
