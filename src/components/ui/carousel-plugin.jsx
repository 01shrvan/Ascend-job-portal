import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const companies = [
  {
    name: "amazon",
    path: "/companies/amazon.svg",
    id: 1,
  },
  {
    name: "atlassian",
    path: "/companies/atlassian.svg",
    id: 2,
  },
  {
    name: "google",
    path: "/companies/google.webp",
    id: 3,
  },
  {
    name: "ibm",
    path: "/companies/ibm.svg",
    id: 4,
  },
  {
    name: "meta",
    path: "/companies/meta.svg",
    id: 5,
  },
  {
    name: "microsoft",
    path: "/companies/microsoft.webp",
    id: 6,
  },
  {
    name: "netflix",
    path: "/companies/netflix.png",
    id: 7,
  },
  {
    name: "uber",
    path: "/companies/uber.svg",
    id: 8,
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full py-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies.map(({ name, id, path }) => (
          <CarouselItem
            key={id}
            className="basis-1/3 lg:basis-1/6 flex justify-center items-center"
          >
            <img
              src={path}
              alt={name}
              className="h-12 sm:h-20 object-contain transition duration-300 ease-in-out transform hover:scale-110"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
