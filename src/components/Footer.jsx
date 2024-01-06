import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="bg-bannerColor lg:max-h-96 min-h-96    flex items-center  rounded-bl-3xl rounded-br-3xl">
      <div className="lg:px-28 md:px-12 px-4  mx-auto w-full flex   items-center justify-between gap-1 h-full">
        <div className="xl:w-[60%] lg:w-[55%] w-full  flex flex-col md:items-start items-center gap-16 ">
          <div className="lg:w-inputWidth2 mid:w-inputWidth2 sm:w-inputWidth w-full relative">
            <input
              className="w-full py-3 rounded-2xl outline-none px-4"
              type="text"
              name=""
              placeholder="Enter your email"
              id=""
            />
            <button className="absolute flex gap-1 items-center w-36 h-10 rounded-2xl justify-center right-2 top-0 bottom-0 m-auto sm:bg-icon bg-transparent sm:text-white text-icon sm:hover:text-slate-300">
              <span> Suscribe</span>
              <span>
                <ArrowRightAltIcon />
              </span>
            </button>
          </div>
          <div className="flex md:flex-row md:justify-between md:w-full w-fit flex-col-reverse md:gap-0 gap-10  items-center">
            <div>
              <h1 className="text-black font-bold text-3xl md:mb-0 mb-2 md:text-start text-center">
                Pti
              </h1>
              <p className="text-black font-semibold">
                Copyright &copy;Trip.All Right Reserved
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="sm:bg-white bg-icon sm:hover:bg-slate-300 cursor-pointer sm:text-icon text-white h-10 w-10 rounded-full flex justify-center items-center">
                <GoogleIcon />
              </div>
              <div className="sm:bg-white bg-icon sm:hover:bg-slate-300 cursor-pointer sm:text-icon text-white h-10 w-10 rounded-full flex justify-center items-center">
                <TwitterIcon />
              </div>
              <div className="sm:bg-white bg-icon sm:hover:bg-slate-300 cursor-pointer sm:text-icon text-white h-10 w-10 rounded-full flex justify-center items-center">
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[40%] lg:w-[45%] w-full   md:flex hidden  justify-end">
          <img className="xl:w-80 lg:w-64 w-56  " src="/images/Image2.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
