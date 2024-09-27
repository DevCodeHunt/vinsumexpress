import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
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
          <button className="primary-btn">
            Sign up, its free
          </button>

          <button>
            Demo Delta
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 my-2">
            <div className="flex items-center">
              {new Array(4).fill(0).map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-white bg-primary/20 -ml-4"></div>
              ))}
            </div>
            <p className="flex items-center gap-1">
              <span className="font-bold">5000+</span>
              <span className="opacity-90 font-medium">Millions using delta</span>
            </p>
          </div>
      </div>
    </section>
  );
};

export default Banner;
