import { NavBar } from "@/modules/common/components/navbar";

const HeroSection = () => {
    return (
        <div className="h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat bg-[url('/images/contact-us-hero.webp')]">
            <NavBar variant="transparent" align="center" text={"md"} />
            <h1 className="text-white font-bold text-5xl md:text-6xl text-center mt-16 md:mt-20">
                Contáctanos
            </h1>
        </div>
    );
};

export default HeroSection;
