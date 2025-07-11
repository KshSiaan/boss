import FAQSec from "@/components/core/extra/faq-sec";
import HeroSec from "@/components/core/extra/hero-sec";
import JoinComm from "@/components/core/extra/join-comm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSec
        title={
          <>
            What Makes a <span className="text-primary">Boss</span> Freelancer
          </>
        }
        sub="Empower your team to easily discover, manage, and collaborate with top freelancers"
        desc="Connect with top-tier freelancers ready to bring your vision to life. Our platform offers experts in design, development, marketing, and writing to meet your specific needs. Discover the talent that can elevate your project"
      />

      <section className="w-full my-12 px-4 lg:px-[7%] grid grid-cols-2 gap-6">
        <div className="">
          <h3 className="text-5xl font-semibold">
            Who <span className="text-primary">We Are</span>
          </h3>
          <p className="mt-12 w-4/5">
            At Boss, we are dedicated to transforming the freelancing landscape
            by creating a platform where quality meets opportunity. Our goal is
            to empower both freelancers and clients, fostering a community where
            professionals can thrive and projects can succeed
          </p>
          <Button
            className="px-12! uppercase mt-12"
            size="xlg"
            variant="outline"
          >
            Join as a Pro
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 items-start">
          {why_boss.map((x, i) => (
            <Card key={i} className={cn(i % 2 !== 0 && "mt-12")}>
              <CardContent className="flex items-center justify-center">
                <div className="p-4 bg-primary text-background rounded-full">
                  <CheckIcon className="size-8" />
                </div>
              </CardContent>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{x.title}</CardTitle>
                <CardDescription>{x.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
      <section className="px-4 lg:px-[7%] mb-24">
        <h1 className="text-4xl font-semibold text-center mb-12">
          How to hire talent on <span className="text-primary">Boss Pro</span>
        </h1>
        <div className="flex justify-center items-baseline gap-3">
          <Button className="uppercase" size="xlg">
            Explore the catalog
          </Button>
          <Button variant="outline" size="xlg">
            Talent comes to you
          </Button>
          <Button variant="outline" size="xlg">
            Talent comes to you
          </Button>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-6">
          <div className={cn(`pt-12 px-6 relative pb-6`)}>
            <h4
              className={cn(
                "text-8xl font-bold absolute top-0 left-0 -z-20 text-foreground/30"
              )}
            >
              01
            </h4>
            <h2 className="text-4xl font-semibold pb-2">Explore the Catalog</h2>
            <p className="w-3/4 text-foreground! leading-relaxed">
              Connect with top-tier freelancers ready to bring your vision to
              life. Our platform offers experts in design, development,
              marketing, and writing to meet your specific needs. Discover the
              talent that can elevate your project
            </p>
            <div className="mt-12 space-x-6">
              <Button size="lg">Explore Services</Button>
              <Button variant="outline" size="lg" className="uppercase">
                Join as a Pro
              </Button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/resource/Frame 176.svg"
              height={600}
              width={300}
              className="w-4/5"
              alt="thumbnail"
            />
          </div>
        </div>
      </section>
      <JoinComm />
      <FAQSec />
    </>
  );
}

const why_boss = [
  {
    title: "Skills & expertise",
    description: "Significant experience in their specialized field",
  },
  {
    title: "Quality deliveries",
    description: "Strong work portfolio with consistent quality",
  },
  {
    title: "Work & education",
    description: "Relevant work experience and accredited expertise",
  },
  {
    title: "Client satisfaction",
    description: "Track record of positive client feedback",
  },
  {
    title: "Notable clients",
    description: "Experience working with bigger businesses",
  },
  {
    title: "Language proficiency",
    description: "Fluent communication in English and/or Spanish",
  },
  {
    title: "High motivation",
    description: "Desire to work with businesses",
  },
  {
    title: "Performance metrics",
    description: "Top ratings and reviews in and outside of Fiverr",
  },
];
