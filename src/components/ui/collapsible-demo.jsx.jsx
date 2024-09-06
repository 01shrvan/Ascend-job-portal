"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react"; // Import icons as needed
import { Button } from "@/components/ui/button"; // Adjust the import based on your structure
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"; // Adjust the import based on your structure

export function CollapsibleDemo() {
  const [openIndex, setOpenIndex] = React.useState(null); // Track the currently open question

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if already open, otherwise open the clicked question
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <Collapsible key={index} open={openIndex === index} onOpenChange={() => toggleQuestion(index)} className="w-full">
          <div className="flex items-center justify-between space-x-4 px-4 py-3 bg-gray-800 rounded-md shadow hover:bg-gray-700 transition">
            <h4 className="text-lg font-semibold text-white">{faq.question}</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4 text-gray-400" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="bg-gray-900 rounded-md border border-gray-700 px-4 py-3 relative overflow-hidden">
            <div className="grid-background"></div>
            <p className="text-sm text-gray-200">{faq.answer}</p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}

// Sample FAQ Data
const faqData = [
  {
    question: "What types of jobs are available?",
    answer: "We offer a variety of job listings, including full-time, part-time, and freelance opportunities across various industries.",
  },
  {
    question: "How do I apply for a job?",
    answer: "To apply for a job, click on the job listing and fill out the application form. Make sure to upload your resume and cover letter.",
  },
  {
    question: "What should I include in my resume?",
    answer: "Include your contact information, work experience, education, and relevant skills. Tailor your resume to match the job description.",
  },
  {
    question: "How can I prepare for an interview?",
    answer: "Research the company, practice common interview questions, and prepare questions to ask the interviewer.",
  },
];