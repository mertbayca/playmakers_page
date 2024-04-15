import Section from "./Section";
import { BottomLine } from "./design/Hero";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading
          tag="Get started with Playmakers"
          title="UNSERE PREISE"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Pricing;
