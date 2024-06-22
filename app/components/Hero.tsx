import Link from "next/link";
import Image from "next/image";
import bg from "../../public/blog3.svg";
import LineLeftTop from "../containers/LinearGradient/LineLeftTop";
import LineLeftBottom from "../containers/LinearGradient/LineLeftBottom";
import LineRightTop from "../containers/LinearGradient/LineRightTop";
import LineRightBottom from "../containers/LinearGradient/LineRightBottom";
import RadialGradient from "../containers/LinearGradient/RadialGradient";
import FeatureCard from "../containers/Features/FeatureCard";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className="w-full container flex flex-row">
          <div className="flex-1 w-60 items-center justify-center justify-items-center sm:w-60 md:w-full lg:w-60">
            <div className="2xl:mx-44 2xl:mt-64 sm:mx-20 sm:mt-40 md:mx-1">
              <h1 className="font-bold text-6xl sm:text-lg md:text-4xl 2xl:text-6xl mx-2 xs:mx-5">
                Centre for Integrative Omics Data Science (CIODS)
              </h1>
              <p className="sm:text-lg xl:text-xl md:text-lg mt-4 mx-2 xs:mx-5 text-justify">
                CIODS is a part of an initiative to undertake the
                next-generation integrative omics research on various fields of
                biological sciences and also its integration to Artificial
                Intelligence platforms for translational research.
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-1 w-40 items-center justify-center justify-items-center">
            <Image
              className="mx-44 mt-40 w-3/5 xl:w-3/5 lg:w-4/5"
              src={bg}
              alt={"background"}
            />
          </div>
        </div>
        {/* <RadialGradient /> */}
        <LineLeftTop />
        <LineLeftBottom />
        <LineRightTop />
        <LineRightBottom />
        <FeatureCard />
      </section>
    </>
  );
};

export default Hero;
