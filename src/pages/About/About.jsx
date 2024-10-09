import { Link, Outlet, useLocation } from "react-router-dom";
import ROUTES from "../../utils/routes";

const tabs = [
  {
    label: "Vinsum Axpress History",
    path: "",
  },
  {
    label: "Mission, Vision & Our Values",
    path: ROUTES.ABOUT.MISSION_VISIONOUR_VALUES,
  },
  {
    label: "Chairman & Managing Director",
    path: ROUTES.ABOUT.CHAIRMAAN_AND_MANAGING_DIRECTOR,
  },
  {
    label: "Our Network",
    path: ROUTES.ABOUT.OUR_NETWORK,
  },
  {
    label: "Our Clients",
    path: ROUTES.ABOUT.OUR_CLIENTS,
  },
  {
    label: "Leadership Team",
    path: ROUTES.ABOUT.LEADERSHIP_TEAM,
  },
];

const About = () => {
  const { pathname } = useLocation();
  const baseRoute = ROUTES.ABOUT.ABOUTUS;

  return (
    <section className="pb-20 px-4 pt-40">
      <div className="box overflow-x-auto overflow-y-hidden noscrollbar">
        <div className="lg:w-full w-[1050px] flex items-center gap-6 py-3 border-b border-b-neutral-400">
          {tabs.map((tab, i) => {
            const fullPath = tab.path ? `${baseRoute}/${tab.path}` : baseRoute;
            // Check active tab
            const isActive = pathname === `/${fullPath}`;

            return (
              <Link
                to={`${tab.path}`}
                key={i}
                className={`block whitespace-nowrap cursor-pointer relative before:content-[""] before:absolute before:w-full before:h-[3px] before:rounded-full before:-bottom-[14px] before:left-0 ${
                  isActive ? "before:bg-primary" : ""
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>

      <Outlet />
    </section>
  );
};

export default About;
