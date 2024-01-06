import React, { useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Modals from "../Modal";
import NaviGateButton from "./NaviGateButton";

const RecommendItem = ({ recommended }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-16">
      <Swiper
        className="flex flex-col-reverse justify-end  min-h-96"
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
        spaceBetween={30}
        navigation={false}
        modules={[Pagination, Navigation]}
        simulateTouch={false}
      >
        <div className="flex justify-between mb-2 ">
          <h1 className="text-slate-900  text-xl font-semibold">Recommended</h1>
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
          {recommended.map((item) => (
            <SwiperSlide key={item.Id}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <Modals
        open={open}
        setOpen={setOpen}
        title="Add New Recommended Items"
        IsPopular={false}
        IsRecommended={true}
      />
    </div>
  );
};

export default RecommendItem;
