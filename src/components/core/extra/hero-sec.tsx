import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroSec({
  title,
  sub,
  desc,
}: {
  title: React.ReactNode;
  sub: string;
  desc: string;
}) {
  return (
    <header className="h-[calc(100dvh-64px)] w-dvw relative flex flex-col justify-center items-center">
      <h1 className="text-6xl pt-[7%] pb-8 text-center font-medium">{title}</h1>
      <p className="text-center text-xl font-medium">{sub}</p>
      <p className="w-1/2 mx-auto block text-center pt-4 text-sm leading-relaxed">
        {desc}
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
      <div className="mt-[7%]"></div>
    </header>
  );
}
