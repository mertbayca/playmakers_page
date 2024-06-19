import { triangle, curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[8rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <Button href="/pricing" white>
          Kostenlosen und Unverbindlichen Beratungstermin
          </Button>
          <h1 className="text-4xl font-bold text-purple-600 mb-8 mt-8">
            CHASE THE DREAM, <br /> CHANGE YOUR {` `}
            <span className="inline-block relative">
               GAME{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <img
          src={triangle}
          className="mx-auto mt-8 max-w-xs"
          alt="Animated Triangles"
          />
          <BackgroundCircles />
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Unsere Mission ist es, Unternehmen dabei zu unterstützen, ihre Träume zu 
          verwirklichen und ihr volles Potenzial auszuschöpfen. Wir glauben an die 
          Kraft der Digitalisierung und sind bestrebt, unseren Kunden dabei zu 
          helfen, in einer sich schnell verändernden Welt erfolgreich zu sein.
          </p>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

    </Section>
  );
};

export default Hero;
