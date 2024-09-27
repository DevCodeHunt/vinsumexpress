import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { clients } from "../../constants";

const Clients = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };
  return (
    <section>
      <div className="box">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold text-center font-lato uppercase">
            Our trusted clients
          </h1>
          <p className="max-w-4xl w-full mx-auto text-center text-gray-600 mt-4">
            World&#39;s leading automobile industriesdsd
          </p>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          fade={true}
          modules={[Autoplay]}
          breakpoints={breakpoints}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="py-4">
              <div className="bg-white rounded-xl shadow-lg drop-shadow w-full border border-neutral-300 p-4 py-6 flex flex-col gap-4 ">
                <p className="text-sm text-gray-600 font-lato">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  odio vero ducimus repudiandae fugiat officiis ipsam pariatur,
                  perferendis deserunt odit!
                </p>
                <img src={client.logo} alt={client.name} className="w-16" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          fade={true}
          modules={[Autoplay]}
          breakpoints={breakpoints}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="py-4">
              <div className="bg-white rounded-xl shadow-lg drop-shadow w-full border border-neutral-300 p-4 py-6 flex flex-col gap-4 ">
                <p className="text-sm text-gray-600 font-lato">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  odio vero ducimus repudiandae fugiat officiis ipsam pariatur,
                  perferendis deserunt odit!
                </p>
                <img src={client.logo} alt={client.name} className="w-16" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
