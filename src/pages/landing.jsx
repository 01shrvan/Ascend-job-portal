import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "../data/companies.json";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 mx-4 sm:mx-10 md:mx-20">
      <section className="text-center">
        <Link to="/" className="flex flex-col items-center">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-4 text-gray-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7h20L12 2z" />
            <path d="M2 7l10 5 10-5M2 7v10l10 5 10-5V7" />
          </svg> */}
          <h1
            className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-gray-500"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}
          >
            Take Your Career to New Heights
          </h1>
        </Link>
        <p className="mt-4 text-lg text-gray-600">
          Explore opportunities that match your skills and aspirations.
        </p>
      </section>

      <div className="flex flex-col items-center">
        {/* Button Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/my-jobs" className="w-full sm:w-auto">
            <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-green-700 w-full">
              Get Started
            </button>
          </Link>
          <Link to="/jobs" className="w-full sm:w-auto">
            <button className="border border-gray-400 text-gray-700 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900 w-full">
              Learn More
            </button>
          </Link>
        </div>

        {/* Carousel */}
        <Carousel className="w-full py-10">
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className="h-12 sm:h-20 object-contain transition duration-300 ease-in-out transform hover:scale-110"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Placeholder for additional content */}
        <section className="mt-10">
          {/* Add your cards or other content here */}
        </section>

        {/* Accordion Section Placeholder */}
        <section className="mt-10">
          {/* Add your accordion component here */}
        </section>
      </div>
    </main>
  );
};

export default LandingPage;