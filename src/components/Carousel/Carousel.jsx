import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img from "./img.png";
const CarouselComponent = () => {
  return (
    <div className="min-w-screen h-screen flex items-center  justify-center  xl:pt-[7rem]  ">
      <CarouselUI className=" aspect-video">
        {" "}
        {/* Full width with a max width */}
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" text-center flex justify-center items-center "
            >
              <img
                src={img}
                alt={`carousel-image-${index}`}
                className="w-full h-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselUI>
    </div>
  );
};

export default CarouselComponent;
