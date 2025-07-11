import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Page() {
  return (
    <>
      <header className="h-[calc(100dvh-64px)] w-dvw  relative">
        <h1 className="text-6xl pt-[7%] pb-8 text-center font-medium">
          How can we <span className="text-primary">help</span> you
        </h1>
        <p className="text-center text-xl font-medium">
          Empower your team to easily discover, manage, and collaborate with top
          freelancers
        </p>
        <p className="w-1/2 mx-auto block text-center pt-4 text-sm leading-relaxed">
          Connect with top-tier freelancers ready to bring your vision to life.
          Our platform offers experts in design, development, marketing, and
          writing to meet your specific needs. Discover the talent that can
          elevate your project
        </p>
        <div className="w-full flex justify-center items-center gap-4 my-8!">
          <Button className="uppercase px-8! py-6!">Explore Services</Button>
          <Button
            variant="outline"
            className="border border-foreground px-8! py-6! uppercase"
          >
            Join as a Pro
          </Button>
        </div>
        <div className="mt-[7%]">
          <div className="border border-primary/30 rounded-full w-1/2 flex items-center justify-between pl-2 mx-auto shadow-[0_0_100px_1px_#F4802550,0_0_40px_1px_#F4802510] bg-inherit">
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
      <main className="px-4 lg:px-[7%] mb-12">
        <section>
          <h1 className="text-4xl font-semibold mb-12">Help Topics</h1>
        </section>
      </main>
    </>
  );
}
