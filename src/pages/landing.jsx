import React from "react";
import { Link } from "react-router-dom";
import { CarouselPlugin } from "@/components/ui/carousel-plugin";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Heading from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";

// Steps Data
const steps = [
  {
    title: "1. Sign Up",
    description: "Create an account to access exclusive job listings.",
  },
  {
    title: "2. Explore Jobs",
    description: "Browse through various job opportunities tailored for you.",
  },
  {
    title: "3. Apply",
    description:
      "Submit your application and take the next step in your career.",
  },
];

// FAQ Data
const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "This platform connects job seekers with exclusive job listings tailored to their skills and aspirations.",
  },
  {
    question: "How do I apply for a job?",
    answer:
      "You can browse through job listings and submit your application directly through the platform.",
  },
  {
    question: "Is there a fee to use this service?",
    answer: "No, our services are completely free for job seekers.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out to our support team via the contact form on our website.",
  },
];

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 mx-4 sm:mx-10 md:mx-20">
      {/* Hero Section */}
      <section className="text-center mt-10">
        <Link to="/" className="flex flex-col items-center">
          <h1
            className="text-5xl font-extrabold sm:text-6xl md:text-7xl text-white"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}
          >
            Take Your Career to New Heights
          </h1>
        </Link>
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          Explore opportunities that match your skills and aspirations.
        </p>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/" className="w-full sm:w-auto">
            <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:bg-green-700 hover:scale-105">
              Get Started
            </button>
          </Link>
          <Link to="/jobs" className="w-full sm:w-auto">
            <button className="border border-gray-400 text-gray-700 font-bold py-3 px-8 rounded-md transition-transform duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900 hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>

        <div className="mt-10">
          <CarouselPlugin />
        </div>
      </div>

      {/* Banner Image */}
      <img
        src="/banner.jpeg"
        alt="Career Opportunities Banner"
        className="w-full rounded-lg shadow-md"
      />

      {/* How It Works Section */}
      <section className="mt-10 text-center">
        <Heading level={2} className="text-3xl font-bold text-white mb-4">
          How It Works
        </Heading>
        <p className="mt-2 text-lg text-white mb-6">
          Follow these simple steps to get started:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {
            faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </section>
    </main>
  );
};

// Step Card Component
const StepCard = ({ step }) => (
  <Card className="flex flex-col h-full p-6 shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl">
    <CardContent>
      <h3 className="font-semibold text-lg text-white">{step.title}</h3>
      <p className="text-gray-300">{step.description}</p>
    </CardContent>
  </Card>
);

export default LandingPage;
