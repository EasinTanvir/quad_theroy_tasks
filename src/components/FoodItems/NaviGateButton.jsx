import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const NaviGateButton = () => {
  const swiper = useSwiper();
  const [data, setData] = useState(false);

  const onNextHandler = () => {
    swiper.slideNext();
    setData(!data);
  };
  const onPrevHandler = () => {
    swiper.slidePrev();
    setData(!data);
  };
  return (
    <div className="flex gap-0">
      <button disabled={swiper.isBeginning} onClick={onPrevHandler}>
        <ChevronLeftIcon
          className={swiper.isBeginning ? `text-gray-400` : ""}
          style={{ fontSize: "30px" }}
        />
      </button>
      <button disabled={swiper.isEnd} onClick={onNextHandler} className="-ms-1">
        <ChevronRightIcon
          style={{ fontSize: "30px" }}
          className={swiper.isEnd ? `text-gray-400` : ""}
        />
      </button>
    </div>
  );
};

export default NaviGateButton;
