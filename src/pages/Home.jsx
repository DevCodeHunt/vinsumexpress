import { ArrowRight, Play, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { clients } from "../constants";

const Home = () => {
  return (
    <>
      <section className="pt-40 px-4 ">
        <div className="box flex flex-col items-center justify-center">
          <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-bold !leading-tight text-center">
            <span className="text-primary">V</span>
            <span>ersatile</span> <span className="text-primary">I</span>
            <span>ntegrated</span> <span className="text-primary">N</span>
            <span>ationwide</span> <br className="md:block hidden" />
            <span className="text-primary">S</span>
            <span>ervices</span> <span className="text-primary">U</span>
            <span>nder</span> <span className="text-primary">M</span>
            <span>obility</span>
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

      <section className="py-24 px-4 ">
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

      <section className="space-y-6 px-4 py-8 xl:pt-36 pb-24">
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

      <section className="pb-24 px-4 ">
        <div className="box rounded-xl text-white bg-secondary md:h-[320px] flex md:flex-row flex-col">
          <div className="md:w-1/2 p-4 py-6 ">
            <h1 className="sm:text-2xl text-xl font-semibold">
              Build collaboration with <br /> your dedicated design Team
            </h1>

            <p className="my-4 text-sm max-w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              vitae sit earum adipisci maxime molestiae ab at tenetur voluptas
              veniam!
            </p>

            <p className="text-sm max-w-sm mt-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              eligendi aspernatur perspiciatis modi expedita enim nostrum alias
              nemo nobis omnis?
            </p>
          </div>

          <div className="md:w-1/2 w-full"></div>
        </div>

        <div className="box grid md:grid-cols-2 gap-4 my-8">
          <div className="rounded-xl bg-white shadow drop-shadow-md p-4 h-auto">
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
            <div className="relative rounded-xl h-full bg-white p-4 shadow drop-shadow-md">
              <h2 className="text-xl font-bold">
                All This Power with No Coding Necessary
              </h2>
              <p className="mt-2 text-sm opacity-90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
                quibusdam aliquam possimus repellendus quae in saepe asperiores
                eum ad laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#7F50E3] grid sm:grid-cols-2 gap-4 !px-6 py-8 text-white pb-14 box rounded-xl rounded-tl-[3rem] my-8">
          <div className="space-y-4">
            <h1 className="sm:text-2xl text-xl font-semibold">
              Create a prototype to <br />
              simulate the real thing
            </h1>
            <p className="text-sm max-w-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              officiis sunt deserunt eaque vero doloribus aspernatur illum harum
              blanditiis dignissimos adipisci minus ex voluptate culpa ut
              possimus fugit asperiores nostrum, nam soluta dolor. Repellendus
              aliquam dolore architecto assumenda. Amet quod illum doloribus
              saepe commodi similique earum iure, beatae omnis facere!
            </p>
            <button className="border border-white">Refreence</button>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            corporis molestias est eligendi, error nisi, delectus ab in ullam
            blanditiis optio vel quam qui, earum libero voluptatem laborum
            consectetur doloribus!
          </p>
        </div>

        <div className="box bg-white shadow drop-shadow-md rounded-xl !px-4 py-6">
          <div className="w-1/2">
            <h1 className="text-xl font-bold">
              Pre-made templates created by our experts, you can get going
              quickly
            </h1>
            <p className="text-sm opacity-70 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              asperiores ratione nemo quasi at, perferendis aliquid quis
              eligendi odio ducimus?
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#4C3087] relative text-white overflow-hidden px-4">
        <div className="box py-20 !px-4">
          <Quote className="mb-2 text-yellow-400 rotate-180" />
          <p className="max-w-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            blanditiis recusandae neque provident deleniti consectetur minus ex
            iste, voluptate laudantium ab ut molestias quas nemo voluptatum
            minima, sunt excepturi laborum amet. Sint iusto excepturi quam sed,
            enim nisi totam quidem ullam sit voluptatibus nam unde repudiandae
            alias quis aspernatur tempore?
          </p>

          <p className="mt-14 text-sm opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div className="w-48 h-48 border-8 border-dashed rounded-full absolute -top-14 -left-14 z-10">
          <div className="w-40 h-40 bg-primary absolute -top-6 -left-6 rounded-full border-[0.8rem] border-white"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
