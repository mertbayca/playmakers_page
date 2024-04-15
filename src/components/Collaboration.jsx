import { face, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section id="services" crosses customPaddings="py-5 lg:py-10">
      <div className="container lg:flex">
        <div className="lg:flex lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <div className="lg:ml-auto xl:w-[38rem] mt-4">
              <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                {collabText}
              </p>
            </div>
            <div className="max-w-[25rem] lg:max-w-none lg:ml-auto">
              <h2 className="h2 mb-4 md:mb-8">
                UNSERE SERVICES
              </h2>
              <ul className="max-w-[22rem] mb-10 md:mb-14">
                {collabContent.map((item) => (
                  <li className="mb-3 py-3" key={item.id}>
                    <div className="flex items-center">
                      <img src={check} width={24} height={24} alt="check" />
                      <h6 className="body-2 ml-5">{item.title}</h6>
                    </div>
                    {item.text && (
                      <p className="body-2 mt-3 text-n-4">{item.text}</p>
                    )}
                  </li>
                ))}
              </ul>
              <Button>Contact Us</Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:flex lg:justify-start lg:items-center">
            <img src={face} alt="face" className="w-128 mx-auto lg:w-256" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
