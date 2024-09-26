import { Play } from "lucide-react";
import { useCallback, useState } from "react";

const tabs = ["functions", "tools", "guide"];

const Banner = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleToggleTab = useCallback((tab) => setActiveTab(tab), []);
  return (
    <div className=" px-4 py-8 space-y-6">
      <div className="flex items-center gap-2">
        {tabs.map((tab, i) => (
          <button
            type="button"
            key={i}
            onClick={() => handleToggleTab(tab)}
            className={`capitalize px-6 py-2 rounded-full transition ${
              activeTab === tab
                ? "bg-primary text-white font-medium"
                : "border border-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "functions" && (
        <div className="w-full relative rounded-xl px-8  bg-gradient-to-r bg-blue-700 to-blue-200 text-white h-fit flex lg:flex-row flex-col">
          <div className="max-w-[400px] w-full py-12">
            <ul className="list-disc px-6 space-y-4 list-outside marker:text-primary">
              <li className="md:text-base text-sm">
                Registering on the platform is the first step in creating a
                course
              </li>
              <li className="md:text-base text-sm">
                You will have access to tool for uploading your materials and
                customizing your course.
              </li>
            </ul>

            <div className="mt-10">
              <div className="relative">
                <p className="sm:absolute sm:w-[150px] sm:top-1/2 sm:-translate-y-1/2 sm:right-12 text-sm sm:mb-0 mb-4">
                  our platform has all the advantages for creating your course
                </p>
                <h1 className="md:text-6xl sm:text-5xl text-4xl font-medium space-x-2 leading-tight">
                  Create your <br />
                  course
                  <br />
                  without code
                </h1>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button className="px-6 py-3 font-medium bg-black text-white text-sm">
                  Start 7-day trial
                </button>
                <button className="px-4 py-2">
                  <Play size={20} />
                  Watch Showreal
                </button>
              </div>
            </div>
          </div>

          <div className="relative lg:flex-1 lg:py-0 pb-12 flex items-center justify-center">
            <div className="w-[300px] h-[90vh] lg:absolute -top-12 lg:left-1/2 lg:-translate-x-1/2 bg-gray-200 rounded-3xl z-10 mx-auto translate-x-0">
            <img src="https://cdn.pixabay.com/photo/2024/09/02/15/06/sunset-9017041_1280.jpg" alt="mobile" className="w-full h-full rounded-3xl object-cover absolute inset-0" />
              {/* circle */}
              <div className="md:block hidden w-[180px] h-[180px] rounded-full bg-neutral-50 opacity-30 absolute -left-10 top-10 -z-2"></div>
              <div className="md:block hidden w-[220px] h-[220px] rounded-full bg-neutral-50 opacity-20 -z-2 absolute -left-40 bottom-4"></div>
              {/* Rectangle */}
              <div className="md:block hidden w-[230px] h-[230px] rounded-xl bg-neutral-50 opacity-25 absolute -right-24 bottom-20 -z-2 rotate-45"></div>

              {/* Left Box */}
              <div className="md:block hidden absolute top-28  h-[65%] bg-none border-2 border-white rounded-xl w-[27.3rem] -left-16"></div>
              <div className="md:block hidden h-[240px] w-56 bg-white rounded-xl absolute  top-1/2 -translate-y-1/2 -left-44">
                <div className="w-4 h-4 rounded-full bg-white shadow flex items-center justify-center absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                </div>
              </div>

              <div className="md:block hidden h-24 w-60 rounded-xl bg-white absolute -right-48 top-[4.5rem]"></div>

              <div className="md:block hidden w-60 h-28 rounded-xl bg-white absolute -right-48 bottom-16">
                <div className="w-4 h-4 rounded-full bg-white shadow flex items-center justify-center absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                </div>

                <div className="md:block hidden h-12 w-48 left-6 bg-yellow-500 rounded-xl rotate-6 absolute -bottom-9"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "tools" && (
        <div>
          <h1 className="text-2xl font-semibold">Tools</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            felis vel justo tincidunt consectetur.
          </p>
        </div>
      )}

      {activeTab === "guide" && (
        <div>
          <h1 className="text-2xl font-semibold">Guide</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            felis vel justo tincidunt consectetur.
          </p>
        </div>
      )}
    </div>
  );
};

export default Banner;
