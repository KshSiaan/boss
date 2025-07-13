import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { ChevronRightIcon, CircleCheck, PencilLine } from "lucide-react";
import Link from "next/link";
import JoinComm from "@/components/core/extra/join-comm";
import FAQSec from "@/components/core/extra/faq-sec";

export default function Page() {
  return (
    <>
      <header className="h-[calc(100dvh-64px)] w-dvw relative px-4 lg:px-0">
        <h1 className="text-3xl lg:text-6xl pt-[7%] pb-8 text-center font-medium">
          How can we <span className="text-primary">help</span> you
        </h1>
        <p className="text-center text-base lg:text-xl font-medium">
          Empower your team to easily discover, manage, and collaborate with top
          freelancers
        </p>
        <p className="w-full lg:w-1/2 mx-auto block text-center pt-4 text-sm leading-relaxed">
          Connect with top-tier freelancers ready to bring your vision to life.
          Our platform offers experts in design, development, marketing, and
          writing to meet your specific needs. Discover the talent that can
          elevate your project
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 my-8!">
          <Button className="uppercase px-8! py-6! w-full lg:w-auto">
            Explore Services
          </Button>
          <Button
            variant="outline"
            className="border border-foreground px-8! py-6! uppercase w-full lg:w-auto"
          >
            Join as a Pro
          </Button>
        </div>
        <div className="mt-[7%] ">
          <div className="border border-primary/30 rounded-full lg:w-1/2 flex items-center justify-between pl-2 mx-auto shadow-[0_0_100px_1px_#F4802550,0_0_40px_1px_#F4802510] bg-inherit">
            <Input
              className="border-0! outline-0! ring-0! shadow-none font-semibold text-sm bg-transparent"
              placeholder="Search for a skill...."
            />
            <Button size="lg" className="uppercase">
              Search
            </Button>
          </div>
        </div>
      </header>
      <main className=" mb-12">
        <section className="px-4 lg:px-[7%]">
          <h1 className="text-4xl font-semibold mb-12">Help Topics</h1>
          <div className="w-full mt-24 grid lg:grid-cols-3 gap-6">
            {helpTopics.map((x, i) => (
              <Card key={i}>
                <CardContent className="items-start flex justify-start gap-4">
                  <div className="p-2 border rounded-full bg-[#EADBCE80]">
                    <x.icon className="size-6 text-primary" />
                  </div>
                  <div className="flex-2 space-y-3">
                    <CardTitle>{x.title}</CardTitle>
                    <CardDescription>{x.description}</CardDescription>
                    <Link
                      href="#"
                      className="text-primary underline text-sm underline-offset-2 hover:text-primary/80"
                    >
                      Learn more
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="px-4 lg:px-[7%]">
          <h1 className="text-4xl font-semibold mt-24 mb-12">
            Featured Articles
          </h1>
          <Card className="">
            <CardContent className="divide-y-2 font-medium">
              {feats.map((x, i) => (
                <div
                  className="flex w-full justify-between items-center py-4"
                  key={i}
                >
                  <div className="hover:text-primary cursor-pointer">{x}</div>
                  <div className="">
                    <ChevronRightIcon />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
        <JoinComm />
        <FAQSec />
      </main>
    </>
  );
}

const helpTopics = [
  {
    icon: CircleCheck,
    title: "Getting Started",
    description:
      "Learn how to create your account and set up your profile on Boss",
  },
  {
    icon: PencilLine,
    title: "Posting a Project",
    description:
      "Step-by-step guide to posting your first project and finding the right freelancer",
  },
  {
    icon: CircleCheck,
    title: "Managing Projects",
    description:
      "Tips on how to effectively manage your projects and communicate with freelancers",
  },
  {
    icon: CircleCheck,
    title: "Payments and Invoices",
    description:
      "Information on how to handle payments securely and manage invoices on the platform",
  },
  {
    icon: CircleCheck,
    title: "Account Settings",
    description:
      "How to update your account information, change your password, and manage notifications",
  },
  {
    icon: CircleCheck,
    title: "Hiring Freelancers",
    description:
      "Best practices for reviewing proposals and hiring the best talent for your project",
  },
  {
    icon: CircleCheck,
    title: "Security and Privacy",
    description:
      "Understand the measures we take to protect your data and ensure a safe experience",
  },
  {
    icon: CircleCheck,
    title: "Dispute Resolution",
    description:
      "Guidance on resolving disputes between clients and freelancers effectively",
  },
  {
    icon: CircleCheck,
    title: "FAQs",
    description:
      "Answers to the most common questions about using the Boss platform",
  },
];

const feats = [
  "How to Create an Effective Freelancer Profile",
  "Best Practices for Writing Compelling Project Descriptions",
  "Securing Your Account: Essential Tips",
  "Understanding Payment Milestones",
  "Communicating Effectively with Freelancers",
  "How to Resolve Common Disputes",
  "Maximizing Your Freelance Earnings on Boss",
];
