import React from 'react';
import Button from "./Button";
import Section from "./Section";
import athlete from "../assets/athleteImage.png"
import Heading from "./Heading"

const SportManagementSection = () => {
  return (
    <Section id="sportsm" className="text-white">
      <div className="container mx-auto px-4 py-10 flex flex-wrap justify-center text-center">
        <div className="mb-10 lg:mb-0 lg:w-1/2 flex justify-center">
          <img src={athlete} alt="Athlete" className="max-w-full lg:max-w-sm object-contain" />
        </div>
        <div className="lg:w-1/2">
          <Heading tag="PLAYMAKERS" title="SPORTS MANAGEMENT" text="Wir bieten Beratung und Unterstützung in den Bereichen Vermarktung, Sponsoring, Athletenmanagement und Eventorganisation."/>
          <div className="bg-n-14 text-2xl font-bold py-2 px-4 mb-8 inline-block">
            SPORT IST BUSINESS! Steigern Sie Ihren sportlichen Erfolg mit unserem Digitalen Sport Marketing Consulting
          </div>
          <h3 className="text-color-1 text-3xl font-semibold mb-4">LEISTUNGEN:</h3>
          <ul className="list-none">
            <li className="mb-2">
              <p className="text-color-1">Digitale Präsenzoptimierung: (Für Club & Athleten)</p>
              <p className="text-sm">Wir steigern Ihre Online-Sichtbarkeit und Präsenz, um Ihre Marke einem breiten Publikum zugänglich zu machen.</p>
            </li>
            <li className="mb-2">
            <p className="text-color-1">Fan-Engagement und Community-Aufbau:</p>
              <p className="text-sm">Wir helfen Ihnen, eine engagierte und begeisterte Fangemeinschaft aufzubauen.</p>
            </li>
            <li className="mb-2">
            <p className="text-color-1">Innovative Inhalte:</p>
              <p className="text-sm">Unsere kreativen Experten entwickeln hochwertige Inhalte, die Ihre Botschaft effektiv übermitteln. Von ansprechenden Videos und Grafiken bis hin zu inspirierenden Geschichten.</p>
            </li>
          </ul>
          <Button href="/contact" className="mt-6">AND MORE AUF ANFRAGE</Button>
        </div>
      </div>
    </Section>
  );
};

export default SportManagementSection;
