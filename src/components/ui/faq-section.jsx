import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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

const FAQSection = () => {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-white mb-4">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index}>
            <AccordionTrigger className="text-white">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
