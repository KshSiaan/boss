import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSec() {
  return (
    <section>
      <h1 className="text-6xl text-center my-24! font-medium">
        FAQ<span className="text-primary">s</span>
      </h1>

      <div className="p-12 px-24 pt-0">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((x, i) => (
            <AccordionItem value={String(i)} key={i}>
              <AccordionTrigger className="" plus>
                <div className="">
                  <span className="mr-12">0{i + 1}</span> {x.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
const faqs = [
  {
    title: "How do I post a project?",
  },
  {
    title: "How do I find the right freelancer for my project?",
  },
  {
    title: "What are the payment methods available?",
  },
  {
    title: "Is there a secure payment system?",
  },
  {
    title: "How do I communicate with the freelancer?",
  },
  {
    title: "What if I am not satisfied with the work?",
  },
];
