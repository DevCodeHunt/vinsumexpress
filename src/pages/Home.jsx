import { ArrowRight, MousePointer, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { clients } from "../constants";

const Home = () => {
  return (
    <>
      <section className="pt-40">
        <div className="box flex flex-col items-center justify-center">
          <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-bold !leading-tight text-center">
            Give your team the freedom <br className="sm:inline-block hidden" />{" "}
            to be more creative
          </h1>
          <p className="text-center max-w-xl my-2 font-medium text-gray-600 sm:text-base text-sm">
            With our intuitive interface and powerful design features, your team
            can explore endless possibilities and push the boundaries of design.
          </p>

          <div className="flex items-center justify-center gap-4 my-6">
            <button className="primary-btn">Sign up, its free</button>

            <button>
              Demo Delta
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 my-2">
            <div className="flex items-center">
              {new Array(4).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border border-white bg-primary/20 -ml-4"
                ></div>
              ))}
            </div>
            <p className="flex items-center gap-1">
              <span className="font-bold">5000+</span>
              <span className="opacity-90 font-medium">
                Millions using delta
              </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="box relative rounded-xl !px-8  bg-gradient-to-r bg-blue-700 to-blue-200 text-white h-fit flex xl:flex-row flex-col ">
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

          <div className="relative xl:flex-1 xl:py-0 pb-12 flex items-center justify-center">
            <div className="w-[300px] h-[84vh] xl:absolute -top-12 xl:left-1/2 xl:-translate-x-1/2 bg-gray-200 rounded-3xl z-10 mx-auto translate-x-0">
              <img
                src="https://cdn.pixabay.com/photo/2024/09/02/15/06/sunset-9017041_1280.jpg"
                alt="mobile"
                className="w-full h-full rounded-3xl object-cover absolute inset-0 z-[1]"
              />
              {/* circle */}
              <div className="md:block hidden w-[180px] h-[180px] rounded-full bg-neutral-50 opacity-30 absolute -left-10 top-10 -z-2"></div>
              <div className="md:block hidden w-[220px] h-[220px] rounded-full bg-neutral-50 opacity-20 -z-2 absolute -left-40 bottom-4"></div>
              {/* Rectangle */}
              <div className="md:block hidden w-[230px] h-[230px] rounded-xl bg-neutral-50 opacity-25 absolute -right-24 bottom-20 -z-2 rotate-45"></div>

              {/* Left Box */}
              <div className="md:block hidden absolute top-28  h-[65%] bg-none border-2 border-white rounded-xl w-[27.3rem] -left-16"></div>
              <div className="md:block hidden h-[240px] w-56 bg-white rounded-xl absolute  top-1/2 -translate-y-1/2 -left-44 z-10">
                <div className="w-4 h-4 rounded-full bg-white shadow flex items-center justify-center absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                </div>
              </div>

              <div className="md:block hidden h-24 w-60 rounded-xl bg-white absolute -right-48 top-[4.5rem] z-10"></div>

              <div className="md:block hidden w-60 h-28 rounded-xl bg-white absolute -right-48 bottom-16 z-10">
                <div className="w-4 h-4 rounded-full bg-white shadow flex items-center justify-center absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                </div>

                <div className="md:block hidden h-12 w-48 left-6 bg-yellow-500 rounded-xl rotate-6 absolute -bottom-9"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="box">
          <Swiper
            spaceBetween={20}
            slidesPerView={7}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            fade={true}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              340: {
                slidesPerView: 3,
              },
              540: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
              },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="py-4">
                <img src={client.logo} alt={client.name} className="w-28" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="box bg-indigo-color min-h-72"></div>
      </section>

      <section>
        <div className="box rounded-xl bg-secondary h-72"></div>

        <div className="box h-16 w-full mt-4 bg-[#DD66C3]  relative"></div>
      </section>

      <section className="py-8">
        <div className="box grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white p-4 h-auto">
            <div>
              <h2 className="text-xl font-bold">
                Gather feedback, for discussion
              </h2>
              <p className="my-2 text-sm opacity-90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
                quibusdam aliquam possimus repellendus quae in saepe asperiores
                eum ad laborum.
              </p>
              <button className="outline-btn">Feedback</button>
            </div>

            <div className="mt-20">
              <div className="w-full h-[2px] rounded-full bg-yellow-200 mb-2"></div>
              <p className="text-sm opacity-90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                dolorum a necessitatibus reiciendis, labore vitae? Ex officia
                eligendi delectus aspernatur.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative rounded-xl h-full bg-white p-4">
              <h2 className="text-xl font-bold">
                All This Power with No Coding Necessary
              </h2>
              <p className="mt-2 text-sm opacity-90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
                quibusdam aliquam possimus repellendus quae in saepe asperiores
                eum ad laborum.
              </p>
              <MousePointer className="absolute right-20 bottom-4 text-indigo-color" />
            </div>

            <div className="bg-purple-500 h-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
