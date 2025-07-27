import JoinComm from "@/components/core/extra/join-comm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="pt-12">
      <div className="px-4 lg:px-[7%]">
        <Card className="bg-transparent shadow-none! h-60">
          <CardContent className="flex items-start gap-6">
            <Image
              src="/image/jobs.jpg"
              height={400}
              width={400}
              className="size-48 rounded-lg"
              alt="avatar"
            />
            <div className="h-full flex justify-between items-start flex-col">
              <h1 className="text-2xl font-semibold">Amy Lee</h1>
              <p>VFX / Video Editor</p>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <MapPinIcon className="size-4" />
                Manchester
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="h-full flex flex-col gap-3 ml-[20dvh]">
              <p>Portfolios</p>
              <p className="flex items-center gap-4 text-xl font-semibold">
                Linkedin <span>.</span> Resume
              </p>
              <p>Contact Details</p>
              <p className="flex items-center gap-4 text-xl font-semibold">
                amy@boss.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="px-4 lg:px-[7%] mt-6">
        <Card>
          <CardHeader>
            <CardTitle>About me:</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Hey, I’m Kyle — a passionate Graphic Designer with 8 years of
              professional experience turning ideas into powerful visual
              stories. Originally from the UK and now working in New York, I’ve
              had the privilege of collaborating with brands across industries,
              helping them stand out in crowded markets through strategic and
              eye-catching design. Design, to me, is more than making things
              look good. It’s about understanding a brand’s essence, its
              audience, and crafting visuals that communicate, resonate, and
              inspire. Over the years, I’ve worked on a wide range of projects —
              from branding and identity design to digital content, advertising
              campaigns, and packaging. My style blends creativity with
              precision, ensuring every design not only looks stunning but
              serves a clear purpose. Whether I’m designing a minimalist logo, a
              bold social media campaign, or a complex visual identity system,
              my goal is always the same: create designs that leave a lasting
              impact. When I’m not working on client projects, you’ll probably
              find me exploring new design trends, refining my craft, or
              experimenting with fresh creative ideas. If you’re looking for
              someone who lives and breathes design and brings 8 years of
              real-world experience to every project, let’s connect.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="px-4 lg:px-[7%] mt-12">
        <h1 className="text-5xl font-semibold text-center mb-12">
          Explore Top <span className="text-primary">Services</span>
        </h1>
        <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              className="w-full flex flex-col justify-start items-start gap-4"
              key={i}
            >
              <Image
                src="/image/service_image01.jpg"
                height={800}
                width={600}
                alt="service_image"
                className="w-full"
              />
              <h4 className="font-semibold">Video and Animation</h4>
              <p className="text-sm">
                Video editing, animation, motion graphics, explainer videos
              </p>
              <Button
                className="w-full border-foreground uppercase"
                variant="outline"
                size="lg"
                asChild
              >
                <Link href={"/services/service"}>View service</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
      <JoinComm />
    </main>
  );
}
