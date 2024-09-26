import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-300 h-[800px] bg-hero  bg-no-repeat bg-cover bg-right py-24 ">
      <div className="container mx-auto flex justify-start h-full">
        <div className="flex flex-col mt-[30px]">
          <div>
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] bg-orange-300 mr-3"></div>New Trend
            </div>
            <h1 className="text-[50px] lg:text-[80px] xl:text-[100px] text-orange-300 leading-[1.1] font-light mb-4">
              Kerdasi's Shop 
              <p className="font-light text-black text-[30px] lg:text-[50px] xl:text-[70px]">MEN AND WOMEN</p>
              </h1>
              <Link className="self-start uppercase font-semibold border-b-2 border-black" to={'/'}>
              Discover More
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
