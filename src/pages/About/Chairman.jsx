import { Smile } from "lucide-react";
import { useEffect } from "react";
import AnimationWrapper from "../../components/AnimationWrapper";

const Chairman = () => {
  useEffect(() => {
    document.title =
      "MD | Top Logistics Service Company in India | Vinsum Axpress";
  });
  return (
    <AnimationWrapper>
      <div className="box relative lg:py-8 pb-8  grid lg:grid-cols-2 bg-[#DEDEDE] my-4 mt-8">
        <div className="w-full px-4 relative flex items-center justify-center flex-col py-32">
          <div className="bg-[#D0D0D0] lg:h-[700px] w-1/2 absolute lg:right-0 -right-4 top-0 bottom-0 border-b-8 border-primary">
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col w-full items-center justify-center">
              <p>Social Media Seriously</p>
              <p className="font-bold">Harm your Mental Health</p>
            </div>
          </div>

          <div className="lg:hidden block z-10 relative">
            <div className="w-20 h-10 bg-primary/30 -top-4 -z-1 absolute right-0"></div>
            <h1 className="text-5xl font-bold font-lato z-10">About Me.</h1>
          </div>

          <div className=" flex flex-col gap-8 lg:p-4 lg:pt-20 pt-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-16">
            <div className="h-[200px] w-[250px] border-8 border-white rounded relative">
              <div className="w-12 h-12 rounded flex items-center justify-center absolute -left-7 top-16 bg-[#EDEDED]">
                <Smile className="opacity-60" />
              </div>

              <div className="w-4 h-10 bg-primary absolute -right-6 -z-1 bottom-8"></div>
            </div>

            <div className="lg:flex hidden flex-col gap-4 pl-8">
              <a
                href="#"
                target="_blank"
                className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#"
                target="_blank"
                className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a
                href="#"
                target="_blank"
                className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full relative  flex flex-col justify-center p-4 px-8">
          <div className="lg:block hidden absolute -left-20 top-20">
            <div className="w-20 h-10 bg-primary/30 -top-4 -z-1 absolute right-0"></div>
            <h1 className="text-5xl font-bold font-lato z-10">About Me.</h1>
          </div>

          <div className="relative lg:pt-40 pt-10">
            <p className="text-2xl leading-relaxed relative before:content-[''] before:absolute before:lg:-left-16 before:-left-12 before:top-5 before:lg:w-14 before:w-10 before:h-[1px] before:bg-black">
              {" "}
              I really don&#39;t want to explain so much but if I wanted to
              explain myself. I would rather consiter on{" "}
              <strong>Tree Subject.</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 pt-8">
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 bg-black mt-2"></div>
              <p className="flex-1">
                On behalf of our team, I take this opportunity to welcome you to
                Vinsum Axpress. I would like to thank all our customers for
                lending us continuous support, especially during our formative
                years. We at Vinsum Axpress, are committed in our vision to
                provide cost-effective transport solutions through surface
                services, warehouse management, international freight
                forwarding, express distribution services, 3pl/4pl, packaging
                and project management.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 bg-black mt-2"></div>
              <p className="flex-1">
                As the preferred supplier for fortune 100 automobile companies
                and the first point of contact to increase the efficiency in
                India, we are proud of our reputation and will always strive to
                maintain it. With over 18 years of experience in the market and
                dealing with different verticals and projects, our constant
                commitment and value delivery has enabled us to earn the trust
                of our clients.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 bg-black mt-2"></div>
              <p className="flex-1">
                We are enterprising, and we see ourselves at a different level
                in the next couple of years with regards to new products and
                services, more locations, and increased revenue figures.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 bg-black mt-2"></div>
              <p className="flex-1">
                The inception of Vinsum Axpress was in year 2002. It emerged as
                a fast growing freight forwarding company, spreading its wings
                PAN INDIA to reach out and extend valuable support to its valued
                clientele with utmost sincerity and dedication.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 bg-black mt-2"></div>
              <p className="flex-1">
                As Chairman & Managing Director of the company, I wish to
                reinforce our commitment to serve each and every customer with
                passion and pride. We ensure that customers enjoy our unmatched
                service offerings to their utmost satisfaction and delight.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col py-20 mt-6 items-center justify-center bg-[#2E2E2E] text-white gap-6">
          <div className="flex flex-col w-full items-center justify-center">
            <p>Social Media Seriously</p>
            <p className="font-bold">Harm your Mental Health</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              target="_blank"
              className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              target="_blank"
              className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a
              href="#"
              target="_blank"
              className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Chairman;
