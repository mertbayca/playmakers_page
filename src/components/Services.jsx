import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { BottomLine } from "./design/Hero";
import { service1, service2, service3, check } from "../assets";
import { playmakersServices, playmakersServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
} from "./design/Services";

const Services = () => {
  return (
    <Section>
      <div className="container">
        <Heading
          title="TRANSFORMIERE DEINE DIGITALE VERMARKTUNG"
          text="Das Internet hat eine globale Reichweite, was es Unternehmen ermöglicht, potenziell Milliarden von Menschen auf der ganzen Welt zu erreichen"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Playmakers"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-10 max-w-[17rem] ml-auto p-4 rounded-lg bg-black bg-opacity-80 sm:bg-black sm:bg-opacity-60 md:bg-transparent md:bg-opacity-0">
              <h4 className="h4 mb-4">Lorem Ipsum</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Lorem impsum dolor sit amet.
              </p>
              <ul className="body-2">
                {playmakersServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <div className="ml-4">
                      <p className="mb-1 font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="playmakers"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">UNSERE WERTE</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Inspirierendes Leadership, Zusammenarbeit, Globaler Blick, Kreativität, Innovation, Kundenorientierung
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] lg:flex">
              <div className="py-12 px-4 xl:px-8 lg:w-1/2">
                <h4 className="text-xl font-bold mb-4" style={{ color: '#FF4343' }}>Globaler Blick:</h4>
                <p className="text-base mb-6 text-n-3">
                  Berücksichtigung globaler Trends und Märkte, um internationale Kunden effektiv zu unterstützen und grenzüberschreitende Chancen zu nutzen.
                </p>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#FF4343' }}>Inspirierendes Leadership:</h4>
                <p className="text-base mb-6 text-n-3">
                  Förderung von inspirierendem Leadership, das Mitarbeiter dazu ermutigt, ihr volles Potenzial auszuschöpfen.
                </p>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#FF4343' }}>Zusammenarbeit:</h4>
                <p className="text-base mb-6 text-n-3">
                  Both the designer’s and developer’s needs are important to Specify. Creating autonomously but working collaboratively.
                </p>
              </div>

              <div className="py-12 px-4 xl:px-8 lg:w-1/2">
                <h4 className="text-xl font-bold mb-4" style={{ color: '#FF4343' }}>Innovation:</h4>
                <p className="text-base mb-6 text-n-3">
                  Die Bereitschaft, kontinuierlich neue Ideen, Ansätze und Technologien zu erforschen und einzusetzen, um innovative Lösungen zu finden.
                </p>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#FF4343' }}>Kundenorientierung:</h4>
                <p className="text-base mb-6 text-n-3">
                  Ein Fokus darauf, den Kunden in den Mittelpunkt aller Bemühungen zu stellen und ihre Bedürfnisse und Ziele zu verstehen, um maßgeschneiderte Lösungen anzubieten.
                </p>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#FF4343' }}>Kreativität:</h4>
                <p className="text-base text-n-3">
                  Take advantage of our open source parsers to transform your design tokens and assets for all your platforms. You have full control over your design data.
                </p>
              </div>
            </div>

          </div>

          <Gradient />
        </div>
        <div className="flex justify-center items-center mt-4">
          <Button href="/pricing" white>
          KONTAKTIERE UNS HIER
          </Button>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Services;
