import FAQSec from "@/components/core/extra/faq-sec";
import JoinComm from "@/components/core/extra/join-comm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <header className="h-[60dvh] w-full px-4 lg:px-[7%] grid lg:grid-cols-2 gap-6">
        <div className="h-full w-full flex  justify-end lg:justify-center items-end lg:items-center">
          <h1 className="text-5xl font-semibold">
            <span className="text-primary">Trusted</span> by the <br /> world’s
            largest teams
          </h1>
        </div>
        <div className="h-full w-full lg:flex justify-center items-center">
          <p className="text-muted-foreground">
            Get inspired, learn and read first-hand feedback from teams around
            the globe on how they are getting value from Dovetail
          </p>
        </div>
      </header>
      <main className="h-full w-full">
        <div className="px-4 lg:px-[7%]">
          <div className="w-full border-b-2 py-4 flex justify-between items-center">
            <p>
              Customer stories : <span className="text-orange-500">26</span>
            </p>
            <Button variant="ghost">Filter</Button>
          </div>
        </div>
        <section className="py-12 divide-y px-4 lg:px-[7%]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              className="lg:h-[40dvh] grid lg:grid-cols-2 gap-6 py-12"
              key={i}
            >
              <div className="flex flex-col justify-between items-start">
                <h3 className="text-3xl font-semibold">
                  Shopify Thrives with Flexible Talent from Boss
                </h3>
                <div className="">
                  <p className="mb-8">
                    Shopify harnesses the power of flexible freelancing with
                    Boss. Here’s their success story.
                  </p>
                  <div className="flex items-center gap-4 text-primary">
                    <p>Software</p>
                    <p>Australia</p>
                    <p>7,000+</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end items-center">
                <Image
                  src="/image/service_image01.jpg"
                  height={400}
                  width={600}
                  className="w-full lg:w-2/3"
                  alt="story_img"
                />
              </div>
            </div>
          ))}
        </section>
        <JoinComm />
        <FAQSec />
      </main>
    </>
  );
}
