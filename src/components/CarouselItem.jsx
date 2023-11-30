import React from "react";

function CarouselItem({poster}) {
  return (
    <div className="carousel-item">
      <img
        src={poster}
        className="rounded-[8px] w-[106px] h-[136px]"
      />
    </div>
  );
}

export default CarouselItem;
