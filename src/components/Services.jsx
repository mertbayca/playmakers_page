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
      <Gradient />
      <div className="container">
        <Heading
          title="TRANSFORMIERE DEINE DIGITALE VERMARKTUNG"
          text="Das Internet hat eine globale Reichweite, was es Unternehmen ermöglicht, potenziell Milliarden von Menschen auf der ganzen Welt zu erreichen"
        />
        <Heading
          title="4 Schritte zum Projektstart"
        />
          <div className="container mx-auto px-4 pb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative flex items-center">
                <div className="bg-n-14 w-full h-20 rounded-full absolute left-0 top-0 transform translate-x-2 translate-y-2"></div>
                <div className="bg-n-14 w-20 h-20 rounded-full flex items-center justify-center text-2xl translate-x-2 translate-y-2 font-bold text-white relative z-10">01</div>
                <div className="bg-white w-full h-20 rounded-full flex items-center justify-between text-black px-4 relative z-10 ml-4">
                  <p>Unverbindliches kennenlernen</p>
                  <div className="bg-n-14 w-8 h-8 rounded-full"></div>
                </div>
              </div>
              <div className="relative flex items-center">
                <div className="bg-n-14 w-full h-20 rounded-full absolute left-0 top-0 transform translate-x-2 translate-y-2"></div>
                <div className="bg-n-14 w-20 h-20 rounded-full flex items-center justify-center text-2xl translate-x-2 translate-y-2 font-bold text-white relative z-10">02</div>
                <div className="bg-white w-full h-20 rounded-full flex items-center justify-between text-black px-4 relative z-10 ml-4">
                  <p>Analyse zur Umsetzung der Ziele</p>
                  <div className="bg-n-14 w-8 h-8 rounded-full"></div>
                </div>
              </div>
              <div className="relative flex items-center">
                <div className="bg-n-14 w-full h-20 rounded-full absolute left-0 top-0 transform translate-x-2 translate-y-2"></div>
                <div className="bg-n-14 w-20 h-20 rounded-full flex items-center justify-center text-2xl translate-x-2 translate-y-2 font-bold text-white relative z-10">03</div>
                <div className="bg-white w-full h-20 rounded-full flex items-center justify-between text-black px-4 relative z-10 ml-4">
                  <p>Detailliertes Angebot</p>
                  <div className="bg-n-14 w-8 h-8 rounded-full"></div>
                </div>
              </div>
              <div className="relative flex items-center">
                <div className="bg-n-14 w-full h-20 rounded-full absolute left-0 top-0 transform translate-x-2 translate-y-2"></div>
                <div className="bg-n-14 w-20 h-20 rounded-full flex items-center justify-center translate-x-2 translate-y-2 text-2xl font-bold text-white relative z-10">04</div>
                <div className="bg-white w-full h-20 rounded-full flex items-center justify-between text-black px-4 relative z-10 ml-4">
                  <p>Kick Off des Projekts</p>
                  <div className="bg-n-14 w-8 h-8 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <Heading
          title="UNSERE WERTE"
        />
          <div className="container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-n-14 mb-2">Globaler Blick:</h3>
                <p>Berücksichtigung globaler Trends und Märkte, um internationale Kunden effektiv zu unterstützen.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-n-14 mb-2">Innovation:</h3>
                <p>Unsere Bereitschaft, ständig neue Ideen, Ansätze und Technologien zu nutzen, um innovative Lösungen zu finden.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-n-14 mb-2">Kundenorientierung:</h3>
                <p>Unser Fokus liegt darauf, den Kunden in den Mittelpunkt zu stellen und maßgeschneiderte Lösungen zu bieten.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-n-14 mb-2">Performance:</h3>
                <p>Stets Spitzenleistungen erbringen.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-n-14 mb-2">Teamwork:</h3>
                <p>Wir setzen immer auf Teamarbeit, auch bei anstrengenden Projekten.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-n-14 mb-2">Kreativität:</h3>
                <p>Digitales Branding erfordert Kreativität, die wir gemeinsam mit unseren Kunden einbringen.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-center items-center mt-4">
          <Button href="/pricing" white>
          KONTAKTIERE UNS HIER
          </Button>
        </div>
      <BottomLine />
    </ Section>
  );
};

export default Services;
