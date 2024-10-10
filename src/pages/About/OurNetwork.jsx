import { Building2 } from "lucide-react";
import AnimationWrapper from "../../components/AnimationWrapper";

const overviews = [
  {
    name: "Owned Space",
    total: "30 Million Sqft",
  },
  {
    name: "Branches",
    total: "75+",
  },
  {
    name: "Warehouses",
    total: "53+",
  },
  {
    name: "Routes",
    total: "30+",
  },
  {
    name: "Serviceable PinCode",
    total: "15000+",
  },
  {
    name: "Regional Offices",
    total: "7",
  },
];

const OurNetwork = () => {
  return (
    <AnimationWrapper className="bg-[#EFF0F3] !px-8 py-10 box mt-10 space-y-6">
      <h1 className="sm:text-5xl text-3xl font-semibold">
        When we come together, we are <br className="sm:block hidden" />{" "}
        unstoppable
      </h1>

      <p className="opacity-80">
        Headquartered in Gurugram, a prominent area of the NCR, and empowered
        with a powerful and integrated distribution chain capability enabled by
        a massive network of numerous distribution-hubs and branches across the
        country, we have grown as a strong national logistics brand over the
        years.
      </p>

      <div className="flex flex-col items-start gap-1">
        <span className="text-lg font-semibold text-primary">
          Corporate Office
        </span>
        <div className="flex items-center gap-2">
          <Building2 className="text-secondary" />
          <span className="text-base text-gray-600 font-medium">Udhyog Vihar, Gurgaon</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 !my-10">
        {overviews.map((overview, index) => (
          <div
            key={index}
            className="bg-[#DDDFE5] border-2 sm:h-[150px] flex flex-col items-center justify-center border-white gap-2 sm:p-0 py-8 px-4"
          >
            <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-primary text-center">
              {overview.total}
            </h3>
            <p className="sm:text-lg text-[#0A2766] font-semibold text-center">
              {overview.name}
            </p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-6 gap-10 items-center">
        <div className="space-y-10">
          <p className="opacity-70">
            We see ourselves as the catalyst that can galvanise people and
            business into action. When we partner, the unimaginable becomes less
            daunting, and new venture and possibilities emerge to create
            impactful growth.
          </p>

          <p className="opacity-70">
            At Vinsum Axpress, we work across a wide range of logistics and
            supply chain solutions, delivering satisfaction around the globe.
            With our headquarters strategically located in Gurugram, NCR, and a
            vast network of distribution hubs and branches nationwide, we have
            grown into a leading national logistics brand. Our powerful and
            integrated distribution chain ensures that we cater to end-to-end
            logistics needs with precision and reliability.
          </p>
        </div>

        <div className="w-full">
          <img
            src="https://vinsumaxpress.com/assets/img/map.svg"
            alt="map"
            className="w-full h-full "
          />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default OurNetwork;
