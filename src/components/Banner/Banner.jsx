import React from "react";

const Banner = () => {
  return (
    <div className="lg:px-28 md:px-12 px-1">
      <div className="lg:mt-28 mt-10 lg:bg-bannerColor rounded-rad lg:max-h-80 min-h-80 ">
        <div className="lg:mx-8 mx-0  h-full flex lg:flex-row flex-col lg:gap-2 ">
          <div className=" w-full md:px-0 px-3  lg:h-80 h-fit flex flex-col lg:justify-center gap-6 ">
            <h1 className="xl:text-5xl sm:text-4xl text-3xl lg:w-[93%] w-full lg:text-start text-center   ms-auto lg:text-white text-black font-bold">
              {" "}
              Deliver Food To Your Door Step|
            </h1>
            <p className="   lg:text-slate-200 text-slate-400  lg:w-[93%] lg:text-start text-center w-full ms-auto sm:text-2xl text-sm  ">
              Authentic Food|,Quick Service,Fast Delivery.
            </p>
          </div>
          <div className=" w-full  xs:px-0 px-16    lg:bg-transparent lg:mt-0 mt-12 bg-bannerColor2 lg:rounded-none rounded-rad  lg:h-80 h-72  relative">
            <img
              className="absolute  bottom-0 xl:-left-4 left-0 w-full  lg:h-full h-96"
              src="/images/Image1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
