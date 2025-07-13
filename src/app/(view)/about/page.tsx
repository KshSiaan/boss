import HeroSec from "@/components/core/extra/hero-sec";

import React from "react";
import AboutGrid from "./about-grid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import JoinComm from "@/components/core/extra/join-comm";
import FAQSec from "@/components/core/extra/faq-sec";

export default function Page() {
  return (
    <>
      <HeroSec
        title={
          <>
            All you can do on <br />
            <span className="text-primary">Boss Pro</span>
          </>
        }
        sub="Empower your team to easily discover, manage, and collaborate with top freelancers"
        desc="Discover tools to find freelancers and manage projects collaboratively. At Boss, we simplify the process of connecting with top talent and streamline project management to ensure success"
      />
      <main>
        <AboutGrid />
        <section className="w-full my-12 mt-[20dvh] px-4 lg:px-[7%] grid lg:grid-cols-2 gap-6">
          <div className="">
            <h3 className="text-5xl font-semibold">
              Who <span className="text-primary">We Are</span>
            </h3>
            <p className="mt-12 w-4/5">
              At Boss, we are dedicated to transforming the freelancing
              landscape by creating a platform where quality meets opportunity.
              Our goal is to empower both freelancers and clients, fostering a
              community where professionals can thrive and projects can succeed
            </p>
            <Button className="px-12! uppercase mt-12" size="xlg">
              Join as a Pro
            </Button>
          </div>
          <div className="space-y-12">
            {howitworks.map((x, i) => (
              <div
                className={cn(
                  `pt-12 px-6 relative border-b-2 pb-6`,
                  i === 0 && "border-primary text-primary"
                )}
                key={i}
              >
                <h4
                  className={cn(
                    "text-8xl font-bold absolute top-0 left-0 -z-20 text-foreground/30",
                    i === 0 && "text-primary/25"
                  )}
                >
                  0{i + 1}
                </h4>
                <h2 className="text-4xl font-semibold pb-2">{x.title}</h2>
                <p className="w-3/4 text-foreground! leading-relaxed">
                  It&apos;s free and easy! Get lots of competitive bids that
                  suit your budget in minutes. Start making your dreams reality.
                </p>
              </div>
            ))}
          </div>
        </section>
        <JoinComm />
        <FAQSec />
      </main>
    </>
  );
}
const howitworks = [
  {
    title: "Our Mission",
    para: "To bring Employers and Freelancers together from around the globe to get work done",
  },
  {
    title: "Our Vision",
    para: "To help build a better world that's interconnected for prosperity and wired for peace",
  },
  {
    title: "Our Proposition",
    para: "Connect, collaborate, and get work done in a safe and flexible online environment",
  },
];
