import { useEffect } from "react";
import AnimationWrapper from "../../components/AnimationWrapper";
import { leadershipTeams } from "../../constants";

const LeadershipTeam = () => {
  useEffect(() => {
    document.title =
      "Leadership Team | Transport Service in India | Vinsum Axpress";
  }, []);
  return (
    <AnimationWrapper className="px-4 pt-10 space-y-12">
      <div className="box">
        <div className="w-full md:space-y-8 space-y-4">
          <h1 className="sm:text-5xl text-3xl font-semibold leading-tight">
            Meet our team of <i>creaters</i>, <br className="sm:block hidden" />{" "}
            <i>designers</i>, and world class <br className="sm:block hidden" />{" "}
            <i>problem solvers</i>
          </h1>

          <p className=" max-w-2xl w-full">
            To be the company our customers want us to be, it takes an electric
            group of passionate operators. Get to know the people leading the
            way at Vinsum
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6  box">
        {leadershipTeams.map((member, index) => {
          return (
            <AnimationWrapper
            transition={{ duration: 1, delay: index * 0.2 }}
              key={index}
              className="rounded w-auto h-full  space-y-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

              <div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="italic font-medium font-lato opacity-90">{member.position}</p>
              </div>
            </AnimationWrapper>
          );
        })}
      </div>
    </AnimationWrapper>
  );
};

export default LeadershipTeam;
