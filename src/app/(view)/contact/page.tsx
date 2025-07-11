import { CheckIcon } from "lucide-react";
import React from "react";
import ContactForm from "./contact-form";
import JoinComm from "@/components/core/extra/join-comm";
import FAQSec from "@/components/core/extra/faq-sec";

export default function Page() {
  return (
    <main className="my-[100px]">
      <section className="grid grid-cols-2 gap-6 px-4 lg:px-[7%] h-[calc(100dvh-124px)]">
        <div className="space-y-8">
          <h1 className="text-5xl font-semibold">
            Contact <span className="text-primary">Sales</span>
          </h1>
          <p>
            We&apos;d love to hear from you! Whether you have a question, need
            assistance, or want to provide feedback, our team is here to help.
            Please fill out the form below, and we&apos;ll get back to you as
            soon as possible
          </p>
          <ul className="space-y-6 list-inside">
            {supportPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-6">
                <CheckIcon className="text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </section>
      <JoinComm />
      <FAQSec />
    </main>
  );
}

const supportPoints = [
  "We ensure quick replies to all inquiries",
  "Our priority is to make sure you're happy with our services",
  "Our team is knowledgeable and ready to assist you with any issues",
  "Access a wide range of resources and FAQs for additional help",
];
