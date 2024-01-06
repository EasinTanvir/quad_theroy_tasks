import React from "react";
import RecommendItem from "./RecommendItem";
import PopularItem from "./PopularItem";

const FoodItems = ({ items }) => {
  const recommentItems = items.filter((data) => data.IsRecommended);
  const PopoularItems = items.filter((data) => data.IsPopular);

  return (
    <div className="mt-24 lg:px-28 md:px-12 px-4 ">
      <section>
        <PopularItem popular={PopoularItems} />
      </section>
      <section>
        <RecommendItem recommended={recommentItems} />
      </section>
    </div>
  );
};

export default FoodItems;
