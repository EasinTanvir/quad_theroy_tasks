import React, { useState } from "react";
import Card from "./Card";
import Modals from "../Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import NaviGateButton from "./NaviGateButton";

const PopularItem = ({ popular }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Swiper
        className="flex flex-col-reverse justify-end  min-h-92"
        breakpoints={{
          300: {
            width: 200,
            slidesPerView: 1,
          },
          640: {
            width: 250,
            slidesPerView: 1,
          },
          768: {
            width: 650,
            slidesPerView: 3,
          },
          992: {
            width: 900,
            slidesPerView: 4,
          },
          1190: {
            width: 1130,
            slidesPerView: 5,
          },
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        simulateTouch={false}
      >
        <div className="flex justify-between mb-2 ">
          <h1 className="text-slate-900  text-xl font-semibold">Popular</h1>
          <div className="w-fit flex gap-1">
            <button
              onClick={() => setOpen(true)}
              className="text-icon font-semibold"
            >
              AddMore
            </button>
            <NaviGateButton />
          </div>
        </div>
        <div>
          {popular.map((item) => (
            <SwiperSlide key={item.Id}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <Modals
        open={open}
        setOpen={setOpen}
        title="Add New Popular Items"
        IsPopular={true}
        IsRecommended={false}
      />
    </div>
  );
};

export default PopularItem;
