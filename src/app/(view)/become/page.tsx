import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import ProcessFlow from "./flow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroSec from "@/components/core/extra/hero-sec";

export default function Page() {
  return (
    <>
      <HeroSec
        title={
          <>
            <span className="text-primary">Connect</span> with clients <br /> in
            your <span className="text-primary">league</span>
          </>
        }
        sub="Top vetted talent, ready to help you bring your ideas to life"
        desc="Connect with top-tier freelancers ready to bring your vision to life.
          Our platform offers experts in design, development, marketing, and
          writing to meet your specific needs. Discover the talent that can
          elevate your project"
      />
      <main>
        <section>
          <h1 className="text-5xl pt-[7%] pb-8 text-center font-medium">
            Bring on the <span className="text-primary">benefits</span>
          </h1>
          <div className="mt-12 px-4 lg:px-[7%] grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((x, i) => (
              <Card
                key={i}
                className={`hover:${
                  i % 2 === 0 && "-"
                }skew-1 transition-transform`}
              >
                <CardHeader>
                  <Image
                    src={x.image}
                    height={200}
                    width={400}
                    alt="thumbnail"
                    className="w-1/2 mx-auto"
                  />
                </CardHeader>
                <CardContent className="space-y-2 text-center">
                  <CardTitle className="text-xl">{x.title}</CardTitle>
                  <CardDescription>{x.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="my-[200px] px-4 lg:px-[7%]">
          <ProcessFlow />
        </section>
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
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <div className="mt-12 bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] py-24 px-24 grid grid-cols-2 gap-6">
          <h1 className="text-6xl font-medium text-background">
            Join Our Community of <br />
            Top Freelancers
          </h1>
          <div className="text-background">
            <h5 className="text-xl">
              Sign up now to start working on high- <br />
              quality projects and earn competitive rates
            </h5>
            <p className="text-xs mt-2">
              Create your profile in minutes and connect with clients worldwide
            </p>
            <div className="mt-12 items-center gap-6 grid grid-cols-2">
              <Button
                className="w-full bg-background text-foreground"
                size="xlg"
              >
                EXPLORE SERVICE
              </Button>
              <Button
                className="w-full bg-transparent! border-background"
                variant="outline"
                size="xlg"
              >
                JOIN AS A PRO
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const benefits = [
  {
    image: "/resource/benifits/1.svg",
    title: "Pro badge",
    desc: "Stand out with a blue Pro badge on your profile and services, signifying your vetted status on Fiverr.",
  },
  {
    image: "/resource/benifits/2.svg",
    title: "Access to premium clients",
    desc: "Take your place in a curated Pro catalog. Connect with clients looking for bigger, ongoing projects.",
  },
  {
    image: "/resource/benifits/3.svg",
    title: "Client recommendations",
    desc: "Establish credibility by requesting testimonials from clients outside of Fiverr to build up your profile.",
  },
  {
    image: "/resource/benifits/4.svg",
    title: "Past work experience",
    desc: "Showcase career milestones on your profile from past achievements to current expertise.",
  },
  {
    image: "/resource/benifits/5.svg",
    title: "Exclusive community",
    desc: "Join our Pro-only hub for strategic partnerships, upskilling opportunities, and perks.",
  },
  {
    image: "/resource/benifits/6.svg",
    title: "Customer protection",
    desc: "We have your back. If a Pro client is unsatisfied and cancels an order, you'll still get paid within 14 days.",
  },
];

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
